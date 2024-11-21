import { LitElement } from 'lit';

export declare class Avatar extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set name(name: string);
    set surname(surname: string);
    set imageUrl(imageUrl: string);
    set size(size: string);
    _acronym: string;
    _name: string;
    _surname: string;
    _imageUrl: string;
    _size: string;
    willUpdate(changedProperties: any): void;
    private formatAcronym;
    render(): import('lit-html').TemplateResult<1>;
}
