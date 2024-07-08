import { LitElement } from 'lit';

export declare class SplitButton extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set iconClose(icon: string);
    set iconOpen(icon: string);
    set type(value: string);
    set text(value: string);
    set disabled(value: boolean);
    set isOpen(value: boolean);
    private _iconClose;
    private _iconOpen;
    private _type;
    private _text;
    private _disabled;
    private _isOpen;
    private _dispatchMainClick;
    private _dispatchIconClick;
    render(): import('lit-html').TemplateResult<1>;
}
