import { LitElement } from 'lit';

export declare class CardHighlightsItem extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(value: string);
    set title(value: string);
    set text(value: string);
    set deleted(value: boolean);
    set disabled(value: boolean);
    private _deleted;
    private _disabled;
    private _title;
    private _icon;
    private _text;
    render(): import('lit-html').TemplateResult<1>;
}
