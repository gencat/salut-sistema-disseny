import { LitElement } from 'lit';

export interface IStepper {
    label: string;
    icon?: string;
    state?: string;
}
export declare class Stepper extends LitElement {
    static get styles(): import('lit').CSSResult;
    set steps(steps: IStepper[]);
    get steps(): IStepper[];
    set currentStep(currentStep: number);
    get currentStep(): number;
    set column(column: boolean);
    get column(): boolean;
    set circular(circular: boolean);
    get circular(): boolean;
    set hideLabel(hideLabel: boolean);
    get hideLabel(): boolean;
    set size(size: string);
    get size(): string;
    private _steps;
    private _currentStep;
    private _column;
    private _circular;
    private _hideLabel;
    private _size;
    private _activeBarWidth;
    private _isFirstUpdate;
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: any): void;
    private _setActiveBarWidth;
    private _onStepClick;
    render(): import('lit-html').TemplateResult<1>;
}
