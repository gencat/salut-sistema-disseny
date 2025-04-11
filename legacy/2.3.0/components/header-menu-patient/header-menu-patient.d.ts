import { LitElement } from 'lit';

export declare class HeaderMenuPatient extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleDocumentClickBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    disabled: boolean;
    variant: string;
    size: string;
    name: string | undefined;
    cip: string | undefined;
    age: string | undefined;
    gender: string | undefined;
    phoneMain: string | undefined;
    phoneAlt: string | undefined;
    infoLabel: string;
    detailsLabel: string;
    _showDropdown: boolean;
    _toggleIcon: string;
    _toggleLabel: string;
    _toggleDropdown(): void;
    _handleViewDetails(): void;
    _handleCIPClick(event: Event): void;
    _handleCopyCIP(event: Event): void;
    private _handleDocumentClick;
    private _clickedOutside;
    render(): import('lit-html').TemplateResult;
}
