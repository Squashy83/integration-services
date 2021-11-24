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
 * The ProductSchemaManufacturer model module.
 * @module model/ProductSchemaManufacturer
 * @version 1.0.0
 */
export class ProductSchemaManufacturer {
  /**
   * Constructs a new <code>ProductSchemaManufacturer</code>.
   * Organization schema, see the specification at: https://schema.org/Organization
   * @alias module:model/ProductSchemaManufacturer
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProductSchemaManufacturer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSchemaManufacturer} obj Optional instance to populate.
   * @return {module:model/ProductSchemaManufacturer} The populated <code>ProductSchemaManufacturer</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductSchemaManufacturer();
      if (data.hasOwnProperty('@context'))
        obj.context = ApiClient.convertToType(data['@context'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('alternateName'))
        obj.alternateName = ApiClient.convertToType(data['alternateName'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], Object);
      if (data.hasOwnProperty('sameAs'))
        obj.sameAs = ApiClient.convertToType(data['sameAs'], Object);
      if (data.hasOwnProperty('brand'))
        obj.brand = ApiClient.convertToType(data['brand'], Object);
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], Object);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('faxNumber'))
        obj.faxNumber = ApiClient.convertToType(data['faxNumber'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], 'String');
      if (data.hasOwnProperty('slogan'))
        obj.slogan = ApiClient.convertToType(data['slogan'], 'String');
      if (data.hasOwnProperty('taxID'))
        obj.taxID = ApiClient.convertToType(data['taxID'], 'String');
      if (data.hasOwnProperty('telephone'))
        obj.telephone = ApiClient.convertToType(data['telephone'], 'String');
      if (data.hasOwnProperty('vatID'))
        obj.vatID = ApiClient.convertToType(data['vatID'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} context
 */
ProductSchemaManufacturer.prototype.context = undefined;

/**
 * @member {String} type
 */
ProductSchemaManufacturer.prototype.type = undefined;

/**
 * @member {String} alternateName
 */
ProductSchemaManufacturer.prototype.alternateName = undefined;

/**
 * @member {String} name
 */
ProductSchemaManufacturer.prototype.name = undefined;

/**
 * @member {String} description
 */
ProductSchemaManufacturer.prototype.description = undefined;

/**
 * @member {String} url
 */
ProductSchemaManufacturer.prototype.url = undefined;

/**
 * @member {Object} image
 */
ProductSchemaManufacturer.prototype.image = undefined;

/**
 * @member {Object} sameAs
 */
ProductSchemaManufacturer.prototype.sameAs = undefined;

/**
 * @member {Object} brand
 */
ProductSchemaManufacturer.prototype.brand = undefined;

/**
 * @member {Object} address
 */
ProductSchemaManufacturer.prototype.address = undefined;

/**
 * @member {String} email
 */
ProductSchemaManufacturer.prototype.email = undefined;

/**
 * @member {String} faxNumber
 */
ProductSchemaManufacturer.prototype.faxNumber = undefined;

/**
 * @member {String} location
 */
ProductSchemaManufacturer.prototype.location = undefined;

/**
 * @member {String} slogan
 */
ProductSchemaManufacturer.prototype.slogan = undefined;

/**
 * @member {String} taxID
 */
ProductSchemaManufacturer.prototype.taxID = undefined;

/**
 * @member {String} telephone
 */
ProductSchemaManufacturer.prototype.telephone = undefined;

/**
 * @member {String} vatID
 */
ProductSchemaManufacturer.prototype.vatID = undefined;

