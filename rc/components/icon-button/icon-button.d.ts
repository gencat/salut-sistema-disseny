import { LitElement } from 'lit';

export declare class IconButton extends LitElement {
    static get styles(): import('lit').CSSResult[];
    type: string;
    size: string;
    icon: string | undefined;
    disabled: boolean;
    hidden: boolean;
    _handleClick(): void;
    render(): import('lit-html').TemplateResult;
}
