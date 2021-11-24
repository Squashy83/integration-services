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

  beforeEach(function() {
    instance = new IntegrationServicesApiDocumentation.VerificationApi();
  });

  describe('(package)', function() {
    describe('VerificationApi', function() {
      describe('verificationCheckCredentialPost', function() {
        it('should call verificationCheckCredentialPost successfully', function(done) {
          // TODO: uncomment, update parameter values for verificationCheckCredentialPost call and complete the assertions
          /*
          var opts = {};

          instance.verificationCheckCredentialPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IntegrationServicesApiDocumentation.InlineResponse2003);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('verificationCreateCredentialPost', function() {
        it('should call verificationCreateCredentialPost successfully', function(done) {
          // TODO: uncomment, update parameter values for verificationCreateCredentialPost call and complete the assertions
          /*
          var opts = {};

          instance.verificationCreateCredentialPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IntegrationServicesApiDocumentation.VerifiableCredentialSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('verificationLatestDocumentIdentityIdGet', function() {
        it('should call verificationLatestDocumentIdentityIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for verificationLatestDocumentIdentityIdGet call and complete the assertions
          /*

          instance.verificationLatestDocumentIdentityIdGet(identityId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IntegrationServicesApiDocumentation.LatestIdentityJsonSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('verificationRevokeCredentialPost', function() {
        it('should call verificationRevokeCredentialPost successfully', function(done) {
          // TODO: uncomment, update parameter values for verificationRevokeCredentialPost call
          /*
          var opts = {};

          instance.verificationRevokeCredentialPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('verificationTrustedRootsGet', function() {
        it('should call verificationTrustedRootsGet successfully', function(done) {
          // TODO: uncomment verificationTrustedRootsGet call and complete the assertions
          /*

          instance.verificationTrustedRootsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IntegrationServicesApiDocumentation.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('verificationTrustedRootsPost', function() {
        it('should call verificationTrustedRootsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for verificationTrustedRootsPost call
          /*
          var opts = {};

          instance.verificationTrustedRootsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('verificationTrustedRootsTrustedRootIdDelete', function() {
        it('should call verificationTrustedRootsTrustedRootIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for verificationTrustedRootsTrustedRootIdDelete call
          /*

          instance.verificationTrustedRootsTrustedRootIdDelete(trustedRootId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
