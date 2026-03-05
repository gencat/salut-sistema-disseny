import { LitElement } from 'lit';
export declare class TableRow extends LitElement {
    static get styles(): import('lit').CSSResult[];
    connectedCallback(): void;
    hover: boolean;
    clickable: boolean;
    selected: boolean;
    disabled: boolean;
    deleted: boolean;
    highlight: boolean;
    gridTemplateColumns: string | undefined;
    updated(changedProps: Map<string, any>): void;
    render(): import('lit-html').TemplateResult;
}
