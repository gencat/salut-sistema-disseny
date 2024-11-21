import { LitElement } from 'lit';

export declare class CardSubitle extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set deleted(value: boolean);
    set disabled(value: boolean);
    set hasLink(value: boolean);
    set linkHref(value: string);
    set hasIcon(value: boolean);
    set icon(value: string);
    private _deleted;
    private _disabled;
    private _hasLink;
    private _linkHref;
    private _hasIcon;
    private _icon;
    render(): import('lit-html').TemplateResult<1>;
}
