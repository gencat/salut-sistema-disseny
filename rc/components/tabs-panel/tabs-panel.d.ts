import { LitElement } from 'lit';

export declare class TabsPanel extends LitElement {
    static get styles(): import('lit').CSSResult;
    set panelId(id: string);
    set label(value: string);
    set linkedTo(id: string);
    set selected(value: boolean);
    set hasScroll(value: boolean);
    _panelId: string;
    _label: string;
    _linkedTo: string;
    _selected: boolean;
    _hasScroll: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
