export type Event<M extends Record<string, object>, E extends keyof M> = M[E] & { type: E };
export type Listener<M extends Record<string, object>, E extends keyof M> = (event: Event<M, E>) => void;

export default class EventDispatcher<EventMap extends Record<string, object>> {
  #listeners: { [E in keyof EventMap]?: Listener<EventMap, E>[] } = {};

  public addEventListener<E extends keyof EventMap>(event: E, listener: Listener<EventMap, E>): void {
    if (this.#listeners[event] === undefined) {
      this.#listeners[event] = [];
    }
    if (this.#listeners[event].indexOf(listener) === -1) {
      this.#listeners[event].push(listener);
    }
  }

  public removeEventListener<E extends keyof EventMap>(event: E, listener: Listener<EventMap, E>): void {
    const listeners = this.#listeners[event];
    if (listeners !== undefined) {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  public dispatchEvent<E extends keyof EventMap>(event: Event<EventMap, E>): void {
    const listeners = this.#listeners[event.type];
    if (listeners !== undefined) {
      for (const listener of listeners) {
        listener(event);
      }
    }
  }
}
