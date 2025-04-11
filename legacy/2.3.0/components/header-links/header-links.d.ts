import { LitElement } from 'lit';

export type LinksItem = {
    label: string;
    icon?: string;
    disabled?: boolean;
};
export declare class HeaderLinks extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleResizeBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
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
    _isBreakpointSm: boolean;
    _dispatchItemAction(item: LinksItem): void;
    _handleHelp(): void;
    private _resizeTimer;
    _handleResize(): void;
    render(): import('lit-html').TemplateResult;
}
