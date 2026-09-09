import { LitElement } from 'lit';

export declare class CardHeader extends LitElement {
    static get styles(): import('lit').CSSResult[];
    flag: boolean;
    hasMenu: boolean;
    deleted: boolean;
    disabled: boolean;
    private _propagateProperties;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
