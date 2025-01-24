import { LitElement } from 'lit';

export declare class UploadBox extends LitElement {
    static get styles(): import('lit').CSSResult[];
    fileExplorerMessage: string;
    dragAndDropMessage: string;
    dragAndDropIcon: string;
    filesFormatMessage: string;
    buttonLabel: string;
    filesFormat: string[];
    maxFileSize: number;
    get _input(): HTMLInputElement;
    _dragOver: boolean;
    _files: any[];
    _disabled: boolean;
    _fileFormatErrorMessage: string;
    _fileSizeErrorMessage: string;
    _fileFormatAndSizeErrorMessage: string;
    _fileErrors: {
        [fileName: string]: string;
    };
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    disconnectedCallback(): void;
    _checkInputAttributes(): void;
    _onDragOver(event: DragEvent): void;
    _onDragLeave(event: DragEvent): void;
    _onDrop(event: DragEvent): void;
    _onClick(): void;
    _onSlotInputChange(): void;
    _isValidFileFormat(file: File): boolean;
    _isValidFileSize(file: File): boolean;
    _validateFile(file: File): boolean;
    _isAlreadyUploaded(file: File): boolean;
    _handleInputFileChange(event: Event): void;
    _handleUploadedFiles(uploadedFiles: FileList): void;
    _readFile(newFile: File, validity?: boolean): void;
    _removeFile(index: number): void;
    _reloadFile(file: any): void;
    resetFiles(): void;
    _dispatchUploadFiles(): void;
    _dispatchOpenFile(file: File): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
