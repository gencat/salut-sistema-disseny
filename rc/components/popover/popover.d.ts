import { LitElement } from 'lit';

export declare class Popover extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set open(value: boolean);
    set hasDivider(value: boolean);
    set hideCloseIcon(value: boolean);
    set title(value: string);
    set actionIcon(value: string);
    set position(value: string);
    _open: boolean;
    _hasDivider: boolean;
    _hideCloseIcon: boolean;
    _title: string;
    _position: string;
    _actionIcon: string | undefined;
    _handleAction(): void;
    _handleClose(): void;
    render(): import('lit-html').TemplateResult;
}
