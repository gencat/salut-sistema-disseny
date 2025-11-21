import { LitElement } from 'lit';

export declare class Drawer extends LitElement {
    static get styles(): import('lit').CSSResult[];
    variant: string;
    jcef: boolean;
    open: boolean;
    title: string;
    _drawerHeader: HTMLElement | null;
    _drawerFooter: HTMLElement | null;
    constructor();
    _showDrawer(): void;
    _hideDrawer(): void;
    _handleClose(): void;
    _handleKeydown(event: KeyboardEvent): void;
    _handleOutsideClick(event: any): void;
    _handleScroll(event: Event): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    firstUpdated(): void;
    render(): import('lit-html').TemplateResult;
}
