import { LitElement } from 'lit';

export declare class Header extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set title(value: string);
    set area(value: string);
    set logoSrc(value: string);
    _title: string | undefined;
    _area: string | undefined;
    _logoSrc: string;
    _handleClick(): void;
    render(): import('lit-html').TemplateResult<1>;
}
