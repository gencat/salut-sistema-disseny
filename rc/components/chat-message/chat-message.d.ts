import { LitElement } from 'lit';

export declare class ChatMessage extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set username(name: string);
    set message(value: string);
    set date(value: string);
    set who(value: string);
    _username: string;
    _message: string;
    _date: string;
    _who: string;
    set avatarName(name: string);
    set avatarSurname(surname: string);
    set avatarImageUrl(imageUrl: string);
    set avatarSize(size: string);
    _avatarName: string;
    _avatarSurname: string;
    _avatarImageUrl: string;
    _avatarSize: string;
    render(): import('lit-html').TemplateResult;
}
