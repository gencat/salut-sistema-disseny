import { LitElement } from 'lit';

export declare class HeaderMenuProfessional extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleDocumentClickBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    disabled: boolean;
    name: string | undefined;
    center: string | undefined;
    collegiate: string | undefined;
    infoLabel: string;
    collegiateLabel: string;
    preferencesLabel: string;
    detailsLabel: string;
    detailsHref: string | undefined;
    detailsIcon: string;
    detailsIconPosition: string;
    showLogout: boolean;
    logoutLabel: string;
    exitLabel: string;
    hideViewDetails: boolean;
    hideDropdownDetails: boolean;
    hideDropdownPreferences: boolean;
    jcef: boolean;
    _showDropdown: boolean;
    _toggleIcon: string;
    _toggleLabel: string;
    _toggleDropdown(): void;
    _handleLogout(): void;
    _handleExit(): void;
    private _handleDocumentClick;
    _handleViewDetails(): void;
    private _clickedOutside;
    private _updatePreferencesDropdownPosition;
    render(): import('lit-html').TemplateResult;
}
