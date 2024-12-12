import { LitElement } from 'lit';

export declare class Pagination extends LitElement {
    static get styles(): import('lit').CSSResult;
    set length(length: number);
    get length(): number;
    set pageSize(pageSize: number);
    get pageSize(): number;
    set size(size: string);
    get size(): string;
    set currentIndex(currentIndex: number);
    get currentIndex(): number;
    _length: number;
    _pageSize: number;
    _totalPages: number;
    _currentIndex: number;
    _size: string;
    _buttons: any[];
    _next(): void;
    _prev(): void;
    _emitCurrentPage(): void;
    _updateButtons(): void;
    _getButtons(startIndex: number, endIndex: number): (import('lit-html').TemplateResult<1> | undefined)[];
    _selectItem(pageIndex: number): void;
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: any): void;
    render(): import('lit-html').TemplateResult;
}
