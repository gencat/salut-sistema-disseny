import { LitElement } from 'lit';

export declare class CardSubitle extends LitElement {
    static get styles(): import('lit').CSSResult[];
    deleted: boolean;
    disabled: boolean;
    hasLink: boolean;
    hasIcon: boolean;
    linkHref: string;
    icon: string;
    render(): import('lit-html').TemplateResult;
}
