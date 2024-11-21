import { LitElement } from 'lit';

export declare class IconBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(icon: string);
    set size(size: string);
    set state(state: string);
    set disabled(value: boolean);
    set outlined(value: boolean);
    set bubble(value: boolean);
    private _icon;
    private _size;
    private _state;
    private _disabled;
    private _isIconDefined;
    private _outlined;
    private _bubble;
    render(): import('lit-html').TemplateResult<1>;
}
