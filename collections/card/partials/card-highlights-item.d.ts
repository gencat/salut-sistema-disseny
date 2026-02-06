import { LitElement } from 'lit';

export declare class CardHighlightsItem extends LitElement {
    static get styles(): import('lit').CSSResult[];
    deleted: boolean;
    disabled: boolean;
    icon: string;
    title: string;
    titleText: string;
    text: string;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
