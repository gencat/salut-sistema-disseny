import { LitElement } from 'lit';

export declare class FormRadioButtonGroup extends LitElement {
    static formAssociated: boolean;
    static get styles(): import('lit').CSSResult[];
    private internals;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    _radioButtons: NodeListOf<any>;
    name: string;
    label: string;
    hideLabel: boolean;
    value: string;
    orientation: 'horizontal' | 'vertical';
    disabled: boolean;
    updated(changedProps: Map<string, unknown>): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string | null): void;
    render(): import('lit-html').TemplateResult<1>;
    _onRadioChange: (event: Event) => void;
    _emitChange(): void;
    _updateCheckedState(): void;
    _updateNameState(): void;
    _updateDisabledState(): void;
    _onKeyDown: (event: KeyboardEvent) => void;
}
