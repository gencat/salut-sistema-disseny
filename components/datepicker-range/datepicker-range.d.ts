import { LitElement } from 'lit';

export type CalendarItem = {
    date: string;
    type: string;
};
export type DssTimepickerOption = {
    value: string;
    state: string;
};
export declare class DatepickerRange extends LitElement {
    static get styles(): import('lit').CSSResult[];
    get _inputRangeStart(): HTMLInputElement;
    get _inputRangeEnd(): HTMLInputElement;
    set iconRangeStart(value: string);
    get iconRangeStart(): string;
    set iconRangeEnd(value: string);
    get iconRangeEnd(): string;
    set minDate(minDate: string);
    get minDate(): string;
    set maxDate(maxDate: string);
    get maxDate(): string;
    set invalid(invalid: boolean);
    get invalid(): boolean;
    inputSize: string;
    set helpText(text: string);
    get helpText(): string;
    set showButtons(showButtons: boolean);
    get showButtons(): boolean;
    set calendarLeftButtonLabel(leftLabel: string);
    get calendarLeftButtonLabel(): string;
    set calendarRightButtonLabel(rightLabel: string);
    get calendarRightButtonLabel(): string;
    dropdownPlacement: string;
    dropdownFixed: boolean;
    customCalendar: CalendarItem[] | undefined;
    validate: boolean;
    errorMessageFormat: string;
    errorMessageMinDate: string;
    errorMessageMaxDate: string;
    _iconRangeStart: string;
    _iconRangeEnd: string;
    _dateformatPlaceholder: string;
    _isStartFocused: boolean;
    _isEndFocused: boolean;
    _invalid: boolean;
    _showCalendar: boolean;
    _helpText: string;
    _minDate: string;
    _maxDate: string;
    _calendarShowButtons: boolean;
    _calendarLeftButtonLabel: string;
    _calendarRightButtonLabel: string;
    _copyInputRangeStartPlaceholder: string;
    _copyInputRangeEndPlaceholder: string;
    _isFirstInputsCheck: boolean;
    _popperInstance: any;
    _helpTextBackup: string;
    constructor();
    disconnectedCallback(): void;
    _addCalendarListener(): void;
    _removeCalendarListener(): void;
    _handleOutsideClick(event: any): void;
    _handleFocusOut(event: FocusEvent): void;
    _checkInputAttributes(): void;
    _updatePlaceholders(): void;
    _removePlaceholders(): void;
    _handleRangeStartInput(event: Event): void;
    _handleRangeEndInput(event: Event): void;
    _handleRangeStartClick(): void;
    _handleRangeEndClick(): void;
    _handleRangeStartFocusIn(): void;
    _handleRangeEndFocusIn(): void;
    _handleRangeKeydown(e: KeyboardEvent): void;
    _onCalendarChange(event: CustomEvent): void;
    _onCalendarCancel(): void;
    _checkClickOutside(event: Event): void;
    _checkFocusOut(event: FocusEvent): void;
    _closeCalendar(): void;
    _formatDate(value: string): string;
    _validateDate(): void;
    _checkDateFormat(date: string): boolean;
    _convertToISO(dateStr: string): string;
    _dispatchOnValidate(invalid: boolean): void;
    _createPopperCalendar(): void;
    observerConfig: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
    callback: (mutationList: any) => void;
    observer: MutationObserver;
    private visibleObserver;
    firstUpdated(): Promise<void>;
    render(): import('lit-html').TemplateResult;
}
