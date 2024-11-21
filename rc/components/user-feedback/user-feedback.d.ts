import { LitElement } from 'lit';

export declare class UserFeedback extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set imageSrc(value: string);
    set imageAlt(value: string);
    set title(value: string);
    set description(value: string);
    set hasDetails(value: boolean);
    set detailsLabel(value: string);
    set hideFooter(value: boolean);
    _imageSrc: string;
    _imageAlt: string;
    _title: string;
    _description: string;
    _hasDetails: boolean;
    _detailsLabel: string;
    _detailsExpanded: boolean;
    _hideFooter: boolean;
    _handleDetailsClick(): void;
    render(): import('lit-html').TemplateResult<1>;
}
