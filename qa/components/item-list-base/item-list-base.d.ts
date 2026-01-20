import { LitElement } from 'lit';

export declare class ItemListBase extends LitElement {
    static get styles(): import('lit').CSSResult[];
    value: string | undefined;
    title: string;
    subtitle: string | undefined;
    date: string | undefined;
    decorativeIcon: string | undefined;
    decorativeIconState: string | undefined;
    criticity: string | undefined;
    criticityLabel: string | undefined;
    first: boolean;
    disabled: boolean;
    tooltipFixed: boolean;
    tooltipPosition: string;
    _checkTextTruncate(event: MouseEvent): void;
    render(): import('lit-html').TemplateResult;
}
