type ResizeCallback = (entry: ResizeObserverEntry) => void;
declare class SharedResizeManager {
    private _callbacks;
    private _observer;
    private _getObserver;
    observe(element: Element, callback: ResizeCallback): void;
    unobserve(element: Element): void;
}
export declare const sharedResizeObserver: SharedResizeManager;
export {};
