import { LitElement } from 'lit';

export declare class CardDescription extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set deleted(value: boolean);
    set disabled(value: boolean);
    private _deleted;
    private _disabled;
    render(): import('lit-html').TemplateResult<1>;
}
