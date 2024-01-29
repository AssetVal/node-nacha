"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var Entry_js_1 = require("../lib/entry/Entry.js");
var Batch_js_1 = require("../lib/batch/Batch.js");
var expect = chai.expect;
describe('Batch', function () {
    var _this = this;
    describe('Create batch', function () {
        it('should create an batch successfully', function () { return __awaiter(_this, void 0, void 0, function () {
            var batch, entry, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        batch = new Batch_js_1.default({
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
                        entry = new Entry_js_1.default({
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
                        expect(batch).to.be.an.instanceof(Batch_js_1.default);
                        _a = expect;
                        return [4 /*yield*/, batch.generateString()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.equal('5200Company Name    Discretionary Data  1234567890PPDDESCRIPTIO0101  0101010001081000210000000\r\n622081000210123456789012345670000352100RAj##23920rjf31Glen Selle            A10000000000000000\r\n8200000001000810002100000000000000000035210012345678900000000000000000000000000081000210000008');
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
