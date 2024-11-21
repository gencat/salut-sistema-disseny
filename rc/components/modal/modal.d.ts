import { LitElement } from 'lit';

export declare class Modal extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set size(value: string);
    set open(value: boolean);
    set modalTitle(value: string);
    set state(value: string);
    set hideCloseIcon(value: boolean);
    set hasScroll(value: boolean);
    set modalStyle(value: string);
    _size: string;
    _open: boolean;
    _modalTitle: string;
    _state: string;
    _hasDivider: boolean;
    _hideCloseIcon: boolean;
    _hasScroll: boolean;
    _modalStyle: string | undefined;
    get _headerSlot(): HTMLInputElement;
    get _footerSlot(): HTMLInputElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    _showDialog(): void;
    _hideDialog(): void;
    _close(): void;
    _getStateIcon(): string;
    _handleKeydown(event: KeyboardEvent): void;
    _handleOutsideClick(event: any): void;
    private fixEmptyFooter;
    private _handleScroll;
    private _modalHeader;
    private _modalFooter;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
}
