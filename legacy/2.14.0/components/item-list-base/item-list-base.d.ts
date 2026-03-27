import { LitElement } from 'lit';

export declare class ItemListBase extends LitElement {
    static get styles(): import('lit').CSSResult[];
    disabled: boolean;
    value: string | undefined;
    title: string;
    titleText: string;
    subtitle: string | undefined;
    date: string | undefined;
    decorativeIcon: string | undefined;
    decorativeIconState: string | undefined;
    decorativeIconDisabled: boolean;
    decorativeIconFill: boolean;
    criticity: string | undefined;
    criticityLabel: string | undefined;
    criticityDisabled: boolean;
    first: boolean;
    tooltipFixed: boolean;
    tooltipPosition: string;
    interactive: boolean;
    selectable: boolean;
    forceViewport: boolean;
    highlight: string | undefined;
    highlightThreshold: number;
    advancedHighlight: boolean;
    _checkTextTruncate(event: MouseEvent): void;
    _dispatchClickEvent(event: MouseEvent): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import('lit-html').TemplateResult;
}
