import { LitElement } from 'lit';

export declare class Header extends LitElement {
    static get styles(): import('lit').CSSResult[];
    title: string;
    area: string | undefined;
    logoSrc: string;
    jcef: boolean;
    private _propagateProperties;
    private _updateSlotsDivider;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
}
