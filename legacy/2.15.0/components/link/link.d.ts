import { LitElement } from 'lit';
import { FontWeight } from '../../utils/property-types';

type LinkTarget = '_self' | '_blank' | '_parent' | '_top';
export declare class Link extends LitElement {
    static get styles(): import('lit').CSSResult[];
    href: string;
    label: string;
    icon: string | undefined;
    iconSize: string;
    iconPosition: string;
    disabled: boolean;
    download: boolean;
    target: LinkTarget;
    fontWeight: FontWeight;
    fontSize: string;
    render(): import('lit-html').TemplateResult;
}
export {};
