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
import {CreateChannelBodySchemaTopics} from './CreateChannelBodySchemaTopics';

/**
 * The CreateChannelBodySchema model module.
 * @module model/CreateChannelBodySchema
 * @version 1.0.0
 */
export class CreateChannelBodySchema {
  /**
   * Constructs a new <code>CreateChannelBodySchema</code>.
   * @alias module:model/CreateChannelBodySchema
   * @class
   * @param topics {Array.<module:model/CreateChannelBodySchemaTopics>} 
   */
  constructor(topics) {
    this.topics = topics;
  }

  /**
   * Constructs a <code>CreateChannelBodySchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChannelBodySchema} obj Optional instance to populate.
   * @return {module:model/CreateChannelBodySchema} The populated <code>CreateChannelBodySchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateChannelBodySchema();
      if (data.hasOwnProperty('subscriptionPassword'))
        obj.subscriptionPassword = ApiClient.convertToType(data['subscriptionPassword'], 'String');
      if (data.hasOwnProperty('topics'))
        obj.topics = ApiClient.convertToType(data['topics'], [CreateChannelBodySchemaTopics]);
      if (data.hasOwnProperty('hasPresharedKey'))
        obj.hasPresharedKey = ApiClient.convertToType(data['hasPresharedKey'], 'Boolean');
      if (data.hasOwnProperty('seed'))
        obj.seed = ApiClient.convertToType(data['seed'], 'String');
      if (data.hasOwnProperty('presharedKey'))
        obj.presharedKey = ApiClient.convertToType(data['presharedKey'], 'String');
    }
    return obj;
  }
}

/**
 * If a subscriptionPassword is set, all data is encrypted with the password. It need to be made sure, the subscription password is sent when interacting with the APIs of the channel-service and subscription-service.
 * @member {String} subscriptionPassword
 */
CreateChannelBodySchema.prototype.subscriptionPassword = undefined;

/**
 * @member {Array.<module:model/CreateChannelBodySchemaTopics>} topics
 */
CreateChannelBodySchema.prototype.topics = undefined;

/**
 * If the channel has a preshared key (hasPresharedKey=true) but non is set in the presharedKey property it will be generated by the api.
 * @member {Boolean} hasPresharedKey
 */
CreateChannelBodySchema.prototype.hasPresharedKey = undefined;

/**
 * If left empty the api will generate a seed automatically. Always store your seed otherwise the data can not be reimported.
 * @member {String} seed
 */
CreateChannelBodySchema.prototype.seed = undefined;

/**
 * If the channel has a preshared key (hasPresharedKey=true) but non is defined here the presharedKey will be generated by the api.
 * @member {String} presharedKey
 */
CreateChannelBodySchema.prototype.presharedKey = undefined;

