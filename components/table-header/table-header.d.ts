import { LitElement } from 'lit';

export interface IFilter {
    value: string;
    icon: string;
}
export declare class TableHeader extends LitElement {
    static get styles(): import('lit').CSSResult[];
    tableInfo: undefined;
    showConfig: boolean;
    configTableLabel: string;
    set filters(filters: Array<any>);
    get filters(): Array<any>;
    set headerTitle(value: string);
    get headerTitle(): string;
    set hideHeaderTitleAndExpand(value: boolean);
    get hideHeaderTitleAndExpand(): boolean;
    set innerFilters(value: boolean);
    get innerFilters(): boolean;
    set expandTable(value: boolean);
    get expandTable(): boolean;
    set expandLabel(value: string);
    get expandLabel(): string;
    set collapseLabel(value: string);
    get collapseLabel(): string;
    set rowsOnCollapsed(value: number);
    get rowsOnCollapsed(): number;
    set filtersLabel(value: string);
    get filtersLabel(): string;
    set cleanFiltersLabel(value: string);
    get cleanFiltersLabel(): string;
    set noFiltersLabel(value: string);
    get noFiltersLabel(): string;
    private _filters;
    private _headerTitle;
    private _innerFilters;
    private _expandTable;
    private _expandLabel;
    private _collapseLabel;
    private _rowsOnCollapsed;
    private _filtersLabel;
    private _cleanFiltersLabel;
    private _openFiltersLabel;
    private _noFiltersLabel;
    private _hideHeaderTitleAndExpand;
    private _generateFilterChips;
    private _clearFilters;
    private _emitExpandAction;
    private _emitOpenFilters;
    private _emitConfigTable;
    private _emitChangeFilters;
    render(): import('lit-html').TemplateResult;
}
