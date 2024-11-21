import { LitElement } from 'lit';

export declare class Card extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set selected(value: boolean);
    set dragged(value: boolean);
    set deleted(value: boolean);
    set disabled(value: boolean);
    set hasClose(value: boolean);
    set hasDetails(value: boolean);
    private _dragged;
    private _deleted;
    private _selected;
    private _disabled;
    private _hasClose;
    private _hasDetails;
    private _propagateProperties;
    private _dispatchClose;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
