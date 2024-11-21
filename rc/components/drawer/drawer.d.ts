import { LitElement } from 'lit';

export declare class Drawer extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set open(value: boolean);
    set title(value: string);
    set size(value: string);
    get open(): boolean;
    get title(): string;
    get size(): string;
    private _open;
    private _title;
    private _size;
    private _drawerHeader;
    private _drawerFooter;
    constructor();
    private _showDrawer;
    private _hideDrawer;
    private _closeDrawer;
    private _handleKeydown;
    private _handleOutsideClick;
    private _handleScroll;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    firstUpdated(): void;
    render(): import('lit-html').TemplateResult<1>;
}
