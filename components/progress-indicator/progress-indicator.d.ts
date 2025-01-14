import { LitElement } from 'lit';

export type StateType = 'default' | 'info' | 'success' | 'warning' | 'error';
export declare class ProgressIndicator extends LitElement {
    static get styles(): import('lit').CSSResult;
    title: string;
    description: string;
    state: StateType;
    percentage: number;
    hasFailed: boolean;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
