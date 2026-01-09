import { LitElement } from 'lit';

export declare class Tile extends LitElement {
    static get styles(): import('lit').CSSResult[];
    type: string;
    icon: string;
    tileTitle: string;
    description: string;
    selected: boolean;
    disabled: boolean;
    hasLogo: boolean;
    logoURL: string;
    heightAuto: boolean;
    widget: boolean;
    marker: string | undefined;
    _onClick(): void;
    render(): import('lit-html').TemplateResult;
}
