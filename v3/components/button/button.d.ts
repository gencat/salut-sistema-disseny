import { LitElement } from 'lit';
export declare class Button extends LitElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
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
    loading: boolean;
    loadingIcon: string;
    _isTextTruncated: boolean;
    _handleClick(): void;
    _getIconSize(): "md" | "sm";
    checkTextTruncate(event: MouseEvent): void;
    render(): import('lit-html').TemplateResult;
}
