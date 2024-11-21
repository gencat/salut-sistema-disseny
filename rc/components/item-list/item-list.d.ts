import { LitElement } from 'lit';

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
};
export declare class ItemList extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set items(data: Array<ListItem>);
    _items: ListItem[];
    _dispatchItemAction(item: ListItem): void;
    render(): import('lit-html').TemplateResult;
}
