import { LitElement } from 'lit';

export type DssTimepickerOption = {
    value: string;
    state: string;
};
export declare class Timepicker extends LitElement {
    static get styles(): import('lit').CSSResult[];
    get _input(): HTMLInputElement;
    get _label(): HTMLElement;
    set value(value: string);
    get value(): string;
    set invalid(invalid: boolean);
    get invalid(): boolean;
    set helpText(text: string);
    get helpText(): string;
    set errorTimeFormatText(text: string);
    get errorTimeFormatText(): string;
    set errorTimeOptionText(text: string);
    get errorTimeOptionText(): string;
    set dropdown(value: string);
    get dropdown(): string;
    set showDropdown(state: boolean);
    get showDropdown(): boolean;
    set minutesRange(value: number);
    get minutesRange(): number;
    set minHour(value: number);
    get minHour(): number;
    set maxHour(value: number);
    get maxHour(): number;
    set customTimeListOptions(options: DssTimepickerOption[]);
    get customTimeListOptions(): DssTimepickerOption[];
    inputSize: string;
    icon: string;
    dropdownPlacement: string;
    dropdownFixed: boolean;
    _value: string;
    _placeholder: string;
    _inputSize: string;
    _dropdown: string;
    _required: boolean;
    _disabled: boolean;
    _readonly: boolean;
    _invalid: boolean;
    _showDropdown: boolean;
    _helpText: string;
    _oldHelpText: string;
    _errorTimeFormatText: string;
    _errorTimeOptionText: string;
    _manualHourSelector: string;
    _manualMinuteSelector: string;
    _minutesRange: number;
    _minHour: number;
    _maxHour: number;
    _timeListOptions: string[];
    _customTimeListOptions: DssTimepickerOption[];
    _timeManualHourOptions: string[];
    _timeManualMinutesOptions: string[];
    _inputValidity: boolean;
    _isFirstUpdated: boolean;
    _popperInstanceList: any;
    _popperInstanceManual: any;
    constructor();
    disconnectedCallback(): void;
    _addDropdownListener(): void;
    _removeDropdownListener(): void;
    _handleOutsideClick(event: any): void;
    _handleFocusOut(event: FocusEvent): void;
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    private visibleObserver;
    firstUpdated(): Promise<void>;
    _createPopperList(): void;
    _createPopperManual(): void;
    _updateTimeOptions(): void;
    _checkInputAttributes(): void;
    _handleValidity(): void;
    _checkClickOutside(event: Event): void;
    _checkFocusOut(event: FocusEvent): void;
    _closeDropdown(): void;
    _timePattern: RegExp;
    _timeSeparator: string;
    _timeInputOldValue: string;
    _timeMask(value: string, limit: number, separator: any): string;
    _timeUnmask(value: string): string;
    _timeValidate(value: string): void;
    _dispatchValueChange(): void;
    _handleClick(): void;
    _handleInput(): void;
    _handleKeyDown(e: KeyboardEvent): void;
    _handleFocus(): void;
    _handleBlur(): void;
    _focusInput(): void;
    _generateTimeListOptions(): string[];
    _generateTimeListOptionsHTML(options: string[], customOptions?: DssTimepickerOption[]): import('lit-html').TemplateResult[];
    _generateTimeManualHoursOptions(): string[];
    _generateTimeManualMinutesOptions(): string[];
    _generateTimeManualOptionsHTML(inputName: string, options: string[]): import('lit-html').TemplateResult[];
    _checkDisableTimeManualSelector(): boolean;
    _timeManualSelectorCancel(): void;
    _timeManualSelectorAccept(): void;
    _timeListOptionsScrollTo(): void;
    _timeManualOptionsScrollTo(value?: string): void;
    _isTruncated: boolean;
    _checkInputOverflow(): void;
    render(): import('lit-html').TemplateResult;
}
