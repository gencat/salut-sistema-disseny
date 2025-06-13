import { LitElement } from 'lit';

export declare class Popover extends LitElement {
    static get styles(): import('lit').CSSResult[];
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    private visibleObserver;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    _addDropdownListener(): void;
    _removeDropdownListener(): void;
    _handleOutsideClick(event: any): void;
    _handleConnectedCallback(): void;
    open: boolean;
    hasDivider: boolean;
    hideCloseIcon: boolean;
    disableParentClick: boolean;
    title: string;
    actionIcon: string | undefined;
    position: string;
    popoverFixed: boolean;
    removeMaxHeight: boolean;
    fullWidth: boolean;
    _popperInstance: any;
    _parent: HTMLElement | null;
    _disableClickOutside: boolean;
    _isFirstUpdate: boolean;
    _handleAction(): void;
    _handleClose(): void;
    private _checkClickOutside;
    private _closePopover;
    createPopperInstance(parent: HTMLElement): void;
    _propagatePlacement(placement: string): void;
    _initPopover(): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
