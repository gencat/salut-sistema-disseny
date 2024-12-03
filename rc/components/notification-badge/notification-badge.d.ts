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
    _icon: string | undefined;
    _value: string;
    _state: string;
    _type: string;
    _dot: boolean;
    _borderMenu: boolean;
    _borderWhite: boolean;
    _isHover: boolean;
    _isActive: boolean;
    render(): import('lit-html').TemplateResult;
}
