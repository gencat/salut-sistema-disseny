import { LitElement } from 'lit';

export declare class CardForm extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private get _formContent();
    disabled: boolean;
    private _propagateProperties;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
