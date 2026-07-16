import { LitElement } from 'lit';
export type TableConfig = {
    gridTemplateColumns?: string;
    scrollable?: boolean;
    leftStickyColumns?: number;
    rightStickyColumns?: number;
    keyboardNavigation?: 'none' | 'row' | 'cell';
};
export declare class TableGrid extends LitElement {
    static get styles(): import('lit').CSSResult[];
    config: TableConfig;
    private _handleScrollXBound;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onSlotChange;
    private _applyRowConfig;
    private _applyStickyConfig;
    private _cellsToSticky;
    private _setStickyScrollState;
    _initScrollX(element: HTMLElement): void;
    _handleScrollX(event: Event): void;
    firstUpdated(): Promise<void>;
    updated(changedProps: Map<string, any>): void;
    render(): import('lit-html').TemplateResult;
}
