import { LitElement } from 'lit';

export interface IBreadcrumbItem {
    label: string;
    href: string;
}
export declare class Breadcrumb extends LitElement {
    static get styles(): import('lit').CSSResult[];
    items: IBreadcrumbItem[];
    handleItemClick(e: Event, item: IBreadcrumbItem): void;
    render(): import('lit-html').TemplateResult;
}
