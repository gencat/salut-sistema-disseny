import { LitElement } from 'lit';

export declare class ActionMenu extends LitElement {
    static get styles(): import('lit').CSSResult[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    _addDropdownListener(): void;
    _removeDropdownListener(): void;
    _handleOutsideClick(event: any): void;
    _handleFocusOut(event: FocusEvent): void;
    private visibleObserver;
    set fullWidth(value: boolean);
    get fullWidth(): boolean;
    set position(value: string);
    get position(): string;
    disablePopper: boolean;
    disableParentClick: boolean;
    open: boolean;
    _fullWidth: boolean;
    _popperInstance: any;
    _parent: HTMLElement | null;
    _position: string;
    _isVisible: boolean;
    _disableClickOutside: boolean;
    createPopperInstance(parent: HTMLElement): void;
    private _openByParent;
    private _handleCloseAllMenus;
    private _handleSlotChange;
    private _checkClickOutside;
    private _checkFocusOut;
    _closeMenu(): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
