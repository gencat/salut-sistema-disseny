import { LitElement } from 'lit';

export declare class CardMenu extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set position(value: string);
    set disabled(value: boolean);
    private _position;
    private _disabled;
    private _showMenu;
    private _clickedOutsideDropdown;
    private _openMenu;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult<1>;
}
