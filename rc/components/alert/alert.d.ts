import { LitElement } from 'lit';

export declare class Alert extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set state(value: string);
    set size(value: string);
    set message(value: string);
    set hasCloseIcon(value: boolean);
    set hasButton(value: boolean);
    set buttonLabel(value: string);
    _state: string;
    _size: string;
    _iconSize: string;
    _message: string;
    _hasCloseIcon: boolean;
    _hasButton: boolean;
    _buttonLabel: string;
    _stateIcon: string;
    _handleButtonClick(): void;
    _handleClose(): void;
    render(): import('lit-html').TemplateResult;
}
