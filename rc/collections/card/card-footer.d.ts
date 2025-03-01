import { LitElement } from 'lit';

export declare class CardFooter extends LitElement {
    static get styles(): import('lit').CSSResult;
    private get _footerContent();
    deleted: boolean;
    disabled: boolean;
    private _propagateProperties;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
