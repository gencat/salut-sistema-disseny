import { LitElement } from 'lit';

export declare class Textarea extends LitElement {
    static get styles(): import('lit').CSSResult;
    set value(value: string);
    set showError(showError: boolean);
    get _label(): HTMLElement;
    get _textarea(): HTMLTextAreaElement;
    get _description(): HTMLElement;
    _maxLength: number;
    _isTextareaFocused: boolean;
    _isGroupFocusedVisible: boolean;
    _showError: boolean;
    firstUpdated(): Promise<void>;
    _addEventListeners(): void;
    _handleInput(): void;
    _handleKeyup(e: any): void;
    _handleFocus(): void;
    _handleFocusOut(): void;
    _handleBlur(): void;
    _handelLabelClick(): void;
    _handleSlotChange(): void;
    render(): import('lit-html').TemplateResult;
}
