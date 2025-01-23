import { LitElement } from 'lit';

export declare class CardHighlightsItem extends LitElement {
    static get styles(): import('lit').CSSResult[];
    deleted: boolean;
    disabled: boolean;
    icon: string;
    title: string;
    text: string;
    render(): import('lit-html').TemplateResult;
}
