import { LitElement } from 'lit';

export declare class NotificationBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(icon: string);
    set value(value: string);
    set state(value: string);
    set dot(value: boolean);
    set type(value: string);
    set menu(value: boolean);
    private _icon;
    private _value;
    private _state;
    private _type;
    private _dot;
    private _menu;
    render(): import('lit-html').TemplateResult<1>;
}
