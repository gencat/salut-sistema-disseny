import { LitElement } from 'lit';

export declare class Pagination extends LitElement {
    static get styles(): import('lit').CSSResult;
    length: number;
    pageSize: number;
    currentIndex: number;
    size: string;
    _totalPages: number;
    _buttons: any[];
    _next(): void;
    _prev(): void;
    _emitCurrentPage(): void;
    _updateButtons(): void;
    _getButtons(startIndex: number, endIndex: number): import('lit-html').TemplateResult<1>[];
    _selectItem(pageIndex: number): void;
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: any): void;
    render(): import('lit-html').TemplateResult;
}
