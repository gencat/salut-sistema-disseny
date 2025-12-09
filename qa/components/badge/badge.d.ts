import { LitElement, PropertyValues } from 'lit';

export declare class Badge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    get _tooltip(): any;
    set icon(icon: string);
    get icon(): string;
    set size(size: string);
    get size(): string;
    text: string;
    set state(state: string);
    get state(): string;
    disabled: boolean;
    outlined: boolean;
    dot: boolean;
    hideIcon: boolean;
    tooltipPosition: string;
    width: string | undefined;
    _icon: string;
    _iconSize: string;
    _iconFill: boolean;
    _size: string;
    _state: string;
    _isIconDefined: boolean;
    _isFirstUpdated: boolean;
    _isTextTruncated: boolean;
    firstUpdated(): Promise<void>;
    willUpdate(_changedProperties: PropertyValues): void;
    _checkTextTruncated(): void;
    _updateIconFill(state: string): void;
    _generateDefaultIcon(state: string): void;
    _isInformativeState(): boolean;
    render(): import('lit-html').TemplateResult;
}
