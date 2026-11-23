import { LitElement } from 'lit';
export declare class NotificationBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    variant: string;
    type: string;
    status: string;
    dot: boolean;
    inverted: boolean;
    icon: string | undefined;
    value: string;
    hideBorder: boolean;
    isHover: boolean;
    isActive: boolean;
    render(): import('lit-html').TemplateResult;
}
