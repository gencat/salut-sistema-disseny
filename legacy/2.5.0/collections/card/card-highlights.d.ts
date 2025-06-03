import { LitElement } from 'lit';

export declare class CardHighlights extends LitElement {
    static get styles(): import('lit').CSSResult;
    deleted: boolean;
    disabled: boolean;
    private _propagateProperties;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
