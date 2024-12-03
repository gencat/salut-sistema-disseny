import { LitElement } from 'lit';

export declare class UploadBox extends LitElement {
    static get styles(): import('lit').CSSResult[];
    set dragAndDropIcon(value: string);
    set dragAndDropMessage(value: string);
    set fileExplorerMessage(value: string);
    set filesFormatMessage(value: string);
    set buttonLabel(value: string);
    set filesFormat(value: Array<string>);
    set maxFileSize(value: number);
    get _input(): HTMLInputElement;
    _dragOver: boolean;
    _files: any[];
    _disabled: boolean;
    _dragAndDropIcon: string;
    _fileExplorerMessage: string;
    _dragAndDropMessage: string;
    _filesFormatMessage: string;
    _buttonLabel: string;
    _filesFormat: string[];
    _fileFormatErrorMessage: string;
    _fileSizeErrorMessage: string;
    _fileFormatAndSizeErrorMessage: string;
    _maxFileSize: number;
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
    _dispatchUploadFiles(): void;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
