import { FetchStore } from "zarrita";
import { AbsolutePath, AsyncMutable, Readable } from "@zarrita/storage";

import SubscribableRequestQueue from "../../utils/SubscribableRequestQueue";

import { SubscriberId } from "./types";
import { pathIsToMetadata } from "./utils";

type WrappedStoreOpts<Opts> = {
  options?: Opts;
  subscriber: SubscriberId;
  reportKey?: (key: string, subscriber: SubscriberId) => void;
  isPrefetch?: boolean;
};

/**
 * `Readable` is zarrita's minimal abstraction for any source of data.
 * `WrappedStore` wraps another `Readable` and adds useful extras, notably an (optional) connection to `RequestQueue`
 */
class WrappedStore<Opts, S extends Readable<Opts> = Readable<Opts>> implements AsyncMutable<WrappedStoreOpts<Opts>> {
  constructor(private baseStore: S, private queue?: SubscribableRequestQueue) {}
  // Dummy implementation to make this class easier to use in tests
  set(_key: AbsolutePath, _value: Uint8Array): Promise<void> {
    return Promise.resolve();
  }

  async get(key: AbsolutePath, opts?: WrappedStoreOpts<Opts> | undefined): Promise<Uint8Array | undefined> {
    if (pathIsToMetadata(key)) {
      return this.baseStore.get(key, opts?.options);
    }
    if (opts?.reportKey) {
      opts.reportKey(key, opts.subscriber);
    }

    let keyPrefix = (this.baseStore as FetchStore).url ?? "";
    if (keyPrefix !== "" && !(keyPrefix instanceof URL) && !keyPrefix.endsWith("/")) {
      keyPrefix += "/";
    }

    const fullKey = keyPrefix + key.slice(1);

    // Not in cache; load the chunk and cache it
    if (this.queue && opts) {
      return this.queue.addRequest(
        fullKey,
        opts.subscriber,
        async () => this.baseStore.get(key, opts?.options),
        opts.isPrefetch
      );
    } else {
      // Should we ever hit this code?  We should always have a request queue.
      return this.baseStore.get(key, opts?.options);
    }
  }
}

export default WrappedStore;
