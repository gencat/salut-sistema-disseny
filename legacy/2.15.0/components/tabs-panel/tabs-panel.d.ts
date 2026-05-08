import { LitElement } from 'lit';

export declare class TabsPanel extends LitElement {
    static get styles(): import('lit').CSSResult;
    set panelId(id: string);
    get panelId(): string;
    set label(value: string);
    get label(): string;
    set linkedTo(id: string);
    get linkedTo(): string;
    set selected(value: boolean);
    get selected(): boolean;
    set hasScroll(value: boolean);
    get hasScroll(): boolean;
    _panelId: string;
    _label: string;
    _linkedTo: string;
    _selected: boolean;
    _hasScroll: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
