import { LitElement } from 'lit';

export declare class ModuleHeader extends LitElement {
    static get styles(): import('lit').CSSResult[];
    title: string;
    titleText: string;
    legend: string;
    tag: string;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
