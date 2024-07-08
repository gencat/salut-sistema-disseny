import { LitElement } from 'lit';

export declare class Input extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private get _input();
    set label(label: string);
    set icon(icon: string);
    set inputSize(size: string);
    set helpText(text: string);
    set invalid(status: boolean);
    private _label;
    private _icon;
    private _placeholder;
    private _inputSize;
    private _maxLength;
    private _invalid;
    private _helpText;
    private _isFocused;
    private _isTypeNumeric;
    private _inputValidity;
    private observerConfig;
    private callback;
    private observer;
    disconnectedCallback(): void;
    private _handleClick;
    private _handleInput;
    private _handleFocusIn;
    private _handleFocusOut;
    private _focusInput;
    private _handleValidity;
    private _stepUp;
    private _stepDown;
    private _dispatchValueChange;
    private _checkInputAttributes;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
}
