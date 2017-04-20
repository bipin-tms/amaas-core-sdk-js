'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _organisation = require('../Organisation/organisation.js');

var _organisation2 = _interopRequireDefault(_organisation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Company
 * @memberof module:Parties.Class
 * @extends module:Parties.Class.Organisation
 */
var Company = function (_Organisation) {
  _inherits(Company, _Organisation);

  /**
   * Construct a new Company instance
   * @param {object} params - Company creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Company
   * @param {string} params.partyId - Party ID of the Company
   * @param {string} params.partyStatus=Active - Status of the Company (e.g. 'Active')
   * @param {string} params.partyClass=Company - Class of the Company
   * @param {string} params.baseCurrency - Base Currency of the Company (e.g. SGD, USD)
   * @param {string} params.description - Description of the Company
   * @param {object} params.addresses - Object of Addresses associated with this Company
   * @param (object) params.emails - Object of Emails associated with this Company
   * @param {object} params.references - Object of References associated with this Company
   * @param {object} params.comments - Object of Comments associated with the Company
   * @param {object} params.links - Object of Links associated with the Company
   * @param {string} params.createdBy - ID of the user that created the Company
   * @param {string} params.updatedBy - ID of the user that updated the Company
   * @param {date} params.createdTime - Time that the Company was created
   * @param {date} params.updatedTime - Time that the Company was updated
   * @param {number} params.version - Version number of the Company
   */
  function Company(_ref) {
    var assetManagerId = _ref.assetManagerId,
        partyId = _ref.partyId,
        _ref$partyStatus = _ref.partyStatus,
        partyStatus = _ref$partyStatus === undefined ? 'Active' : _ref$partyStatus,
        _ref$partyClass = _ref.partyClass,
        partyClass = _ref$partyClass === undefined ? 'Company' : _ref$partyClass,
        baseCurrency = _ref.baseCurrency,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        _ref$addresses = _ref.addresses,
        addresses = _ref$addresses === undefined ? {} : _ref$addresses,
        _ref$emails = _ref.emails,
        emails = _ref$emails === undefined ? {} : _ref$emails,
        _ref$references = _ref.references,
        references = _ref$references === undefined ? {} : _ref$references,
        _ref$comments = _ref.comments,
        comments = _ref$comments === undefined ? {} : _ref$comments,
        _ref$links = _ref.links,
        links = _ref$links === undefined ? {} : _ref$links,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Company);

    return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, {
      assetManagerId: assetManagerId,
      partyId: partyId,
      partyStatus: partyStatus,
      partyClass: partyClass,
      baseCurrency: baseCurrency,
      description: description,
      addresses: addresses,
      emails: emails,
      references: references,
      comments: comments,
      links: links,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  return Company;
}(_organisation2.default);

exports.default = Company;