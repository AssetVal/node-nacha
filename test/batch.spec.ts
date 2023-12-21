import * as chai from 'chai';
import Entry from '../lib/entry/Entry.js';
import Batch from '../lib/batch/Batch.js';
const expect = chai.expect;

describe('Batch', function () {
  describe('Create batch', () => {
    it('should create an batch successfully', async () => {
      const batch = new Batch({
        serviceClassCode: '200',
        companyName: 'Company Name',
        companyDiscretionaryData: 'Discretionary Data',
        companyIdentification: '1234567890',
        companyEntryDescription: 'DESCRIPTION',
        companyDescriptiveDate: '0101',
        effectiveEntryDate: '0101',
        originatingDFI: '081000210',
        standardEntryClassCode: 'PPD',
      });

      const entry = new Entry({
        receivingDFI: '081000210',
        DFIAccount: '12345678901234567',
        amount: '3521',
        transactionCode: '22',
        idNumber: 'RAj##23920rjf31',
        individualName: 'Glen Selle',
        discretionaryData: 'A1'
      });

      batch.addEntry(entry);
      expect(batch).to.not.equal(undefined);
      expect(batch).to.be.an.instanceof(Batch);
      expect(await batch.generateString()).to.equal('5200Company Name    Discretionary Data  1234567890PPDDESCRIPTIO0101  0101010001081000210000000\r\n622081000210123456789012345670000352100RAj##23920rjf31Glen Selle            A10000000000000000\r\n8200000001000810002100000000000000000035210012345678900000000000000000000000000081000210000008');
    });
  });
});
