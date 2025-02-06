import { LitElement } from 'lit';

export declare class HeaderMenuPatient extends LitElement {
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
    set cip(value: string);
    get cip(): string;
    set age(value: string);
    get age(): string;
    set gender(value: string);
    get gender(): string;
    _size: string;
    _name: string | undefined;
    _cip: string | undefined;
    _age: string | undefined;
    _gender: string | undefined;
    _disabled: boolean;
    _showDropdown: boolean;
    _toggleIcon: string;
    _toggleLabel: string;
    _toggleDropdown(): void;
    _handleClick(): void;
    _handleActionClick(action: string): void;
    _handleACIPClick(event: Event): void;
    _handleCopyCIP(event: Event): void;
    private _handleDocumentClick;
    private _clickedOutside;
    render(): import('lit-html').TemplateResult;
}
