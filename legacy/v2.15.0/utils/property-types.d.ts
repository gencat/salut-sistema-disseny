import { PropertyDeclaration } from 'lit';

export declare const booleanType: PropertyDeclaration<boolean>;
export declare const booleanConverter: {
    fromAttribute: (value: string | null) => boolean;
    toAttribute: (value: boolean) => "" | null;
};
export declare const selectedType: PropertyDeclaration<string[]>;
export declare const arrayType: PropertyDeclaration<string[]>;
export type FontWeight = 'inherit' | 'regular' | 'semibold' | 'bold';
export type OptionItem = {
    label: string;
    value: string;
};
