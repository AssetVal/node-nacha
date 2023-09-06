import { CamelToTitleCase, BaseFieldParams, NumericalString } from '../Types.js';

/**************|
 * BATCH TYPES |
 **************/
type BatchHeaderKeys = 'recordTypeCode'|'serviceClassCode'|'companyName'|'companyDiscretionaryData'|'companyIdentification'|'standardEntryClassCode'
  | 'companyEntryDescription'|'companyDescriptiveDate'|'effectiveEntryDate'|'settlementDate'|'originatorStatusCode'|'originatingDFI'|'batchNumber';

// Batch Header Keys with their corresponding value type
export type BatchHeaderKeysWithStringValue = Exclude<BatchHeaderKeys, 'companyDiscretionaryData'|'settlementDate'|'serviceClassCode'|'batchNumber'>;
export type BatchHeaderKeysWithNumericalStringValue = Extract<BatchHeaderKeys, 'serviceClassCode'>;
export type BatchHeaderKeysWithNumberValue = Extract<BatchHeaderKeys, 'batchNumber'>;
export type BatchHeaderKeysWithBlankFields = Extract<BatchHeaderKeys, 'companyDiscretionaryData'|'settlementDate'>;

// Overrides that we will look for in the options object
export type HighLevelHeaderOverrides = 'serviceClassCode'|'companyDiscretionaryData'|'companyIdentification'|'standardEntryClassCode';

type BatchHeaderField<Key extends BatchHeaderKeys = BatchHeaderKeys> = { name: CamelToTitleCase<Key>; } & BaseFieldParams;

// Batch Header Fields
export type BatchHeaderFieldWithString<Key extends BatchHeaderKeys = BatchHeaderKeys> = BatchHeaderField<Key> & { value: string; };
export type BatchHeaderFieldWithNumericalString<Key extends BatchHeaderKeys = BatchHeaderKeys> = BatchHeaderField<Key> & { value: NumericalString; };
export type BatchHeaderFieldWithNumber<Key extends BatchHeaderKeys = BatchHeaderKeys> = BatchHeaderField<Key> & { value: number; };
export type BatchHeaderFieldWithBlank<Key extends BatchHeaderKeys = BatchHeaderKeys> = BatchHeaderFieldWithString<Key> & { blank: boolean };

// Batch Headers
export type BatchHeaders = {
  [key in BatchHeaderKeysWithStringValue]: BatchHeaderFieldWithString<key>;
} & {
  [key in BatchHeaderKeysWithNumericalStringValue]: BatchHeaderFieldWithNumericalString<key>;
} & {
  [key in BatchHeaderKeysWithNumberValue]: BatchHeaderFieldWithNumber<key>;
} & {
  [key in BatchHeaderKeysWithBlankFields]: BatchHeaderFieldWithBlank<key>;
};

type BatchControlKeys = 'recordTypeCode'|'serviceClassCode'|'addendaCount'|'entryHash'|'totalDebit'|'totalCredit'|'companyIdentification'
  |'messageAuthenticationCode'|'reserved'|'originatingDFI' | 'batchNumber';

// Batch Control Keys with their corresponding value type
export type BatchControlKeysWithStringFields = Extract<BatchControlKeys, 'recordTypeCode'|'serviceClassCode'>;
export type BatchControlKeysWithNumberFields = Extract<BatchControlKeys, 'addendaCount'|'entryHash'|'totalDebit'|'totalCredit'|'batchNumber'>;
export type BatchControlKeysWithOptionalValue = Extract<BatchControlKeys, 'companyIdentification'|'originatingDFI'>;
export type BatchControlKeysWithBlankFields = Extract<BatchControlKeys, 'messageAuthenticationCode'|'reserved'>;

// Overrides that we will look for in the options object
export type HighLevelControlOverrides = 'addendaCount'|'entryHash'|'totalDebit'|'totalCredit';

type BatchControlField<Key extends BatchControlKeys = BatchControlKeys> = { name: CamelToTitleCase<Key>, number?: boolean } & BaseFieldParams;

// Batch Control Fields
export type BatchControlFieldWithString<Key extends BatchControlKeys = BatchControlKeys> = BatchControlField<Key> & { value: string; };
export type BatchControlFieldWithNumber<Key extends BatchControlKeys = BatchControlKeys> = BatchControlField<Key> & { value: number; };
export type BatchControlFieldWithNumericalString<Key extends BatchControlKeys = BatchControlKeys> = BatchControlField<Key> & { value: NumericalString; };
export type BatchControlFieldWithOptionalValue<Key extends BatchControlKeys = BatchControlKeys> = BatchControlField<Key> & { value?: number|string };
export type BatchControlFieldWithBlank<Key extends BatchControlKeys = BatchControlKeys> = BatchControlFieldWithString<Key> & { blank: boolean; };

// Batch Controls
export type BatchControls = {
  [key in BatchControlKeysWithStringFields]: BatchControlFieldWithString<key>;
} & {
  [key in BatchControlKeysWithNumberFields]: BatchControlFieldWithNumber<key>;
} & {
  [key in BatchControlKeysWithOptionalValue]: BatchControlFieldWithOptionalValue<key>;
} & {
  [key in BatchControlKeysWithBlankFields]: BatchControlFieldWithBlank<key>;
};

// Batch Options
export type BatchOptions = {
  header: BatchHeaders;
  control: BatchControls;
  originatingDFI: NumericalString;
  companyName?: string;
  companyEntryDescription?: string;
  companyDescriptiveDate?: string;
  effectiveEntryDate?: string | Date;
} & Record<HighLevelHeaderOverrides, string|number|undefined>
  & Record<HighLevelControlOverrides, string|number|undefined>;
