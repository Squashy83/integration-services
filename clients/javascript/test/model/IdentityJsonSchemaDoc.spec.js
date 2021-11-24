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
    describe('IdentityJsonSchemaDoc', function() {
      beforeEach(function() {
        instance = new IntegrationServicesApiDocumentation.IdentityJsonSchemaDoc();
      });

      it('should create an instance of IdentityJsonSchemaDoc', function() {
        // TODO: update the code to test IdentityJsonSchemaDoc
        expect(instance).to.be.a(IntegrationServicesApiDocumentation.IdentityJsonSchemaDoc);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property verificationMethod (base name: "verificationMethod")', function() {
        // TODO: update the code to test the property verificationMethod
        expect(instance).to.have.property('verificationMethod');
        // expect(instance.verificationMethod).to.be(expectedValueLiteral);
      });

      it('should have the property previousMessageId (base name: "previousMessageId")', function() {
        // TODO: update the code to test the property previousMessageId
        expect(instance).to.have.property('previousMessageId');
        // expect(instance.previousMessageId).to.be(expectedValueLiteral);
      });

      it('should have the property authentication (base name: "authentication")', function() {
        // TODO: update the code to test the property authentication
        expect(instance).to.have.property('authentication');
        // expect(instance.authentication).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

      it('should have the property immutable (base name: "immutable")', function() {
        // TODO: update the code to test the property immutable
        expect(instance).to.have.property('immutable');
        // expect(instance.immutable).to.be(expectedValueLiteral);
      });

      it('should have the property proof (base name: "proof")', function() {
        // TODO: update the code to test the property proof
        expect(instance).to.have.property('proof');
        // expect(instance.proof).to.be(expectedValueLiteral);
      });

    });
  });

}));
