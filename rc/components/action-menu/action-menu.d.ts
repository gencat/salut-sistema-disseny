import { LitElement } from 'lit';

export declare class ActionMenu extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set fullWidth(value: boolean);
    _fullWidth: boolean;
    private _handleSlotChange;
    private _clickOutside;
    private _handleClickOutside;
    firstUpdated(): void;
    render(): import('lit-html').TemplateResult<1>;
}
