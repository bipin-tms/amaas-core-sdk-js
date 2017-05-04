'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fund = require('../Fund/fund');

var _fund2 = _interopRequireDefault(_fund);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an ETF
 * @memberof module:assets
 * @extends module:assets.Fund
 */
var ExchangeTradedFund = function (_Fund) {
  _inherits(ExchangeTradedFund, _Fund);

  /**
   * Construct a new ETF instance
   * @param {object} params - ExchangeTradedFund creation options:
   * @param {number} params.assetManagerId - ID of ETF's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the ETF __(required)__
   * @param {string} [params.assetClass] - Auto-set to `Fund` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` for Fund and its subclasses
   * @param {string} [params.assetIssuerId] - ID of the ETF's issuer
   * @param {string} [params.assetStatus=Active] - Status of the ETF
   * @param {string} [params.countryId] - ID of ETF's country
   * @param {string} [params.venueId] - ID of ETF's venue if applicable
   * @param {string} [params.currency] - ETF currency (e.g. USD, SGD)
   * @param {string} [params.creationDate=0001-01-01] - ETF's creation date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the ETF
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} [params.fundType=ETF] - Auto-set to `ETF` __(read-only)__
   * @param {number} [params.nav] - ETF's Net Asset Value. Stored as a Decimal instance
   * @param {number} [params.expenseRatio] - ETF's expense ratio. Stored as a Decimal instance
   * @param {number} [params.netAssets] - ETF's net assets. Stored as a Decimal instance
   * @param {object} [params.comments] - Object of Comments attached to the ETF
   * @param {object} [params.links] - Object of array of Links attached to the ETF
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the ETF. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the ETF
   * @param {string} [params.updatedBy] - ID of the user that updated the ETF
   * @param {date} [params.createdTime] - Time that the ETF was created
   * @param {date} [params.updatedTime] - Time that the ETF was updated
   * @param {number} [params.version] - Version number
  */
  function ExchangeTradedFund(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        expiryDate = _ref.expiryDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        creationDate = _ref.creationDate,
        nav = _ref.nav,
        expenseRatio = _ref.expenseRatio,
        netAssets = _ref.netAssets,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, ExchangeTradedFund);

    return _possibleConstructorReturn(this, (ExchangeTradedFund.__proto__ || Object.getPrototypeOf(ExchangeTradedFund)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      expiryDate: expiryDate,
      description: description,
      clientId: clientId,
      fundType: 'ETF',
      creationDate: creationDate,
      nav: nav,
      expenseRatio: expenseRatio,
      netAssets: netAssets,
      comments: comments,
      links: links,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  return ExchangeTradedFund;
}(_fund2.default);

exports.default = ExchangeTradedFund;