import { LitElement } from 'lit';

export declare class NotificationBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(icon: string);
    set value(value: string);
    set state(value: string);
    set dot(value: boolean);
    set type(value: string);
    set menu(value: boolean);
    set borderMenu(value: boolean);
    set borderWhite(value: boolean);
    set isHover(value: boolean);
    set isActive(value: boolean);
    private _icon;
    private _value;
    private _state;
    private _type;
    private _dot;
    private _borderMenu;
    private _borderWhite;
    private _isHover;
    private _isActive;
    render(): import('lit-html').TemplateResult;
}
