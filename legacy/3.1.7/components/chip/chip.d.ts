import { LitElement, PropertyValues } from 'lit';
export declare class Chip extends LitElement {
    static get styles(): import('lit').CSSResult[];
    size: string;
    icon: string;
    label: string;
    hasDelete: boolean;
    disabled: boolean;
    selected: boolean;
    disableSelect: boolean;
    _isSelectFocused: boolean;
    _isLabelTruncated: boolean;
    _isFirstUpdated: boolean;
    handleToggle(): void;
    handleKeydown(event: KeyboardEvent): void;
    handleDelete(event: Event): void;
    onSelectFocusIn(event: FocusEvent): void;
    onSelectFocusOut(): void;
    firstUpdated(): Promise<void>;
    willUpdate(_changedProperties: PropertyValues): void;
    _checkLabelTruncated(): void;
    render(): import('lit-html').TemplateResult;
}
