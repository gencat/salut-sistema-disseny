import { Options } from '@popperjs/core';
import { LitElement } from 'lit';

export declare class Tooltip extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private _parent;
    private _parentMouseEnterHandler;
    private _parentMouseLeaveHandler;
    private _parentFocusInHandler;
    private _parentFocusOutHandler;
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    position: string;
    align: string;
    hide: boolean;
    noHeightLimit: boolean;
    tooltipFixed: boolean;
    interactive: boolean;
    forceViewport: boolean;
    _popperInstance: any;
    firstUpdated(): Promise<void>;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    _getPopperStrategy(): "absolute" | "fixed";
    _getPopperModifiers(): Options['modifiers'];
    createPopperInstance(parent: HTMLElement): void;
    _onMouseEnter(event: MouseEvent): void;
    _openTooltip(): void;
    _closeTooltip(): void;
    _propagatePlacement(placement: string): void;
    updateTooltip(): void;
    render(): import('lit-html').TemplateResult;
}
