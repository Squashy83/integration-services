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
    describe('RequestSubscriptionBodySchema', function() {
      beforeEach(function() {
        instance = new IntegrationServicesApiDocumentation.RequestSubscriptionBodySchema();
      });

      it('should create an instance of RequestSubscriptionBodySchema', function() {
        // TODO: update the code to test RequestSubscriptionBodySchema
        expect(instance).to.be.a(IntegrationServicesApiDocumentation.RequestSubscriptionBodySchema);
      });

      it('should have the property seed (base name: "seed")', function() {
        // TODO: update the code to test the property seed
        expect(instance).to.have.property('seed');
        // expect(instance.seed).to.be(expectedValueLiteral);
      });

      it('should have the property accessRights (base name: "accessRights")', function() {
        // TODO: update the code to test the property accessRights
        expect(instance).to.have.property('accessRights');
        // expect(instance.accessRights).to.be(expectedValueLiteral);
      });

      it('should have the property presharedKey (base name: "presharedKey")', function() {
        // TODO: update the code to test the property presharedKey
        expect(instance).to.have.property('presharedKey');
        // expect(instance.presharedKey).to.be(expectedValueLiteral);
      });

    });
  });

}));
