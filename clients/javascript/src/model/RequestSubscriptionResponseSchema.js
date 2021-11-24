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
 * The RequestSubscriptionResponseSchema model module.
 * @module model/RequestSubscriptionResponseSchema
 * @version 1.0.0
 */
export class RequestSubscriptionResponseSchema {
  /**
   * Constructs a new <code>RequestSubscriptionResponseSchema</code>.
   * @alias module:model/RequestSubscriptionResponseSchema
   * @class
   * @param seed {String} Auto generated seed. Make sure you store the seed since the API will not store it. You can reuse your seed for different channels.
   * @param subscriptionLink {String} 
   */
  constructor(seed, subscriptionLink) {
    this.seed = seed;
    this.subscriptionLink = subscriptionLink;
  }

  /**
   * Constructs a <code>RequestSubscriptionResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestSubscriptionResponseSchema} obj Optional instance to populate.
   * @return {module:model/RequestSubscriptionResponseSchema} The populated <code>RequestSubscriptionResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RequestSubscriptionResponseSchema();
      if (data.hasOwnProperty('seed'))
        obj.seed = ApiClient.convertToType(data['seed'], 'String');
      if (data.hasOwnProperty('subscriptionLink'))
        obj.subscriptionLink = ApiClient.convertToType(data['subscriptionLink'], 'String');
    }
    return obj;
  }
}

/**
 * Auto generated seed. Make sure you store the seed since the API will not store it. You can reuse your seed for different channels.
 * @member {String} seed
 */
RequestSubscriptionResponseSchema.prototype.seed = undefined;

/**
 * @member {String} subscriptionLink
 */
RequestSubscriptionResponseSchema.prototype.subscriptionLink = undefined;

