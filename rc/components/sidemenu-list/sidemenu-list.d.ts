import { LitElement } from 'lit';

export declare class SidemenuList extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set expanded(value: boolean);
    set disabled(value: boolean);
    set scrollContainerClass(value: string);
    _disabled: boolean;
    _expanded: boolean;
    _scrollContainerClass: string;
    private _propagateProperties;
    _handleItemFocus(event: CustomEvent): void;
    _handleNavigate(event: CustomEvent): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
