import { LitElement } from 'lit';
export declare class TableThead extends LitElement {
    static get styles(): import('lit').CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private _assignedElements;
    private _currentFocusableElement;
    private _setCurrentFocusableElement;
    private _handleSlotChange;
    private _handleKeydown;
    private _setInitialFocus;
    private _moveCellFocus;
    private _moveToEdgeCell;
    private _getHeaderRow;
    private _getCellsFromRow;
    private _getCellFromEvent;
    render(): import('lit-html').TemplateResult;
}
