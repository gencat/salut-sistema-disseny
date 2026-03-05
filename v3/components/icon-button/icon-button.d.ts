import { LitElement } from 'lit';
export declare class IconButton extends LitElement {
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
    size: string;
    label: string;
    icon: string | undefined;
    fill: boolean;
    disabled: boolean;
    hidden: boolean;
    disableTabindex: boolean;
    ariaLabel: string | null;
    ariaExpanded: any;
    tooltipFixed: boolean;
    tooltipInteractive: boolean;
    tooltipPosition: string;
    hideTooltip: boolean;
    _handleClick(): void;
    render(): import('lit-html').TemplateResult;
}
