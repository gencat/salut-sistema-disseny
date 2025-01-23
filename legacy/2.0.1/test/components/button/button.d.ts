import { LitElement } from 'lit';

export declare class Button extends LitElement {
    static get styles(): import('lit').CSSResult[];
    type: string;
    variant: string;
    label: string;
    icon: string | undefined;
    iconPosition: string;
    disabled: boolean;
    hidden: boolean;
    onlyIcon: boolean;
    fullWidth: boolean;
    set size(value: string);
    get size(): string;
    _size: string;
    _iconSize: string;
    _handleClick(): void;
    render(): import('lit-html').TemplateResult;
}
