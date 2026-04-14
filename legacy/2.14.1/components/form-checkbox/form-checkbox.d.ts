import { LitElement } from 'lit';

export declare class FormCheckbox extends LitElement {
    static formAssociated: boolean;
    static get styles(): import('lit').CSSResult[];
    private internals;
    constructor();
    disconnectedCallback(): void;
    _input: HTMLInputElement;
    label: string;
    hideLabel: boolean;
    id: string;
    name: string;
    value: string | boolean;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    checked: boolean;
    tabIndex: number;
    variant: string;
    indeterminate: boolean;
    private defaultValue;
    private _defaultId;
    updated(changedProps: Map<string, unknown>): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string | null): void;
    focusInput(): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
    _handleChange(e: Event): void;
    _getEffectiveId(): string;
    _emitChange(): void;
}
