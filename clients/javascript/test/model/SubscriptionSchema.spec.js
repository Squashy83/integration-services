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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IntegrationServicesApiDocumentation);
  }
}(this, function(expect, IntegrationServicesApiDocumentation) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SubscriptionSchema', function() {
      beforeEach(function() {
        instance = new IntegrationServicesApiDocumentation.SubscriptionSchema();
      });

      it('should create an instance of SubscriptionSchema', function() {
        // TODO: update the code to test SubscriptionSchema
        expect(instance).to.be.a(IntegrationServicesApiDocumentation.SubscriptionSchema);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property channelAddress (base name: "channelAddress")', function() {
        // TODO: update the code to test the property channelAddress
        expect(instance).to.have.property('channelAddress');
        // expect(instance.channelAddress).to.be(expectedValueLiteral);
      });

      it('should have the property identityId (base name: "identityId")', function() {
        // TODO: update the code to test the property identityId
        expect(instance).to.have.property('identityId');
        // expect(instance.identityId).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property subscriptionLink (base name: "subscriptionLink")', function() {
        // TODO: update the code to test the property subscriptionLink
        expect(instance).to.have.property('subscriptionLink');
        // expect(instance.subscriptionLink).to.be(expectedValueLiteral);
      });

      it('should have the property isAuthorized (base name: "isAuthorized")', function() {
        // TODO: update the code to test the property isAuthorized
        expect(instance).to.have.property('isAuthorized');
        // expect(instance.isAuthorized).to.be(expectedValueLiteral);
      });

      it('should have the property accessRights (base name: "accessRights")', function() {
        // TODO: update the code to test the property accessRights
        expect(instance).to.have.property('accessRights');
        // expect(instance.accessRights).to.be(expectedValueLiteral);
      });

      it('should have the property publicKey (base name: "publicKey")', function() {
        // TODO: update the code to test the property publicKey
        expect(instance).to.have.property('publicKey');
        // expect(instance.publicKey).to.be(expectedValueLiteral);
      });

      it('should have the property keyloadLink (base name: "keyloadLink")', function() {
        // TODO: update the code to test the property keyloadLink
        expect(instance).to.have.property('keyloadLink');
        // expect(instance.keyloadLink).to.be(expectedValueLiteral);
      });

      it('should have the property sequenceLink (base name: "sequenceLink")', function() {
        // TODO: update the code to test the property sequenceLink
        expect(instance).to.have.property('sequenceLink');
        // expect(instance.sequenceLink).to.be(expectedValueLiteral);
      });

      it('should have the property pskId (base name: "pskId")', function() {
        // TODO: update the code to test the property pskId
        expect(instance).to.have.property('pskId');
        // expect(instance.pskId).to.be(expectedValueLiteral);
      });

    });
  });

}));
