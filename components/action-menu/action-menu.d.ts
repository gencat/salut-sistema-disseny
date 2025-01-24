import { LitElement } from 'lit';

export declare class ActionMenu extends LitElement {
    static get styles(): import('lit').CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
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
    private _handleCloseAllMenus;
    private _handleSlotChange;
    private _clickOutside;
    _closeMenu(): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
