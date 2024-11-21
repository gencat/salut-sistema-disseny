import { LitElement } from 'lit';

export declare class Textarea extends LitElement {
    static get styles(): import('lit').CSSResult;
    set value(value: string);
    set showError(showError: boolean);
    private get _label();
    private get _textarea();
    private get _description();
    private _maxLength;
    private _isTextareaFocused;
    private _isGroupFocusedVisible;
    private _showError;
    firstUpdated(): Promise<void>;
    private _addEventListeners;
    private _handleInput;
    private _handleKeyup;
    private _handleFocus;
    private _handleFocusOut;
    private _handleBlur;
    private _handelLabelClick;
    private _handleSlotChange;
    render(): import('lit-html').TemplateResult<1>;
}
