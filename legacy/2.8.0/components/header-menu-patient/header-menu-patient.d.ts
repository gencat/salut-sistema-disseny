import { LitElement } from 'lit';

export type Assignments = {
    uab?: string;
    ui?: string;
    uas?: string;
    center?: string;
    up?: string;
};
export declare class HeaderMenuPatient extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleDocumentClickBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    disabled: boolean;
    variant: string;
    name: string | undefined;
    cip: string | undefined;
    age: string | undefined;
    gender: string | undefined;
    phoneMain: string | undefined;
    phoneAlt: string | undefined;
    mail: string | undefined;
    address: string | undefined;
    addressURL: string;
    infoLabel: string;
    assignedLabel: string;
    detailsLabel: string;
    editLabel: string;
    hideViewDetails: boolean;
    jcef: boolean;
    edit: boolean;
    assignments: Assignments | undefined;
    _showDropdown: boolean;
    _toggleIcon: string;
    _toggleLabel: string;
    _toggleDropdown(): void;
    _handleViewDetails(): void;
    _handleEdit(): void;
    _handleCIPClick(event: Event): void;
    _handleCopyCIP(event: Event): void;
    _getGenderIcon(): "female" | "male";
    private _handleDocumentClick;
    private _clickedOutside;
    render(): import('lit-html').TemplateResult;
}
