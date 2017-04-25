import { AMaaSModel } from '../../core'

/**
 * Class representing a Reference
 * @memberof module:core
 * @extends module:core.AMaaSModel
 */
class Reference extends AMaaSModel {
  /**
    * Construct a new Reference instance
    * @param {object} params - Reference creation options
    * @param {string} params.referenceValue - The identifier of this Reference (e.g. transactionId)
    * @param {string} params.createdBy - ID of the user that created this object
    * @param {string} params.updatedBy - ID of the user that updated this object
    * @param {date} params.createdTime - Time that the Reference was created
    * @param {date} params.updatedTime - Time that the Reference was updated
    * @param {number} params.version - Version number of the Reference
  */
  constructor({ referenceValue, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _active: { writable: true, enumerable: false },
      active: {
        get: () => this._active,
        set: (newActive) => {
          switch (newActive) {
            case false:
              this._active = false
              break
            case undefined:
              this._active = true
              break
            default:
              this._active = newActive
          }
        }, enumerable: true
      }
    })
    this.referenceValue = referenceValue
    this.active = active
  }

  // set active(newActive) {
  //   switch (newActive) {
  //     case false:
  //       this._active = false
  //       break
  //     case undefined:
  //       this._active = true
  //       break
  //     default:
  //       this._active = newActive
  //   }
  // }
  //
  // get active() {
  //   return this._active
  // }


  // toJSON() {
  //   return Object.assign({}, {
  //     active: this.active
  //   }, this)
    // return {
    //   reference_value: this.referenceValue,
    //   active: this.active,
    //   created_by: this.createdBy,
    //   updated_by: this.updatedBy,
    //   created_time: this.createdTime,
    //   updated_time: this.updatedTime,
    //   version: this.version
    // }
  // }

}

export default Reference
