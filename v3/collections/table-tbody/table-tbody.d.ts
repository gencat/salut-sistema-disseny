import { LitElement } from 'lit';
export declare class TableTbody extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _assignedElements;
    private _currentFocusableElement;
    private _setCurrentFocusableElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private _handleSlotChange;
    private _handleKeydown;
    private _handleTab;
    private _moveRowFocus;
    private _moveCellFocus;
    private _moveToRowEdge;
    private _moveToRowEdgeCell;
    private _getRows;
    private _getRowFromEvent;
    private _getRowFromFocusable;
    private _getCellsFromRow;
    private _getCellFromEvent;
    private _setKeyboardNavigation;
    render(): import('lit-html').TemplateResult;
}
