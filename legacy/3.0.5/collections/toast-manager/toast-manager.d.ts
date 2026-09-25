import { LitElement } from 'lit';
export declare class ToastManager extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private readonly _toastSelector_;
    private _slotObserver_;
    maxVisibleToasts: number;
    leftPosition?: string;
    bottomPosition?: string;
    constructor();
    connectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private applyHostCssVar;
    private initSlotObserver;
    private handleSlotMutations;
    private handleToastClose;
    private isToastElement;
    private getToastElements;
    private evaluateToasts;
    render(): import('lit-html').TemplateResult;
    disconnectedCallback(): void;
}
