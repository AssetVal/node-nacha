import { NumericalString } from '../Types.js';
import { EntryAddendaFields } from './entryAddendaTypes.js';

export const AddendaFieldDefaults: Readonly<Partial<EntryAddendaFields>> = {
  recordTypeCode: {
    name: 'Record Type Code',
    width: 1,
    position: 1,
    required: true,
    type: 'numeric',
    value: '7'
  },

  addendaTypeCode: {
    name: 'Addenda Type Code',
    width: 2,
    position: 2,
    required: true,
    type: 'numeric',
    value: '05'
  },

  paymentRelatedInformation: {
    name: 'Payment Related Information',
    width: 80,
    position: 3,
    required: false,
    type: 'alphanumeric',
    value: ''
  },

  addendaSequenceNumber: {
    name: 'Addenda Sequence Number',
    width: 4,
    position: 4,
    required: true,
    type: 'numeric',
    value: 1,
    number: true
  },

  entryDetailSequenceNumber: {
    name: 'Entry Detail Sequence Number',
    width: 7,
    position: 5,
    required: false,
    type: 'numeric',
    blank: true,
    value: '' as NumericalString
  }
};
