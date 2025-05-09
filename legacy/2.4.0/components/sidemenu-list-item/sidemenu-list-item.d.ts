import { LitElement } from 'lit';

export declare class SidemenuListItem extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleDocumentClickBound;
    private _handleContainerScrollBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    set label(value: string);
    get label(): string;
    set icon(value: string);
    get icon(): string;
    set selected(value: boolean);
    get selected(): boolean;
    set disabled(value: boolean);
    get disabled(): boolean;
    set hasNestedMenu(value: boolean);
    get hasNestedMenu(): boolean;
    set expanded(value: boolean);
    get expanded(): boolean;
    set notifications(value: number);
    get notifications(): number;
    set notificationsState(value: string);
    get notificationsState(): string;
    set nestedMenuPosition(value: string);
    get nestedMenuPosition(): string;
    set focusEnabled(value: boolean);
    get focusEnabled(): boolean;
    set scrollContainerClass(value: string);
    get scrollContainerClass(): string;
    private get _notificationBadge();
    _label: string;
    _icon: string | undefined;
    _selected: boolean;
    _disabled: boolean;
    _expanded: boolean;
    _hasNestedMenu: boolean;
    _nestedMenuPosition: string;
    _notifications: number;
    _notificationsState: string;
    _isHover: boolean;
    _isActive: boolean;
    _showItemDropdown: boolean;
    _isFocused: boolean;
    _focusEnabled: boolean;
    _scrollContainerClass: string;
    private _clickedOutsideItem;
    _handleDocumentClick(event: Event): void;
    _handleContainerScroll(): void;
    _handleClick(): void;
    _handleMouseEnter(): void;
    _handleMouseLeave(): void;
    _handleMouseDown(): void;
    _handleMouseUp(): void;
    _handleKeyDown(event: KeyboardEvent): void;
    _handleFocusout(event: any): void;
    _toggleTooltip(): void;
    _closeItemDropdown(): void;
    focusItem(): void;
    blurItem(): void;
    private _tooltip;
    private _dropdown;
    private get _scrollContainer();
    _getDropdownFixedPosition(): void;
    _getTooltipFixedPosition(): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
