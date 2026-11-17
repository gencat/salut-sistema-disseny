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
    _steps: IStepper[];
    currentStep: number;
    column: boolean;
    circular: boolean;
    hideLabel: boolean;
    size: string;
    _activeBarWidth: string;
    private _isFirstUpdate;
    firstUpdated(): Promise<void>;
    willUpdate(changedProperties: any): void;
    private _setActiveBarWidth;
    _onStepClick(step: any, stepNumber: number): void;
    render(): import('lit-html').TemplateResult;
}
