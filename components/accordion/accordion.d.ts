import { LitElement } from 'lit';

export declare class Accordion extends LitElement {
    static get styles(): import('lit').CSSResult[];
    private get _checkbox();
    set icon(icon: string);
    set titleText(text: string);
    set type(value: string);
    set index(value: number);
    set isOpen(value: boolean);
    set accordionStyle(value: string);
    set results(value: number);
    set resultsText(value: string);
    set hasCheckbox(value: boolean);
    set hasSecondaryAction(value: boolean);
    set secondaryActionIcon(value: string);
    set resultsState(value: string);
    set notificationsState(value: string);
    set notifications(value: number);
    private _icon;
    private _type;
    private _title;
    private _index;
    private _isOpen;
    private _results;
    private _resultsText;
    private _resultsState;
    private _accordionStyle;
    private _hasCheckbox;
    private _hasSecondaryAction;
    private _secondaryActionIcon;
    private _notificationsState;
    private _notifications;
    private _toggleAccordion;
    private _dispatchCheckboxChange;
    private _dispatchSecondaryAction;
    render(): import('lit-html').TemplateResult<1>;
}
