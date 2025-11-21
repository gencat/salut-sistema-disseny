import { LitElement } from 'lit';

export declare class Alert extends LitElement {
    static get styles(): import('lit').CSSResult[];
    state: string;
    size: string;
    message: string;
    buttonLabel: string;
    showMoreLabel: string;
    showLessLabel: string;
    hasCloseIcon: boolean;
    hasButton: boolean;
    fullWidth: boolean;
    buttonBottom: boolean;
    expanded: boolean;
    isOverflowing: boolean;
    _stateIcon: string;
    _handleButtonClick(): void;
    _handleClose(): void;
    updated(_changedProperties: Map<string | number | symbol, unknown>): void;
    firstUpdated(): Promise<void>;
    setStateIcon(): void;
    _getIconSize(): "md" | "sm";
    toggleExpand(): void;
    render(): import('lit-html').TemplateResult;
}
