import { LitElement } from 'lit';

export declare class TestPortal extends LitElement {
    open: boolean;
    _portalLayer: HTMLElement;
    _assignedBody: Element[];
    constructor();
    disconnectedCallback(): void;
    toggle(): void;
    openPopover(): void;
    close(): void;
    _onBodySlotChange(e: any): void;
    _firstAssigned(name: any): Element;
    _renderPortal(): void;
    _returnChildren(): void;
    render(): import('lit-html').TemplateResult;
}
