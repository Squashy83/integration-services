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
 * The AnyOfDeviceSchemaRssi model module.
 * @module model/AnyOfDeviceSchemaRssi
 * @version 1.0.0
 */
export class AnyOfDeviceSchemaRssi {
  /**
   * Constructs a new <code>AnyOfDeviceSchemaRssi</code>.
   * @alias module:model/AnyOfDeviceSchemaRssi
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnyOfDeviceSchemaRssi</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnyOfDeviceSchemaRssi} obj Optional instance to populate.
   * @return {module:model/AnyOfDeviceSchemaRssi} The populated <code>AnyOfDeviceSchemaRssi</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnyOfDeviceSchemaRssi();
    }
    return obj;
  }
}
