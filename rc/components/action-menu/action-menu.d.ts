import { LitElement } from 'lit';

export declare class ActionMenu extends LitElement {
    static get styles(): import('lit').CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    set fullWidth(value: boolean);
    set position(value: string);
    _fullWidth: boolean;
    _popperInstance: any;
    _parent: HTMLElement | null;
    _position: string;
    _isVisible: boolean;
    createPopperInstance(parent: HTMLElement): void;
    private _handleCloseAllMenus;
    private _handleSlotChange;
    private _clickOutside;
    private _closeMenu;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
}
