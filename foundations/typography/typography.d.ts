import { LitElement } from 'lit';
import { FontWeight } from '../../utils/property-types';

type TypographyVariant = 'headline-1' | 'headline-2' | 'headline-3' | 'headline-4' | 'subtitle-1' | 'subtitle-2' | 'subtitle-3' | 'subtitle-4' | 'body-1' | 'body-2' | 'body-3';
export declare class Typography extends LitElement {
    static get styles(): import('lit').CSSResult[];
    tag: string;
    variant: TypographyVariant;
    fontWeight: FontWeight;
    underline: boolean;
    render(): import('lit-html').TemplateResult;
}
export {};
