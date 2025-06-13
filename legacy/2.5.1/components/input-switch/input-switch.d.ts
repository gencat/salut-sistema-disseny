import { LitElement } from 'lit';

export declare class InputSwitch extends LitElement {
    static get styles(): import('lit').CSSResult[];
    get _input(): HTMLInputElement;
    set size(size: string);
    get size(): string;
    set checked(value: boolean);
    get checked(): boolean;
    _checked: boolean;
    _isCheckedPropDefined: boolean;
    _isFirstUpdate: boolean;
    _disabled: boolean;
    _readonly: boolean;
    _size: string;
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    disconnectedCallback(): void;
    _checkInputAttributes(): void;
    _handleClick(): void;
    _handleKeydown(event: KeyboardEvent): void;
    _dispatchChange(): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
