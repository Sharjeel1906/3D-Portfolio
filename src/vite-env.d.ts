/// <reference types="vite/client" />

declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: Record<string, unknown>);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}
