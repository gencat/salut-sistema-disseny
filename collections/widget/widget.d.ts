import { LitElement } from 'lit';

export declare class Widget extends LitElement {
    static get styles(): import('lit').CSSResult[];
    variant: string;
    icon: string | undefined;
    iconStatus: string | undefined;
    title: string;
    results: string | undefined;
    resultsState: string;
    resultsLabel: string;
    info: undefined;
    infoBadgeState: string;
    infoBadgeIcon: string;
    infoBadgeOutlined: boolean;
    notifications: number | undefined;
    notificationsState: string;
    hasAction: boolean;
    hasNext: boolean;
    hasClose: boolean;
    actionLabel: string | undefined;
    actionIcon: string | undefined;
    actionVariant: string;
    actionDisabled: boolean;
    tooltipFixed: boolean;
    hasScroll: boolean;
    folded: boolean;
    private _eventOptions;
    checkTextTruncate(event: MouseEvent): void;
    handleAction(): void;
    handleNext(): void;
    handleClose(): void;
    protected firstUpdated(): void;
    render(): import('lit-html').TemplateResult;
}
