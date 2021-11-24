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
    instance = new IntegrationServicesApiDocumentation.ChannelsApi();
  });

  describe('(package)', function() {
    describe('ChannelsApi', function() {
      describe('channelsCreatePost', function() {
        it('should call channelsCreatePost successfully', function(done) {
          // TODO: uncomment, update parameter values for channelsCreatePost call and complete the assertions
          /*
          var opts = {};

          instance.channelsCreatePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IntegrationServicesApiDocumentation.CreateChannelResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('channelsHistoryChannelAddressGet', function() {
        it('should call channelsHistoryChannelAddressGet successfully', function(done) {
          // TODO: uncomment, update parameter values for channelsHistoryChannelAddressGet call
          /*

          instance.channelsHistoryChannelAddressGet(channelAddress, presharedKey, function(error, data, response) {
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
      describe('channelsLogsChannelAddressGet', function() {
        it('should call channelsLogsChannelAddressGet successfully', function(done) {
          // TODO: uncomment, update parameter values for channelsLogsChannelAddressGet call and complete the assertions
          /*
          var opts = {};

          instance.channelsLogsChannelAddressGet(channelAddress, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(IntegrationServicesApiDocumentation.ChannelDataSchema);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('channelsLogsChannelAddressPost', function() {
        it('should call channelsLogsChannelAddressPost successfully', function(done) {
          // TODO: uncomment, update parameter values for channelsLogsChannelAddressPost call and complete the assertions
          /*
          var opts = {};

          instance.channelsLogsChannelAddressPost(channelAddress, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IntegrationServicesApiDocumentation.ChannelDataSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('channelsReImportChannelAddressPost', function() {
        it('should call channelsReImportChannelAddressPost successfully', function(done) {
          // TODO: uncomment, update parameter values for channelsReImportChannelAddressPost call
          /*
          var opts = {};

          instance.channelsReImportChannelAddressPost(channelAddress, opts, function(error, data, response) {
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
      describe('channelsValidateChannelAddressPost', function() {
        it('should call channelsValidateChannelAddressPost successfully', function(done) {
          // TODO: uncomment, update parameter values for channelsValidateChannelAddressPost call and complete the assertions
          /*
          var opts = {};

          instance.channelsValidateChannelAddressPost(channelAddress, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(IntegrationServicesApiDocumentation.ValidateResponseSchema);

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
