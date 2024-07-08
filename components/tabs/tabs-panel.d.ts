import { LitElement } from 'lit';

export declare class TabsPanel extends LitElement {
    static get styles(): import('lit').CSSResult;
    set panelId(id: string);
    set label(value: string);
    set linkedTo(id: string);
    set selected(value: boolean);
    private _panelId;
    private _label;
    private _linkedTo;
    private _selected;
    render(): import('lit-html').TemplateResult<1>;
}
