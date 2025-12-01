import { LitElement } from 'lit';

export declare class Tooltip extends LitElement {
    static get styles(): import('lit').CSSResult[];
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    position: string;
    align: string;
    hide: boolean;
    noHeightLimit: boolean;
    tooltipFixed: boolean;
    _popperInstance: any;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    createPopperInstance(parent: HTMLElement): void;
    _openTooltip(): void;
    _closeTooltip(): void;
    _propagatePlacement(placement: string): void;
    updateTooltip(): void;
    render(): import('lit-html').TemplateResult;
}
