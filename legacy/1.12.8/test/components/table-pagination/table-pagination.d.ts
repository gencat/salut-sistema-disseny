import { LitElement } from 'lit';

export declare class TablePagination extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set length(length: number);
    get length(): number;
    set pageSize(pageSize: number);
    get pageSize(): number;
    set pageSizeOptions(pageSizeOptions: number[]);
    get pageSizeOptions(): number[];
    set pageSizeOptionsDisabled(value: boolean);
    get pageSizeOptionsDisabled(): boolean;
    set currentIndex(currentIndex: number);
    get currentIndex(): number;
    set rowsPerPageText(rowsPerPageText: string);
    get rowsPerPageText(): string;
    set resultsText(resultsText: string);
    get resultsText(): string;
    set hidePaginationResults(value: boolean);
    get hidePaginationResults(): boolean;
    private _length;
    private _pageSizeOptions;
    private _pageSize;
    private _totalPages;
    private _currentIndex;
    private _startIndex;
    private _endIndex;
    private _rowsPerPageText;
    private _resultsText;
    private _pageSizeOptionsDisabled;
    private _hidePaginationResults;
    private _next;
    private _prev;
    private _handleChange;
    private _emitCurrentPage;
    private _reload;
    private _reset;
    private _getDefaultPageSize;
    private _printStartIndex;
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: any): void;
    render(): import('lit-html').TemplateResult<1>;
}
