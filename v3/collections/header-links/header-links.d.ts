import { LitElement } from 'lit';
export type LinksItem = {
    label: string;
    icon?: string;
    disabled?: boolean;
};
export declare class HeaderLinks extends LitElement {
    static get styles(): import('lit').CSSResult[];
    jcef: boolean;
    hideHelp: boolean;
    disableHelp: boolean;
    helpLabel: string;
    configLabel: string;
    hideConfig: boolean;
    disableConfig: boolean;
    items: LinksItem[];
    _dispatchItemAction(item: LinksItem): void;
    _handleHelp(): void;
    _handleConfig(): void;
    render(): import('lit-html').TemplateResult;
}
