import { LitElement } from 'lit';

export declare class IconBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(icon: string);
    set size(size: string);
    set state(state: string);
    set disabled(value: boolean);
    set outlined(value: boolean);
    set bubble(value: boolean);
    _icon: string;
    _size: string;
    _state: string;
    _disabled: boolean;
    _isIconDefined: boolean;
    _outlined: boolean;
    _bubble: boolean;
    render(): import('lit-html').TemplateResult;
}
