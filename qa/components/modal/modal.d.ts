import { LitElement } from 'lit';

export declare class Modal extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set size(value: string);
    get size(): string;
    set open(value: boolean);
    get open(): boolean;
    set modalTitle(value: string);
    get modalTitle(): string;
    set state(value: string);
    get state(): string;
    set hideCloseIcon(value: boolean);
    get hideCloseIcon(): boolean;
    set hasScroll(value: boolean);
    get hasScroll(): boolean;
    set modalStyle(value: string);
    get modalStyle(): string;
    fullHeight: boolean;
    fullWidth: boolean;
    flexBody: boolean;
    removeBodyPadding: boolean;
    jcef: boolean;
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
    render(): import('lit-html').TemplateResult;
}
