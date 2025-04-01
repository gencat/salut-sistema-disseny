import { LitElement, PropertyValues } from 'lit';

type PresetTextsItem = {
    title: string;
    text: string;
    category: string;
};
type Category = {
    label: string;
    selected?: boolean;
    disabled?: boolean;
};
export declare class PresetTexts extends LitElement {
    static get styles(): import('lit').CSSResult[];
    title: string;
    buttonLabelCancel: string;
    buttonLabelSelect: string;
    descriptionLabel: string;
    items: PresetTextsItem[];
    open: boolean;
    searchThreshold: number;
    noResultsTitle: string;
    noResultsLabel: string;
    noDataTitle: string;
    noDataLabel: string;
    _categories: Category[];
    _currentCategory: string;
    _selectedText: string;
    _isFirstUpdate: boolean;
    _itemsBackup: PresetTextsItem[];
    _filter: string;
    _handleTabChange(event: CustomEvent): void;
    _handleCancel(): void;
    _handleSelect(): void;
    _onClose(): void;
    _onSelectText(text: string): void;
    _dispatchSelectText(): void;
    _setCategories(): void;
    _getDefaultSelectedText(category: string): void;
    private _checkScroll;
    private _handleScroll;
    _handleSearch(event: Event): void;
    _clearFilter(): void;
    _filterItems(): PresetTextsItem[];
    firstUpdated(): Promise<void>;
    willUpdate(_changedProperties: PropertyValues): void;
    render(): import('lit-html').TemplateResult;
}
export {};
