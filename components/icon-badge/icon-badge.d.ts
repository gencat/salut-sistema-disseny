import { LitElement } from 'lit';
export declare class IconBadge extends LitElement {
    static get styles(): import('lit').CSSResult[];
    icon: string | undefined;
    size: string;
    label: string;
    status: string;
    disabled: boolean;
    outlined: boolean;
    set state(state: string);
    get state(): string;
    get _iconSize(): "md" | "sm";
    get _icon(): string;
    get _iconFill(): boolean;
    get _bubble(): boolean;
    _isInformativeState(): boolean;
    render(): import('lit-html').TemplateResult;
}
