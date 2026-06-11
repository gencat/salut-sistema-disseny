import { LitElement, PropertyValues } from 'lit';
export declare class ProgressIndicator extends LitElement {
    static get styles(): import('lit').CSSResult;
    titleText: string;
    description: string;
    status: string;
    percentage: number;
    hidePercentage: boolean;
    hasFailed: boolean;
    set state(state: string);
    get state(): string;
    set title(text: string);
    get title(): string;
    updated(changedProperties: PropertyValues): void;
    render(): import('lit-html').TemplateResult;
}
