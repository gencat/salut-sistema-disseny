import { LitElement } from 'lit';

export type ToastType = 'info' | 'success' | 'warning' | 'error';
export type PostionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare class Toast extends LitElement {
    static get styles(): import('lit').CSSResult[];
    isShow: boolean;
    text?: string;
    state: ToastType;
    position: PostionType;
    icon?: string;
    hasIcon: boolean;
    buttonLabel: string;
    hasButton: boolean;
    hasButtonClose: boolean;
    duration: number;
    _firstTimeRendered_: boolean;
    _timeoutId_: number | undefined;
    constructor();
    connectedCallback(): void;
    update(changedProperties: Map<string | number | symbol, unknown>): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    updateHostAttributes(): void;
    handleAnimationEnd(): void;
    handleClickButton(): void;
    handleClose(): void;
    getText(): Array<string>;
    onKeyDown(event: KeyboardEvent): void;
    render(): import('lit-html').TemplateResult;
    disconnectedCallback(): void;
}
