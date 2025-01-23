import { LitElement } from 'lit';

export declare class Alert extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set state(value: string);
    get state(): string;
    set size(value: string);
    get size(): string;
    set message(value: string);
    get message(): string;
    set hasCloseIcon(value: boolean);
    get hasCloseIcon(): boolean;
    set hasButton(value: boolean);
    get hasButton(): boolean;
    set buttonLabel(value: string);
    get buttonLabel(): string;
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
