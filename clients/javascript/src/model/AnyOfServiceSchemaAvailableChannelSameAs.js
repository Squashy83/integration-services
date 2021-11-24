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
 * The AnyOfServiceSchemaAvailableChannelSameAs model module.
 * @module model/AnyOfServiceSchemaAvailableChannelSameAs
 * @version 1.0.0
 */
export class AnyOfServiceSchemaAvailableChannelSameAs {
  /**
   * Constructs a new <code>AnyOfServiceSchemaAvailableChannelSameAs</code>.
   * @alias module:model/AnyOfServiceSchemaAvailableChannelSameAs
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnyOfServiceSchemaAvailableChannelSameAs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnyOfServiceSchemaAvailableChannelSameAs} obj Optional instance to populate.
   * @return {module:model/AnyOfServiceSchemaAvailableChannelSameAs} The populated <code>AnyOfServiceSchemaAvailableChannelSameAs</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnyOfServiceSchemaAvailableChannelSameAs();
    }
    return obj;
  }
}
