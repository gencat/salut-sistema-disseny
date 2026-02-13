import { LitElement } from 'lit';
export declare class Header extends LitElement {
    static get styles(): import('lit').CSSResult[];
    title: string;
    titleText: string;
    titleFullWidth: boolean;
    area: string | undefined;
    logoSrc: string | undefined;
    jcef: boolean;
    private _propagateProperties;
    private _updateSlotsDivider;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
