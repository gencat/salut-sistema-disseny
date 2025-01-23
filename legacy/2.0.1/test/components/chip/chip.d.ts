import { LitElement } from 'lit';

export declare class Chip extends LitElement {
    static get styles(): import('lit').CSSResult[];
    size: string;
    icon: string;
    label: string;
    hasDelete: boolean;
    disabled: boolean;
    selected: boolean;
    disableSelect: boolean;
    _isLabelTruncated: boolean;
    handleToggle(): void;
    handleDelete(event: Event): void;
    firstUpdated(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onKeyDown(event: KeyboardEvent): void;
    render(): import('lit-html').TemplateResult;
}
