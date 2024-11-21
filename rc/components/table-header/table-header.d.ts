import { LitElement } from 'lit';

export interface IFilter {
    value: string;
    icon: string;
}
export declare class TableHeader extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set filters(filters: Array<any>);
    set headerTitle(value: string);
    set hideHeaderTitleAndExpand(value: boolean);
    set innerFilters(value: boolean);
    set expandTable(value: boolean);
    set expandLabel(value: string);
    set collapseLabel(value: string);
    set rowsOnCollapsed(value: number);
    set filtersLabel(value: string);
    set cleanFiltersLabel(value: string);
    set noFiltersLabel(value: string);
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
    private _emitChangeFilters;
    render(): import('lit-html').TemplateResult<1>;
}
