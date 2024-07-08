import { LitElement } from 'lit';

export declare class TablePagination extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set length(length: number);
    set pageSize(pageSize: number);
    set pageSizeOptions(pageSizeOptions: number[]);
    set pageSizeOptionsDisabled(value: boolean);
    set currentIndex(currentIndex: number);
    set rowsPerPageText(rowsPerPageText: string);
    set resultsText(resultsText: string);
    set hidePaginationResults(value: boolean);
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
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: any): void;
    render(): import('lit-html').TemplateResult<1>;
}
