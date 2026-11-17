import { LitElement } from 'lit';
export type ContextMenuItem = {
    id: any;
    label: string;
    icon?: string;
    disabled?: boolean;
};
export declare class ContextMenu extends LitElement {
    static get styles(): import('lit').CSSResult[];
    open: boolean;
    disableParentClick: boolean;
    items: ContextMenuItem[];
    _combobox: HTMLElement;
    private _parent;
    private _referenceEl;
    private _parentClickHandler;
    private _parentKeydownHandler;
    private _portalManager;
    private _visibleObserver;
    constructor();
    connectedCallback(): void;
    get referenceEl(): HTMLElement | null;
    disconnectedCallback(): void;
    _getPortalCombobox(): Element | null | undefined;
    _toggleMenu(): void;
    _closeMenu(): void;
    _handleClick(event: CustomEvent): void;
    _handleParentKeydown(event: KeyboardEvent): void;
    _handleFocusout(event: any): void;
    _handleOptionsFocusout(): void;
    _addListenerClickOutside(): void;
    _removeListenerClickOutside(): void;
    _handleClickOutside(event: any): void;
    private _enableAnimations;
    private _disableAnimations;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
