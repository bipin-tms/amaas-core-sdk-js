import Company from '../Company/company'

/**
 * Class representing a Broker
 * @memberof module:Parties
 * @extends module:Parties.Company
 */
class Broker extends Company {
  /**
   * Construct a new Broker instance
   * @param {object} params - Broker creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Broker
   * @param {string} params.partyId - Party ID of the Broker
   * @param {string} params.partyStatus=Active - Status of the Broker (e.g. 'Active')
   * @param {string} params.baseCurrency - Base Currency of the Broker (e.g. SGD, USD)
   * @param {string} params.description - Description of the Broker
   * @param {object} params.addresses - Object of Addresses associated with this Broker
   * @param (object) params.emails - Object of Emails associated with this Broker
   * @param {object} params.references - Object of References associated with this Broker
   * @param {object} params.comments - Object of Comments associated with the Broker
   * @param {object} params.links - Object of Links associated with the Broker
   * @param {string} params.createdBy - ID of the user that created the Broker
   * @param {string} params.updatedBy - ID of the user that updated the Broker
   * @param {date} params.createdTime - Time that the Broker was created
   * @param {date} params.updatedTime - Time that the Broker was updated
   * @param {number} params.version - Version number of the Broker
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    baseCurrency,
    description='',
    addresses={},
    emails={},
    references={},
    comments={},
    links={},
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      partyId,
      partyStatus,
      baseCurrency,
      description,
      addresses,
      emails,
      references,
      comments,
      links,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }
}

export default Broker
