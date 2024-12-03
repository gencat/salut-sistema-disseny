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
    _label: string;
    _min: number;
    _max: number;
    _step: number;
    _orient: string;
    _vertical: boolean;
    _value: number;
    _progress: number;
    _disabled: boolean;
    _isTooltipTouched: boolean;
    firstUpdated(): Promise<void>;
    _handleTouchStart(event: any): void;
    _handleTouchEnd(event: any): void;
    _handleTouchMove(event: any): void;
    _handleInput(): void;
    _setProgress(): void;
    _updateTooltip(): void;
    _dispatchValue(): void;
    render(): import('lit-html').TemplateResult;
}
