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
    set heightAuto(value: boolean);
    set widget(value: boolean);
    _type: string;
    _icon: string;
    _tileTitle: string;
    _description: string;
    _selected: boolean;
    _disabled: boolean;
    _hasLogo: boolean;
    _logoURL: string;
    _heightAuto: boolean;
    _widget: boolean;
    _onClick(): void;
    render(): import('lit-html').TemplateResult;
}
