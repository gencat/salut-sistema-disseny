import { LitElement, PropertyValues } from 'lit';

export declare class Sidebar extends LitElement {
    static get styles(): import('lit').CSSResult[];
    titleText: string | undefined;
    expanded: boolean;
    placement: string;
    iconToggleRight: string;
    iconToggleLeft: string;
    tooltipFixed: boolean;
    forceViewport: boolean;
    _iconToggleExpanded: string;
    _iconToggleCollapsed: string;
    _isTruncated: boolean;
    _toggle(): void;
    private prevTitleText?;
    _checkTitleTruncated(event: MouseEvent): void;
    protected updated(_changedProperties: PropertyValues): void;
    render(): import('lit-html').TemplateResult;
}
