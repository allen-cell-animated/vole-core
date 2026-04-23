import type { Node } from "three/webgpu";

export type Args<T> = { [K in keyof T]: T[K] extends string ? Node<T[K]> : T[K] };
