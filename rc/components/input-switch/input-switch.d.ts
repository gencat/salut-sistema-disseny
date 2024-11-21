import { LitElement } from 'lit';

export declare class InputSwitch extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private get _input();
    set size(size: string);
    set checked(value: boolean);
    private _checked;
    private _isCheckedPropDefined;
    private _isFirstUpdate;
    private _disabled;
    private _readonly;
    private _size;
    private observerConfig;
    private callback;
    private observer;
    disconnectedCallback(): void;
    private _checkInputAttributes;
    private _handleClick;
    private _handleKeydown;
    private _dispatchChange;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
}
