import { LitElement } from 'lit';

export type WidgetIcon = {
    icon: string;
};
export type WidgetAction = {
    action: string;
    icon: string;
    type: string;
    label?: string;
};
export type ListItem = {
    id?: string;
    title: string;
    subtitle: string;
    decorativeIcon?: string;
    decorativeIconType?: string;
    actionLabel?: string;
    actionIcon?: string;
    actionIconType?: string;
    badgeText?: string;
    badgeIcon?: string;
    badgeSize?: string;
    badgeState?: string;
    chipText?: string;
    chipSize?: string;
    chipSelected?: boolean;
    chipIcon?: string;
    date?: string;
    iconBadgeLabel?: string;
    iconBadgeLeftState?: string;
    iconBadgeLeftIcon?: string;
    iconBadgeRightState?: string;
    iconBadgeRightIcon?: string;
    description?: string;
    icons?: WidgetIcon[];
    actions?: WidgetAction[];
};
export declare class ItemList extends LitElement {
    static get styles(): import('lit').CSSResult[];
    items: ListItem[] | undefined;
    widget: boolean;
    hideTooltip: boolean;
    tooltipFixed: boolean;
    tooltipPosition: string;
    variant: string;
    _dispatchItemAction(item: ListItem): void;
    _dispatchItemChip(item: ListItem): void;
    _dispatchWidgetAction(item: ListItem, action: string): void;
    _applyDivider(): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
