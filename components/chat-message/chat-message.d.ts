import { LitElement } from 'lit';

export declare class ChatMessage extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set username(name: string);
    set message(value: string);
    set date(value: string);
    set who(value: string);
    private _username;
    private _message;
    private _date;
    private _who;
    set avatarName(name: string);
    set avatarSurname(surname: string);
    set avatarImageUrl(imageUrl: string);
    set avatarSize(size: string);
    private _avatarName;
    private _avatarSurname;
    private _avatarImageUrl;
    private _avatarSize;
    private _getAvatarImageHTML;
    private _getAvatarAcronymHTML;
    private _getAvatarHTML;
    render(): import('lit-html').TemplateResult<1>;
}
