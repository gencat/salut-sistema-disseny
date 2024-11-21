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
    _icon: string;
    _size: string;
    _text: string;
    _state: string;
    _disabled: boolean;
    _isIconDefined: boolean;
    _outlined: boolean;
    _dot: boolean;
    _hideIcon: boolean;
    render(): import('lit-html').TemplateResult;
}
