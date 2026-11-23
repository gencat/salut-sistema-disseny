import { LitElement, PropertyValues } from 'lit';
export declare class TabsPanel extends LitElement {
    static get styles(): import('lit').CSSResult;
    panelId: string | undefined;
    label: string | undefined;
    linkedTo: string | undefined;
    selected: boolean;
    hasScroll: boolean;
    fullHeight: boolean;
    protected updated(_changedProperties: PropertyValues): void;
    render(): import('lit-html').TemplateResult<1>;
}
