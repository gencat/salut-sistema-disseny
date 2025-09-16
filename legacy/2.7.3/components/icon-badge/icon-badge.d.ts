import { LitElement } from 'lit';

export declare class IconBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set icon(icon: string);
    get icon(): string;
    set size(size: string);
    get size(): string;
    set state(state: string);
    get state(): string;
    set disabled(value: boolean);
    get disabled(): boolean;
    set outlined(value: boolean);
    get outlined(): boolean;
    set bubble(value: boolean);
    get bubble(): boolean;
    _icon: string;
    _size: string;
    _state: string;
    _disabled: boolean;
    _isIconDefined: boolean;
    _outlined: boolean;
    _bubble: boolean;
    _iconSize: string;
    _iconFill: boolean;
    firstUpdated(): void;
    _updateIconFill(state: string): void;
    render(): import('lit-html').TemplateResult;
}
