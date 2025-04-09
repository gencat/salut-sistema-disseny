import { LitElement } from 'lit';

export declare class WidgetHeader extends LitElement {
    static get styles(): import('lit').CSSResult[];
    icon: string | undefined;
    iconStatus: string | undefined;
    title: string;
    titleSize: string;
    results: number | undefined;
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
    actionIcon: string | undefined;
    actionVariant: string;
    actionDisabled: boolean;
    tooltipFixed: boolean;
    private _eventOptions;
    checkTextTruncate(event: MouseEvent): void;
    handleAction(): void;
    handleNext(): void;
    handleClose(): void;
    render(): import('lit-html').TemplateResult;
}
