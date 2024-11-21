import { LitElement } from 'lit';

export declare class CardBody extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set deleted(value: boolean);
    set disabled(value: boolean);
    private _deleted;
    private _disabled;
    private _propagateProperties;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
