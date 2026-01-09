import { LitElement } from 'lit';

export type StateType = 'default' | 'info' | 'success' | 'error';
export type SizeType = 'sm' | 'md' | 'lg' | 'xl';
export declare class DecorativeIcon extends LitElement {
    static get styles(): import('lit').CSSResult[];
    icon?: string;
    state: StateType;
    size: SizeType;
    disabled: boolean;
    render(): import('lit-html').TemplateResult;
}
