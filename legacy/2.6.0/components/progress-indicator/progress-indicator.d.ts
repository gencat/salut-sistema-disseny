import { LitElement } from 'lit';

export type StateType = 'default' | 'info' | 'success' | 'warning' | 'error';
export declare class ProgressIndicator extends LitElement {
    static get styles(): import('lit').CSSResult;
    description: string;
    state: StateType;
    percentage: number;
    hasFailed: boolean;
    hidePercentage: boolean;
    set title(value: string);
    get title(): string;
    _title: string | undefined;
    _label: string;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
