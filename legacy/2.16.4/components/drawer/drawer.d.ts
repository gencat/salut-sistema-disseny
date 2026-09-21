import { LitElement } from 'lit';

export declare class Drawer extends LitElement {
    static get styles(): import('lit').CSSResult[];
    variant: string;
    jcef: boolean;
    open: boolean;
    title: string;
    titleText: string;
    _drawerHeader: HTMLElement | null;
    _drawerFooter: HTMLElement | null;
    _scrollHandler: ((event: Event) => void) | null;
    _scrollContainer: HTMLElement | null;
    _previouslyFocusedElement: HTMLElement | null;
    _closedViaKeyboard: boolean;
    constructor();
    _showDrawer(): void;
    _hideDrawer(): void;
    _handleClose(event?: Event): void;
    _handleKeydown(event: KeyboardEvent): void;
    _handleOutsideClick(event: any): void;
    _handleScroll(event: Event): void;
    _handleStartSentinelFocus(event: FocusEvent): void;
    _handleStartSentinelKeydown(event: KeyboardEvent): void;
    _handleEndSentinelFocus(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    firstUpdated(): void;
    render(): import('lit-html').TemplateResult;
}
