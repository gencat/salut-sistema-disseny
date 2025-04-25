import { LitElement } from 'lit';

export declare class UserFeedback extends LitElement {
    static get styles(): import('lit').CSSResult[];
    size: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    hasDetails: boolean;
    detailsLabel: string;
    hideFooter: boolean;
    _detailsExpanded: boolean;
    _handleDetailsClick(): void;
    render(): import('lit-html').TemplateResult;
}
