import { LitElement } from 'lit';

export declare class Badge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    get _tooltip(): any;
    set icon(icon: string);
    get icon(): string;
    set size(size: string);
    get size(): string;
    set text(text: string);
    get text(): string;
    set state(state: string);
    get state(): string;
    set disabled(value: boolean);
    get disabled(): boolean;
    set outlined(value: boolean);
    get outlined(): boolean;
    set dot(value: boolean);
    get dot(): boolean;
    set hideIcon(value: boolean);
    get hideIcon(): boolean;
    _icon: string;
    _iconSize: string;
    _size: string;
    _text: string;
    _state: string;
    _disabled: boolean;
    _isIconDefined: boolean;
    _outlined: boolean;
    _dot: boolean;
    _hideIcon: boolean;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
