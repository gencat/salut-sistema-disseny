import { LitElement } from 'lit';
export type StateType = 'default' | 'info' | 'success' | 'warning' | 'error';
export declare class ProgressIndicator extends LitElement {
    static get styles(): import('lit').CSSResult;
    description: string;
    state: StateType;
    percentage: number;
    set hasFailed(value: boolean);
    get hasFailed(): boolean;
    hidePercentage: boolean;
    set title(value: string);
    get title(): string;
    set titleText(value: string);
    get titleText(): string;
    _title: string | undefined;
    _label: string;
    _hasFailed: boolean;
    render(): import('lit-html').TemplateResult;
}
