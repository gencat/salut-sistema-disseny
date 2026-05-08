import { LitElement } from 'lit';

export declare class Icon extends LitElement {
    static get styles(): import('lit').CSSResult[];
    size: string;
    icon: string;
    fill: boolean;
    spin: boolean;
    fontLoaded: boolean;
    firstUpdated(): void;
    render(): import('lit-html').TemplateResult<1>;
}
