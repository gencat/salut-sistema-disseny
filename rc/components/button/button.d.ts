import { LitElement } from 'lit';

export declare class Button extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set type(value: string);
    set size(value: string);
    set label(value: string);
    set icon(value: string);
    set iconPosition(value: string);
    set iconFill(value: boolean);
    set disabled(value: boolean);
    set hidden(value: boolean);
    set onlyIcon(value: boolean);
    set fullWidth(value: boolean);
    _type: string;
    _size: string;
    _label: string;
    _icon: string | undefined;
    _iconSize: string;
    _iconPosition: string;
    _iconFill: boolean;
    _disabled: boolean;
    _hidden: boolean;
    _onlyIcon: boolean;
    _fullWidth: boolean;
    _handleClick(): void;
    render(): import('lit-html').TemplateResult;
}
