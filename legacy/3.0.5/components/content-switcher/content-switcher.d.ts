import { LitElement, PropertyValues } from 'lit';
interface ContentSwitcherTab {
    label: string;
    icon?: string;
    selected?: boolean;
    disabled?: boolean;
}
export declare class ContentSwitcher extends LitElement {
    fullWidth: boolean;
    size: string;
    tabs: ContentSwitcherTab[] | undefined;
    tabSelected?: ContentSwitcherTab;
    _tabs: ContentSwitcherTab[];
    static get styles(): import('lit').CSSResult[];
    _onSelect(tab: ContentSwitcherTab): void;
    _checkFullWidth(): void;
    private _initializeSelectedTab;
    protected willUpdate(_changedProperties: PropertyValues): void;
    protected updated(_changedProperties: PropertyValues): void;
    render(): import('lit-html').TemplateResult<1>;
}
export {};
