import { LitElement } from 'lit';

export declare class FormRadioButton extends LitElement {
    static formAssociated: boolean;
    static get styles(): import('lit').CSSResult[];
    private internals;
    constructor();
    disconnectedCallback(): void;
    _input: HTMLInputElement;
    label: string;
    hideLabel: boolean;
    name: string;
    id: string;
    value: string;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    checked: boolean;
    tabIndex: number;
    private _defaultId;
    updated(changedProps: Map<string, unknown>): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string | null): void;
    focusInput(): void;
    render(): import('lit-html').TemplateResult;
    _handleChange(e: Event): void;
    _getEffectiveId(): string;
    _emitChange(): void;
}
