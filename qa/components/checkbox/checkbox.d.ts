import { LitElement } from 'lit';

export declare class Checkbox extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleChangeBound;
    get _input(): HTMLInputElement;
    get _label(): HTMLInputElement;
    variant: string;
    indeterminate: boolean;
    set checked(value: boolean);
    get checked(): boolean;
    _checked: boolean;
    _isCheckedPropDefined: boolean;
    _isFirstUpdate: boolean;
    _disabled: boolean;
    _readonly: boolean;
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    constructor();
    disconnectedCallback(): void;
    _checkInputAttributes(): void;
    _handleChange(): void;
    _dispatchChange(): void;
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
