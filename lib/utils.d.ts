import { BatchOptions, HighLevelControlOverrides, HighLevelHeaderOverrides } from './Types.js';
import Batch from './batch/index.js';
export declare function pad<Text extends string = string, padEnd extends boolean = true, Char extends string = ' '>(str: Text, width: number, padRight?: padEnd, padChar?: Char): string;
export declare function computeCheckDigit(routing: `${number}` | number): `${number}`;
export declare function testRegex(regex: RegExp, field: {
    number: number | string;
    value: string;
    name: string;
    type: string;
}): boolean;
export declare function generateString(object: Record<string, unknown>, cb: (arg0: string) => void): void;
export declare function parseLine(str: string, object: Record<string, {
    width: number;
}>): Record<string, string>;
export declare function unique(): number;
type HighLevelOverrides = HighLevelHeaderOverrides | HighLevelControlOverrides;
export declare function overrideLowLevel<Keys extends Array<HighLevelOverrides> = Array<HighLevelOverrides>>(values: Keys, options: BatchOptions, self: Batch): void;
export declare function getNextMultiple(value: number, multiple: number): number;
export declare function getNextMultipleDiff(value: number, multiple: number): number;
export declare const formatDate: (date: Date) => string;
export declare const formatTime: (date: Date) => string;
export declare const isBusinessDay: (day: Date) => boolean;
export declare const computeBusinessDay: (businessDays: number, startingDate?: Date) => Date;
export declare function newLineChar(): string;
export {};
