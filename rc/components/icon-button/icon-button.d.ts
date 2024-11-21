import { LitElement } from 'lit';

export declare class IconButton extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set type(value: string);
    set size(value: string);
    set icon(value: string);
    set iconFill(value: boolean);
    set disabled(value: boolean);
    set hidden(value: boolean);
    _type: string;
    _size: string;
    _icon: string | undefined;
    _iconFill: boolean;
    _disabled: boolean;
    _hidden: boolean;
    _handleClick(): void;
    render(): import('lit-html').TemplateResult;
}
