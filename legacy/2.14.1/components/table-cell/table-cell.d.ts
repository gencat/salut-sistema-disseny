import { LitElement } from 'lit';
import { FontWeight } from '../../utils/property-types';

export declare class TableCell extends LitElement {
    static get styles(): import('lit').CSSResult[];
    connectedCallback(): void;
    fontWeight: FontWeight;
    align: 'left' | 'center' | 'right';
    colSpan: number;
    maxLines: number;
    columnHeader: boolean;
    hover: boolean;
    selected: boolean;
    disabled: boolean;
    deleted: boolean;
    highlight: boolean;
    sort: boolean;
    borderRight: boolean;
    borderLeft: boolean;
    reverse: boolean;
    valueMaxWidth: boolean;
    slotMaxWidth: boolean;
    width: string | undefined;
    icon: string | undefined;
    iconTooltip: string | undefined;
    value: string | undefined;
    updated(changedProps: Map<string, any>): void;
    render(): import('lit-html').TemplateResult;
}
