import { LitElement } from 'lit';

export declare class Accordion extends LitElement {
    static get styles(): import('lit').CSSResult[];
    get _checkbox(): HTMLInputElement;
    set icon(icon: string);
    get icon(): string;
    set iconStatus(value: string);
    get iconStatus(): string;
    set titleText(text: string);
    get titleText(): string;
    set type(value: string);
    get type(): string;
    set index(value: number);
    get index(): number;
    set isOpen(value: boolean);
    get isOpen(): boolean;
    set accordionStyle(value: string);
    get accordionStyle(): string;
    set results(value: number);
    get results(): number;
    set resultsText(value: string);
    get resultsText(): string;
    set hasCheckbox(value: boolean);
    get hasCheckbox(): boolean;
    set hasSecondaryAction(value: boolean);
    get hasSecondaryAction(): boolean;
    set secondaryActionIcon(value: string);
    get secondaryActionIcon(): string;
    set secondaryActionStatus(value: string);
    get secondaryActionStatus(): string;
    set secondaryActionDisabled(value: boolean);
    get secondaryActionDisabled(): boolean;
    set resultsState(value: string);
    get resultsState(): string;
    set notificationsState(value: string);
    get notificationsState(): string;
    set notifications(value: number);
    get notifications(): number;
    set widget(value: boolean);
    get widget(): boolean;
    set widgetBadgeState(value: string);
    get widgetBadgeState(): string;
    set widgetBadgeText(value: string);
    get widgetBadgeText(): string;
    set widgetShowNext(value: boolean);
    get widgetShowNext(): boolean;
    set widgetShowClose(value: boolean);
    get widgetShowClose(): boolean;
    _icon: string;
    _iconStatus: string;
    _type: string;
    _title: string;
    _index: number | undefined;
    _isOpen: boolean;
    _results: number | undefined;
    _resultsText: string;
    _resultsState: string;
    _accordionStyle: string;
    _hasCheckbox: boolean;
    _hasSecondaryAction: boolean;
    _secondaryActionIcon: string;
    _secondaryActionStatus: string;
    _secondaryActionDisabled: boolean;
    _notificationsState: string;
    _notifications: number | undefined;
    _widget: boolean;
    _widgetBadgeState: string;
    _widgetBadgeText: string | undefined;
    _widgetShowNext: boolean;
    _widgetShowClose: boolean;
    _toggleAccordion(): void;
    _dispatchCheckboxChange(): void;
    _dispatchSecondaryAction(): void;
    _dispatchToggleAccordion(): void;
    _dispatchWidgetNext(): void;
    _dispatchWidgetClose(): void;
    render(): import('lit-html').TemplateResult;
}