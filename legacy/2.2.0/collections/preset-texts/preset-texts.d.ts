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
    _categories: Category[];
    _currentCategory: string;
    _selectedText: string;
    _isFirstUpdate: boolean;
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
    firstUpdated(): Promise<void>;
    willUpdate(_changedProperties: PropertyValues): void;
    render(): import('lit-html').TemplateResult;
}
export {};
