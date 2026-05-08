import { LitElement } from 'lit';

export declare class Legend extends LitElement {
    static get styles(): import('lit').CSSResult[];
    orientation: 'row' | 'column';
    items: {
        color: string;
        shade: number;
        label: string;
        icon?: string;
    }[];
    itemsPerRowOrColumn: number;
    type: 'color' | 'icon';
    render(): import('lit-html').TemplateResult;
}
