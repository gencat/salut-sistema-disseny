import { LitElement } from 'lit';

export type WidgetIcon = {
    icon: string;
};
export type WidgetAction = {
    action: string;
    icon: string;
    type: string;
};
export type ListItem = {
    title: string;
    subtitle: string;
    decorativeIcon?: string;
    decorativeIconType?: string;
    actionIcon?: string;
    actionIconType?: string;
    badgeText?: string;
    badgeIcon?: string;
    badgeSize?: string;
    badgeState?: string;
    date?: string;
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
    set items(data: Array<ListItem>);
    get items(): Array<ListItem>;
    set widget(value: boolean);
    get widget(): boolean;
    set widgetActions(value: Array<WidgetAction>);
    get widgetActions(): Array<WidgetAction>;
    set widgetIcons(value: Array<WidgetIcon>);
    get widgetIcons(): Array<WidgetIcon>;
    _items: ListItem[];
    _widget: boolean;
    _widgetActions: WidgetAction[];
    _widgetIcons: WidgetIcon[];
    _dispatchItemAction(item: ListItem): void;
    _dispatchWidgetAction(item: ListItem, action: string): void;
    render(): import('lit-html').TemplateResult;
}