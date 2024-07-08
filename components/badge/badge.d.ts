import { LitElement } from 'lit';

export declare class Badge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(icon: string);
    set size(size: string);
    set text(text: string);
    set state(state: string);
    set disabled(value: boolean);
    set outlined(value: boolean);
    set dot(value: boolean);
    set hideIcon(value: boolean);
    private _icon;
    private _size;
    private _text;
    private _state;
    private _disabled;
    private _isIconDefined;
    private _outlined;
    private _dot;
    private _hideIcon;
    render(): import('lit-html').TemplateResult<1>;
}
