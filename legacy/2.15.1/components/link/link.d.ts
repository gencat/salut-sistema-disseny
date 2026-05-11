import { LitElement, PropertyValues } from 'lit';
import { FontWeight } from '../../utils/property-types';

type LinkTarget = '_self' | '_blank' | '_parent' | '_top';
export declare class Link extends LitElement {
    static get styles(): import('lit').CSSResult[];
    variant: string;
    href: string;
    label: string;
    icon: string | undefined;
    size: string | undefined;
    iconSize: string;
    iconPosition: string;
    disabled: boolean;
    download: boolean;
    target: LinkTarget;
    fontWeight: FontWeight;
    fontSize: string;
    fullWidth: boolean;
    tooltipFixed: boolean;
    forceViewport: boolean;
    protected updated(_changedProperties: PropertyValues): void;
    _getIconSize(): string;
    checkTextTruncate(event: MouseEvent): void;
    render(): import('lit-html').TemplateResult;
}
export {};
