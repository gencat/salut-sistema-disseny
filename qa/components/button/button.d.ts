import { LitElement } from 'lit';

export declare class Button extends LitElement {
    static get styles(): import('lit').CSSResult[];
    type: string;
    variant: string;
    label: string;
    icon: string | undefined;
    iconPosition: string;
    disabled: boolean;
    hidden: boolean;
    onlyIcon: boolean;
    fullWidth: boolean;
    size: string;
    tooltipFixed: boolean;
    loading: boolean;
    loadingIcon: string;
    _handleClick(): void;
    _getIconSize(): "md" | "sm";
    checkTextTruncate(event: MouseEvent): void;
    render(): import('lit-html').TemplateResult;
}
