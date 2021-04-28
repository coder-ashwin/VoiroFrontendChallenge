export type HammerStatic = new(element: HTMLElement | SVGElement, options?: any) => HammerManager;

/** @docs-private */
export interface HammerManager {
    get(eventName: string): HammerManager;
    on(eventName: string, func: any): HammerManager;
    set(options: any): HammerManager;
}
