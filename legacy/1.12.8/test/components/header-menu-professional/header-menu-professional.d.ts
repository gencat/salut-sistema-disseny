import { LitElement } from 'lit';

export declare class HeaderMenuProfessional extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleDocumentClickBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    set size(value: string);
    get size(): string;
    set disabled(value: boolean);
    get disabled(): boolean;
    set name(value: string);
    get name(): string;
    set center(value: string);
    get center(): string;
    set collegiate(value: string);
    get collegiate(): string;
    set infoLabel(value: string);
    get infoLabel(): string;
    set collegiateLabel(value: string);
    get collegiateLabel(): string;
    set preferencesLabel(value: string);
    get preferencesLabel(): string;
    set detailsLabel(value: string);
    get detailsLabel(): string;
    set detailsHref(value: string);
    get detailsHref(): string;
    set detailsIcon(value: string);
    get detailsIcon(): string;
    set detailsIconPosition(value: string);
    get detailsIconPosition(): string;
    set logoutLabel(value: string);
    get logoutLabel(): string;
    set logoutIcon(value: string);
    get logoutIcon(): string;
    set logoutIconPosition(value: string);
    get logoutIconPosition(): string;
    set hideDropdownDetails(value: boolean);
    get hideDropdownDetails(): boolean;
    set hideDropdownPreferences(value: boolean);
    get hideDropdownPreferences(): boolean;
    _hideDropdownDetails: boolean;
    _hideDropdownPreferences: boolean;
    _size: string;
    _name: string | undefined;
    _center: string | undefined;
    _collegiate: string | undefined;
    _disabled: boolean;
    _showDropdown: boolean;
    _toggleIcon: string;
    _infoLabel: string;
    _collegiateLabel: string;
    _preferencesLabel: string;
    _detailsLabel: string;
    _detailsHref: string | undefined;
    _detailsIcon: string | undefined;
    _detailsIconPosition: string;
    _logoutLabel: string;
    _logoutIcon: string;
    _logoutIconPosition: string;
    _toggleDropdown(): void;
    _handleLogout(): void;
    private _handleDocumentClick;
    private _clickedOutside;
    render(): import('lit-html').TemplateResult<1>;
}