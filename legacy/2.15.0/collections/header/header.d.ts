import { LitElement } from 'lit';

export declare class Header extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _handleResizeBound;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    title: string;
    titleText: string;
    titleFullWidth: boolean;
    area: string | undefined;
    logoSrc: string | undefined;
    jcef: boolean;
    showEndVisit: boolean;
    hideEndVisitDivider: boolean;
    endVisitLabel: string;
    private _propagateProperties;
    private _updateSlotsDivider;
    _handleEndVisit(): void;
    _isBreakpointSm: boolean;
    private _resizeTimer;
    _handleResize(): void;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
