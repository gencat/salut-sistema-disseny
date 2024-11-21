import { LitElement } from 'lit';

export declare class Tooltip extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set position(position: string);
    set align(align: string);
    set hide(value: boolean);
    set noHeightLimit(value: boolean);
    private _position;
    private _align;
    private _hide;
    private _noHeightLimit;
    render(): import('lit-html').TemplateResult<1>;
}
