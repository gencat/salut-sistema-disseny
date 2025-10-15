import { LitElement } from 'lit';

export declare class Card extends LitElement {
    static get styles(): import('lit').CSSResult[];
    selected: boolean;
    dragged: boolean;
    deleted: boolean;
    disabled: boolean;
    hasClose: boolean;
    hasDetails: boolean;
    _propagateProperties(): void;
    _dispatchClose(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
