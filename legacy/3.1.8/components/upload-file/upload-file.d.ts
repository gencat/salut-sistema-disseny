import { LitElement, PropertyValues } from 'lit';
export declare class UploadFile extends LitElement {
    static get styles(): import('lit').CSSResult[];
    state: 'uploading' | 'error' | 'uploaded';
    fileName: string;
    message: string | undefined;
    disableActions: boolean;
    disableOpenFile: boolean;
    _decorativeIcon: string;
    _decorativeState: string;
    _isTruncated: boolean;
    _updateState(): void;
    private _fileEventOptions;
    _handleOpen(): void;
    _handleStop(): void;
    _handleReload(): void;
    _handleDelete(): void;
    protected updated(_changedProperties: PropertyValues): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
