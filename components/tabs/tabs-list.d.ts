import { LitElement } from 'lit';

export type DssTabItem = {
    id: string;
    text: string;
    panel: string;
    selected?: boolean;
};
export declare class TabsList extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set dssTabsId(value: string);
    set label(value: string);
    set tabs(data: DssTabItem[]);
    set addTabText(value: string);
    set addTabEnabled(value: boolean);
    private _dssTabsId;
    private _label;
    private _tabs;
    private _tabsElements;
    private _firstTab;
    private _lastTab;
    private _addTabEnabled;
    private _addTabText;
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
    render(): import('lit-html').TemplateResult<1>;
}
