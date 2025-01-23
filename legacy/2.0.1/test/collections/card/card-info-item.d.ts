import { LitElement } from 'lit';

export declare class CardInfoItem extends LitElement {
    static get styles(): import('lit').CSSResult[];
    icon: string;
    text: string;
    critic: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
