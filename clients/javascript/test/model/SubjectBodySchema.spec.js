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
    describe('SubjectBodySchema', function() {
      beforeEach(function() {
        instance = new IntegrationServicesApiDocumentation.SubjectBodySchema();
      });

      it('should create an instance of SubjectBodySchema', function() {
        // TODO: update the code to test SubjectBodySchema
        expect(instance).to.be.a(IntegrationServicesApiDocumentation.SubjectBodySchema);
      });

      it('should have the property identityId (base name: "identityId")', function() {
        // TODO: update the code to test the property identityId
        expect(instance).to.have.property('identityId');
        // expect(instance.identityId).to.be(expectedValueLiteral);
      });

      it('should have the property credentialType (base name: "credentialType")', function() {
        // TODO: update the code to test the property credentialType
        expect(instance).to.have.property('credentialType');
        // expect(instance.credentialType).to.be(expectedValueLiteral);
      });

      it('should have the property claim (base name: "claim")', function() {
        // TODO: update the code to test the property claim
        expect(instance).to.have.property('claim');
        // expect(instance.claim).to.be(expectedValueLiteral);
      });

    });
  });

}));
