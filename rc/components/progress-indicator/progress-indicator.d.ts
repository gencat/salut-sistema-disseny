import { LitElement } from 'lit';

export declare class ProgressIndicator extends LitElement {
    static get styles(): import('lit').CSSResult;
    title: string;
    description: string;
    hasFailed: boolean;
    set percentage(percentage: number);
    get percentage(): number;
    _percentage: number;
    render(): import('lit-html').TemplateResult;
}
