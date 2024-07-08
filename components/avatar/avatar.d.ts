import { LitElement } from 'lit';

export declare class Avatar extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set name(name: string);
    set surname(surname: string);
    set imageUrl(imageUrl: string);
    set size(size: string);
    private _acronym;
    private _name;
    private _surname;
    private _imageUrl;
    private _size;
    render(): import('lit-html').TemplateResult<1>;
    willUpdate(changedProperties: any): void;
    private formatAcronym;
}
