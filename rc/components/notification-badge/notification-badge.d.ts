import { LitElement } from 'lit';

export declare class NotificationBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    icon: string | undefined;
    value: string;
    state: string;
    type: string;
    dot: boolean;
    menu: boolean;
    borderMenu: boolean;
    borderWhite: boolean;
    isHover: boolean;
    isActive: boolean;
    render(): import('lit-html').TemplateResult;
}
