import FXBase from '../FXBase/fxBase.js'

/**
 * Class representing FX
 * @memberof module:assets
 * @extends module:assets.FXBase
 */
class ForeignExchange extends FXBase {
  /**
   * Construct a new Foreign Exchange instance
   * @param {object} params - ForeignExchange creation options:
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} params.assetClass - Auto-set to `ForeignExchange` __(read-only)__
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Foreign Exchange's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Foreign Exchange
   * @param {string} [params.description] - Description of the Foreign Exchange
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Foreign Exchange
   * @param {object} [params.links] - Object of array of Links attached to the Foreign Exchange
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Foreign Exchange. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Foreign Exchange
   * @param {string} [params.updatedBy] - ID of the user that updated the Foreign Exchange
   * @param {date} [params.createdTime] - Time that the Foreign Exchange was created
   * @param {date} [params.updatedTime] - Time that the Foreign Exchange was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetId,
    assetIssuerId,
    assetStatus='Active',
    description='',
    clientId,
    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetId,
      assetIssuerId,
      assetStatus,
      description,
      clientId,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }
}

export default ForeignExchange
