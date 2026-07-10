import { LitElement } from 'lit';

export declare class ChatMessage extends LitElement {
    static get styles(): import('lit').CSSResult[];
    username: string;
    message: string;
    date: string;
    who: string;
    avatarName: string;
    avatarSurname: string;
    avatarImageUrl: string;
    avatarSize: string;
    render(): import('lit-html').TemplateResult;
}
