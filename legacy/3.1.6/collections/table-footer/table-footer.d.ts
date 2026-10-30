import { LitElement } from 'lit';
export declare class TableFooter extends LitElement {
    static get styles(): import('lit').CSSResult[];
    dataLength: number | undefined;
    selectedLength: number | undefined;
    selectedLabel: string | undefined;
    render(): import('lit-html').TemplateResult;
}
