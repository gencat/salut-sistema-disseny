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
    isTitleTruncated: boolean;
    isDescriptionTruncated: boolean;
    private _resizeObserver?;
    private _setTruncatedAttribute;
    private _syncOverflowState;
    firstUpdated(): Promise<void>;
    updated(_changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    _onClick(): void;
    render(): import('lit-html').TemplateResult;
}
