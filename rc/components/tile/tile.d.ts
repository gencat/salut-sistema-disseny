import { LitElement } from 'lit';

export declare class Tile extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set type(value: string);
    set icon(value: string);
    set tileTitle(value: string);
    set description(value: string);
    set selected(value: boolean);
    set disabled(value: boolean);
    set hasLogo(value: boolean);
    set logoURL(value: string);
    private _type;
    private _icon;
    private _tileTitle;
    private _description;
    private _selected;
    private _disabled;
    private _hasLogo;
    private _logoURL;
    private _generateTileIconHTML;
    private _generateTileLogoHTML;
    private _generateTileContentHTML;
    private _onClick;
    render(): import('lit-html').TemplateResult<1>;
}
