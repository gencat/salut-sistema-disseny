import { LitElement } from 'lit';
export declare class SidemenuList extends LitElement {
    static get styles(): import('lit').CSSResult[];
    expanded: boolean;
    disabled: boolean;
    private _propagateProperties;
    _handleItemFocus(event: CustomEvent): void;
    _handleNavigate(event: CustomEvent): void;
    _checkActionMenuClose(item: any): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
}
