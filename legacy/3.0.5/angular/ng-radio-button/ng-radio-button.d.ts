import { LitElement } from 'lit';
export declare class NgRadioButton extends LitElement {
    static get styles(): import('lit').CSSResult[];
    label: string;
    value: boolean;
    checked: boolean;
    disabled: boolean;
    handleInput(event: Event): void;
    render(): import('lit-html').TemplateResult;
}
