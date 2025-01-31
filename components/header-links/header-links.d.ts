import { LitElement } from 'lit';

export type LinksItem = {
    label: string;
    icon?: string;
    disabled?: boolean;
};
export declare class HeaderLinks extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set hideHelp(value: boolean);
    get hideHelp(): boolean;
    set disableHelp(value: boolean);
    get disableHelp(): boolean;
    set helpLabel(value: string);
    get helpLabel(): string;
    set items(data: Array<LinksItem>);
    get items(): Array<LinksItem>;
    _hideHelp: boolean;
    _disableHelp: boolean;
    _helpLabel: string;
    _items: LinksItem[];
    _dispatchItemAction(item: LinksItem): void;
    _handleHelp(): void;
    render(): import('lit-html').TemplateResult;
}
