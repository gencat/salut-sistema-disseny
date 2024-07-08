import { LitElement } from 'lit';

export declare class ProgressIndicator extends LitElement {
    static get styles(): import('lit').CSSResult;
    set hasFailed(hasFailed: boolean);
    set title(title: string);
    set description(description: string);
    set percentage(percentage: number);
    private _hasFailed;
    private _title;
    private _description;
    private _percentage;
    render(): import('lit-html').TemplateResult<1>;
}
