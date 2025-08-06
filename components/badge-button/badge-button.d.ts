import { LitElement, PropertyValues } from 'lit';

export declare class BadgeButton extends LitElement {
    static get styles(): import('lit').CSSResult[];
    get _tooltip(): any;
    type: string;
    label: string;
    disabled: boolean;
    hidden: boolean;
    hideIcon: boolean;
    showIcon: boolean;
    outlined: boolean;
    set size(size: string);
    get size(): string;
    set action(value: string);
    get action(): string;
    set state(state: string);
    get state(): string;
    set icon(icon: string);
    get icon(): string;
    width: string | undefined;
    _size: string;
    _action: string;
    _actionIcon: string;
    _state: string;
    _icon: string;
    _isIconDefined: boolean;
    _iconSize: string;
    _iconFill: boolean;
    _isTextTruncated: boolean;
    _isFirstUpdated: boolean;
    _handleClick(): void;
    _updateIconFill(state: string): void;
    _generateDefaultIcon(state: string): void;
    _checkTextTruncated(): void;
    willUpdate(_changedProperties: PropertyValues): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
