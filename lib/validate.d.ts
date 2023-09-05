import { NumericalString } from './Types.js';
export declare function validateRequiredFields(object: Record<string, unknown>): boolean;
export declare function validateLengths(object: Record<string, unknown>): boolean;
export declare function getNextMultipleDiff(value: number, multiple: number): number;
export declare function validateDataTypes(object: Record<string, unknown>): boolean;
export declare function validateACHAddendaTypeCode(addendaTypeCode: NumericalString): boolean;
export declare function validateACHCode(transactionCode: NumericalString): boolean;
export declare function validateACHAddendaCode(transactionCode: NumericalString): boolean;
export declare function validateACHServiceClassCode(serviceClassCode: NumericalString): boolean;
export declare function validateRoutingNumber(routing: NumericalString | number): boolean;
