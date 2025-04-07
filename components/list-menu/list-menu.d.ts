import { LitElement } from 'lit';

export declare class ListMenu extends LitElement {
    static get styles(): import('lit').CSSResult[];
    title: string;
    description: string;
    icon: string | null;
    items: {
        label: string;
        icon: string;
        hasNotification?: boolean;
        hasAction?: boolean;
        disabled?: boolean;
        isTruncated?: boolean;
    }[];
    disabled: boolean;
    selectedItemIndex: number | null;
    private _isFirstUpdate;
    private _handleResizeBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _resizeTimer;
    _handleResize(): void;
    handleItemClick(index: number): void;
    onKeyDown(event: KeyboardEvent): void;
    moveFocus(direction: number): void;
    _checkTextsToTruncated(): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
