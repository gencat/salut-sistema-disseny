import { LitElement } from 'lit';

export declare class Switch extends LitElement {
    static get styles(): import('lit').CSSResult;
    set checked(checked: boolean);
    get checked(): boolean;
    set disabled(disabled: boolean);
    get disabled(): boolean;
    set label(label: string);
    get label(): string;
    set size(size: string);
    get size(): string;
    ariaLabel: string;
    private _checked;
    private _disabled;
    private _label;
    private _size;
    handleClick(): void;
    render(): import('lit-html').TemplateResult<1>;
}
