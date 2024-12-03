import { LitElement } from 'lit';

export declare class ProgressIndicator extends LitElement {
    static get styles(): import('lit').CSSResult;
    set hasFailed(hasFailed: boolean);
    set title(title: string);
    set description(description: string);
    set percentage(percentage: number);
    _hasFailed: boolean;
    _title: string;
    _description: string;
    _percentage: number;
    render(): import('lit-html').TemplateResult;
}
