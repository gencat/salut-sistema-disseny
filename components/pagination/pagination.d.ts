import { LitElement } from 'lit';

export declare class Pagination extends LitElement {
    static get styles(): import('lit').CSSResult;
    set length(length: number);
    set pageSize(pageSize: number);
    set size(size: string);
    set currentIndex(currentIndex: number);
    private _length;
    private _pageSize;
    private _totalPages;
    private _currentIndex;
    private _size;
    private _buttons;
    private _next;
    private _prev;
    private _emitCurrentPage;
    private _updateButtons;
    private _getButtons;
    private _selectItem;
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: any): void;
    render(): import('lit-html').TemplateResult<1>;
}
