import { LitElement } from 'lit';

type DssTabItem = {
    id: string;
    text: string;
    panel: string;
    selected?: boolean;
    disabled?: boolean;
};
export declare class TabsList extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleUpdateArrowsBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    set dssTabsId(value: string);
    set label(value: string);
    set tabs(data: DssTabItem[]);
    set addTabText(value: string);
    set addTabEnabled(value: boolean);
    get _header(): HTMLElement | undefined;
    get _menu(): HTMLElement | undefined;
    get _prevScroll(): HTMLElement | undefined;
    get _nextScroll(): HTMLElement | undefined;
    _dssTabsId: string;
    _label: string;
    _tabs: DssTabItem[];
    _tabsElements: NodeListOf<Element>;
    _firstTab: Element;
    _lastTab: Element;
    _addTabEnabled: boolean;
    _addTabText: string;
    updated(changedProperties: Map<string, any>): void;
    changeTabWatch(): Promise<void>;
    setFirstAndLastTabs(): void;
    changeTab(selectedPanel: string): void;
    updatePanels(selectedPanel: string): void;
    _handleKeydown(event: Event): void;
    moveFocusToTab(currentTab: any): void;
    moveFocusToPreviousTab(currentTab: any): void;
    moveFocusToNextTab(currentTab: any): void;
    setSelectedTab(currentTab: any): void;
    addNewTab(): void;
    _updateArrows(): void;
    _scrollMenu(direction: number): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
}
export {};
