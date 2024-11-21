import { LitElement } from 'lit';

export declare class ButtonLink extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set linkHref(value: string);
    set label(value: string);
    set icon(value: string);
    set iconPosition(value: string);
    set iconFill(value: boolean);
    set disabled(value: boolean);
    _linkHref: string;
    _label: string;
    _icon: string | undefined;
    _iconPosition: string;
    _iconFill: boolean;
    _disabled: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
