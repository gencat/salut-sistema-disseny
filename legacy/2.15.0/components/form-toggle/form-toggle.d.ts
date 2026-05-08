import { LitElement } from 'lit';

export declare class FormToggle extends LitElement {
    static formAssociated: boolean;
    static get styles(): import('lit').CSSResult[];
    private internals;
    constructor();
    disconnectedCallback(): void;
    _input: HTMLInputElement;
    size: string;
    label: string;
    hideLabel: boolean;
    name: string;
    id: string;
    value: string | boolean;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    checked: boolean;
    tabIndex: number;
    private _defaultId;
    _getEffectiveId(): string;
    private defaultValue;
    updated(changedProps: Map<string, unknown>): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string | null): void;
    focusInput(): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
    _handleClick(): void;
    _handleKeydown(event: KeyboardEvent): void;
    _handleChange(): void;
    _emitChange(): void;
}
