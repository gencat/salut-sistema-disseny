import { LitElement, PropertyValues } from 'lit';
export declare class BadgeButton extends LitElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    static get styles(): import('lit').CSSResult[];
    get _tooltip(): any;
    type: string;
    icon: string | undefined;
    size: string;
    status: string;
    label: string;
    action: string;
    disabled: boolean;
    hidden: boolean;
    hideIcon: boolean;
    outlined: boolean;
    width: string | undefined;
    set state(state: string);
    get state(): string;
    get _actionIcon(): "visibility" | "open_in_new" | "expand_more";
    get _iconSize(): "md" | "sm";
    get _icon(): string;
    get _iconFill(): boolean;
    _isTextTruncated: boolean;
    _isFirstUpdated: boolean;
    _handleClick(): void;
    _isInformativeStatus(): boolean;
    _checkTextTruncated(): void;
    willUpdate(_changedProperties: PropertyValues): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
