import { LitElement } from 'lit';

export declare class SplitButton extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleDocumentClickBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    set iconClose(icon: string);
    set iconOpen(icon: string);
    set type(value: string);
    set text(value: string);
    set disabled(value: boolean);
    set isOpen(value: boolean);
    set size(value: string);
    set dropdownPosition(value: string);
    set hasMenu(value: boolean);
    _size: string;
    _iconClose: string;
    _iconOpen: string;
    _type: string;
    _text: string;
    _disabled: boolean;
    _isOpen: boolean;
    _dropdownPosition: string;
    _hasMenu: boolean;
    _dispatchMainClick(): void;
    _dispatchIconClick(): void;
    _toggleMenu(): void;
    _handleDocumentClick(event: Event): void;
    private _clickedOutsideItem;
    render(): import('lit-html').TemplateResult<1>;
}
