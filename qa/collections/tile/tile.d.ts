import { LitElement, PropertyValues } from 'lit';
export declare class Tile extends LitElement {
    static get styles(): import('lit').CSSResult[];
    type: string;
    icon: string;
    tileTitle: string;
    description: string;
    highlighted: boolean;
    selected: boolean;
    disabled: boolean;
    hasLogo: boolean;
    logoURL: string;
    heightAuto: boolean;
    widget: boolean;
    marker: string | undefined;
    hideTooltip: boolean;
    isTitleTruncated: boolean;
    isDescriptionTruncated: boolean;
    private _observedTextContainer;
    private _resizeTimer;
    private _setTruncatedAttribute;
    private _syncOverflowState;
    private _observeTextContainer;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    _onClick(): void;
    render(): import('lit-html').TemplateResult;
}
