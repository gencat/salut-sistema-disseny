import { LitElement } from 'lit';

export declare class Avatar extends LitElement {
    static get styles(): import('lit').CSSResult[];
    name: string;
    surname: string;
    imageUrl: string;
    size: string;
    _acronym: string;
    willUpdate(changedProperties: any): void;
    private formatAcronym;
    render(): import('lit-html').TemplateResult<1>;
}
