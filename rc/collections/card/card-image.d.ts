import { LitElement } from 'lit';

export declare class CardImage extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set source(value: string);
    set alt(value: string);
    private _source;
    private _alt;
    render(): import('lit-html').TemplateResult<1>;
}
