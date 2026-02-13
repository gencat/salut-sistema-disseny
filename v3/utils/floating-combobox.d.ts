import { Placement } from '@floating-ui/dom';
type UpdatePositionOptions = {
    placement?: Placement;
    strategy?: 'fixed' | 'absolute';
    offsetPx?: number;
    paddingPx?: number;
    matchWidth?: boolean;
};
type ExecuteShowOptions = {
    floatingEl: HTMLElement;
    parentEl?: HTMLElement | null;
    portalManager?: HTMLElement | null;
    initialParent?: HTMLElement | null;
    setInitialParent: (el: HTMLElement | null) => void;
    onUpdateFloating: () => void;
    visibleClass?: string;
};
type ScheduleShowOptions = {
    delay: number;
    clearHideTimeout: () => void;
    clearShowTimeout: () => void;
    setShowTimeout: (id: number) => void;
    onExecuteShow: () => void;
};
type HideOptions = {
    floatingEl: HTMLElement;
    initialParent?: HTMLElement | null;
    visibleClass?: string;
    hideDelay?: number;
    resetPosition?: boolean;
    clearShowTimeout: () => void;
    setHideTimeout: (id: number) => void;
    cleanupAutoUpdate?: () => void;
    setCleanupAutoUpdate: (cb?: () => void) => void;
};
type UpdateComboboxOptions = {
    referenceEl?: HTMLElement | null;
    floatingEl: HTMLElement;
    onUpdatePosition: () => void;
    setCleanupAutoUpdate: (cb?: () => void) => void;
};
export declare function scheduleShow(options: ScheduleShowOptions): void;
export declare function executeShow(options: ExecuteShowOptions): void;
export declare function hideFloating(options: HideOptions): void;
export declare function updateFloatingCombobox(options: UpdateComboboxOptions): void;
export declare function updateFloatingPosition(referenceEl: HTMLElement, floatingEl: HTMLElement, options?: UpdatePositionOptions): Promise<void>;
export {};
