import { LitElement } from 'lit';

export declare class CardInfoItem extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(value: string);
    set text(value: string);
    set critic(value: boolean);
    private _icon;
    private _text;
    private _critic;
    render(): import('lit-html').TemplateResult<1>;
}
