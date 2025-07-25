import { LitElement } from 'lit';

export declare class UserFeedback extends LitElement {
    static get styles(): import('lit').CSSResult[];
    variant: string;
    size: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    hasDetails: boolean;
    detailsLabel: string;
    hideFooter: boolean;
    status: string;
    _detailsExpanded: boolean;
    _handleDetailsClick(): void;
    render(): import('lit-html').TemplateResult;
}
