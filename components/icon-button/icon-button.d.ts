import { LitElement } from 'lit';

export declare class IconButton extends LitElement {
    static get styles(): import('lit').CSSResult[];
    type: string;
    variant: string;
    size: string;
    label: string;
    icon: string | undefined;
    disabled: boolean;
    hidden: boolean;
    disableTabindex: boolean;
    ariaExpanded: any;
    _handleClick(): void;
    render(): import('lit-html').TemplateResult;
}
