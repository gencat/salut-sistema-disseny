import { LitElement } from 'lit';

export declare class ButtonLink extends LitElement {
    static get styles(): import('lit').CSSResult[];
    linkHref: string;
    label: string;
    icon: string | undefined;
    iconPosition: string;
    disabled: boolean;
    render(): import('lit-html').TemplateResult;
}
