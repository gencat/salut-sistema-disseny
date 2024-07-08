import { LitElement } from 'lit';

export declare class Modal extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set open(value: boolean);
    set modalTitle(value: string);
    set state(value: string);
    set hasDivider(value: boolean);
    set hideCloseIcon(value: boolean);
    private _open;
    private _modalTitle;
    private _state;
    private _hasDivider;
    private _hideCloseIcon;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    _showDialog(): void;
    _hideDialog(): void;
    _close(): void;
    private _getStateIcon;
    private _handleKeydown;
    private _handleOutsideClick;
    render(): import('lit-html').TemplateResult<1>;
}
