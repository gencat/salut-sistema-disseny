import { LitElement } from 'lit';
export interface IFilter {
    value: string;
    icon: string;
}
export declare class TableHeader extends LitElement {
    static get styles(): import('lit').CSSResult[];
    jcef: boolean;
    titleText: string | undefined;
    tableInfo: string | undefined;
    hasCustomActions: boolean;
    hideConfigAction: boolean;
    hideFilterAction: boolean;
    hideExpandAction: boolean;
    isExpanded: boolean;
    configLabel: string;
    filterLabel: string;
    expandLabel: string;
    collapseLabel: string;
    filtersVariant: 'none' | 'chips' | 'slot' | 'combined';
    filters: string[] | IFilter[] | undefined;
    selectLabel: string;
    clearLabel: string;
    _visibleFilters: any;
    _hiddenFilters: any;
    _areFiltersExpanded: boolean;
    _showMoreFilters: boolean;
    _isSideMenuLoaded: boolean;
    _isFirstUpdated: boolean;
    private _handleResizeBound;
    private _sideMenuResizeObserver?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _resizeTimer;
    private _handleResize;
    _dispatchConfig(): void;
    _dispatchOpenFilters(): void;
    _dispatchExpand(): void;
    _dispatchFiltersChange(): void;
    _toggleFilters(): void;
    _clearFilters(): void;
    _splitFiltersByLine(): Promise<void>;
    _checkSlotsFiltersOverflow(): void;
    _initFilters(): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
