import { LitElement } from 'lit';

interface ContentSwitcherTab {
    label: string;
    selected?: boolean;
    disabled?: boolean;
}
export declare class ContentSwitcher extends LitElement {
    connectedCallback(): void;
    size: string;
    tabs: ContentSwitcherTab[];
    tabSelected?: ContentSwitcherTab;
    static get styles(): import('lit').CSSResult[];
    _onSelect(tab: ContentSwitcherTab): void;
    private _initializeSelectedTab;
    render(): import('lit-html').TemplateResult<1>;
}
export {};
