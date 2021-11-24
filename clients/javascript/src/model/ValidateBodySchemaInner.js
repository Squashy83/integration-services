/*
 * Integration Services API Documentation
 * This is the API documentation for the Integration Services. Have a look at the repository for examples at [Github](https://github.com/iotaledger/integration-services).             For further information on the Audit Trail GW API have a look at [Audit Trail API](https://github.com/iotaledger/integration-services/blob/master/api/usage-audit-trail-GW.md) and head to             [SSI Bridge](https://github.com/iotaledger/integration-services/blob/master/api/usage-ssi-bridge.md) for information about the SSI Bridge.             
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ValidateBodySchemaInner model module.
 * @module model/ValidateBodySchemaInner
 * @version 1.0.0
 */
export class ValidateBodySchemaInner {
  /**
   * Constructs a new <code>ValidateBodySchemaInner</code>.
   * @alias module:model/ValidateBodySchemaInner
   * @class
   * @param link {String} 
   * @param log {Object} 
   */
  constructor(link, log) {
    this.link = link;
    this.log = log;
  }

  /**
   * Constructs a <code>ValidateBodySchemaInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateBodySchemaInner} obj Optional instance to populate.
   * @return {module:model/ValidateBodySchemaInner} The populated <code>ValidateBodySchemaInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ValidateBodySchemaInner();
      if (data.hasOwnProperty('link'))
        obj.link = ApiClient.convertToType(data['link'], 'String');
      if (data.hasOwnProperty('imported'))
        obj.imported = ApiClient.convertToType(data['imported'], 'Date');
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('log'))
        obj.log = ApiClient.convertToType(data['log'], Object);
    }
    return obj;
  }
}

/**
 * @member {String} link
 */
ValidateBodySchemaInner.prototype.link = undefined;

/**
 * Date when the data was imported from the tangle into the cached database.
 * @member {Date} imported
 */
ValidateBodySchemaInner.prototype.imported = undefined;

/**
 * Message id can be used to search for the message in an IOTA explorer.
 * @member {String} messageId
 */
ValidateBodySchemaInner.prototype.messageId = undefined;

/**
 * @member {Object} log
 */
ValidateBodySchemaInner.prototype.log = undefined;

