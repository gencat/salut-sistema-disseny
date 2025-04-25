import { LitElement } from 'lit';

export declare class Drawer extends LitElement {
    static get styles(): import('lit').CSSResult[];
    variant: string;
    set open(value: boolean);
    set title(value: string);
    set size(value: string);
    get open(): boolean;
    get title(): string;
    get size(): string;
    _open: boolean;
    _title: string;
    _size: string;
    _drawerHeader: HTMLElement | null;
    _drawerFooter: HTMLElement | null;
    constructor();
    _showDrawer(): void;
    _hideDrawer(): void;
    _closeDrawer(): void;
    _handleKeydown(event: KeyboardEvent): void;
    _handleOutsideClick(event: any): void;
    _handleScroll(event: Event): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    firstUpdated(): void;
    render(): import('lit-html').TemplateResult;
}
