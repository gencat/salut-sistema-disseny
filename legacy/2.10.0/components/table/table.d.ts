import { LitElement } from 'lit';

export type TableConfig = {
    gridTemplateColumns?: string;
    scrollable?: boolean;
    leftStickyColumns?: number;
    rightStickyColumns?: number;
    format?: 'inline' | 'grid';
};
export declare class Table extends LitElement {
    static get styles(): import('lit').CSSResult[];
    config: TableConfig;
    connectedCallback(): void;
    private _applyRowConfig;
    private _applyStickyConfig;
    private _cellsToSticky;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
