import { LitElement } from 'lit';

export declare class Slider extends LitElement {
    static get styles(): import('lit').CSSResult;
    get _input(): HTMLInputElement;
    get _tooltip(): HTMLElement;
    set min(min: number);
    set max(max: number);
    set step(step: number);
    set orient(orient: string);
    set value(value: number);
    set disabled(disabled: boolean);
    set label(label: string);
    private _label;
    private _min;
    private _max;
    private _step;
    private _orient;
    private _vertical;
    private _value;
    private _progress;
    private _disabled;
    render(): import('lit-html').TemplateResult<1>;
    firstUpdated(): Promise<void>;
    private _handleInput;
    private _setProgress;
    private _updateTooltip;
    private _onMouseUp;
}
