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
    disconnectedCallback(): void;
    open: boolean;
    hasDivider: boolean;
    hideCloseIcon: boolean;
    title: string;
    actionIcon: string | undefined;
    position: string;
    _popperInstance: any;
    _parent: HTMLElement | null;
    _handleAction(): void;
    _handleClose(): void;
    private _clickOutside;
    private _closeMenu;
    createPopperInstance(parent: HTMLElement): void;
    _propagatePlacement(placement: string): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
