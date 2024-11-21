import { LitElement } from 'lit';

export declare class CardHeader extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set flag(value: boolean);
    set hasMenu(value: boolean);
    set deleted(value: boolean);
    set disabled(value: boolean);
    private _flag;
    private _hasMenu;
    private _deleted;
    private _disabled;
    private _propagateProperties;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
