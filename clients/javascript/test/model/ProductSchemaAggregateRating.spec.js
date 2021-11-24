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
    describe('ProductSchemaAggregateRating', function() {
      beforeEach(function() {
        instance = new IntegrationServicesApiDocumentation.ProductSchemaAggregateRating();
      });

      it('should create an instance of ProductSchemaAggregateRating', function() {
        // TODO: update the code to test ProductSchemaAggregateRating
        expect(instance).to.be.a(IntegrationServicesApiDocumentation.ProductSchemaAggregateRating);
      });

      it('should have the property context (base name: "@context")', function() {
        // TODO: update the code to test the property context
        expect(instance).to.have.property('context');
        // expect(instance.context).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property alternateName (base name: "alternateName")', function() {
        // TODO: update the code to test the property alternateName
        expect(instance).to.have.property('alternateName');
        // expect(instance.alternateName).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property sameAs (base name: "sameAs")', function() {
        // TODO: update the code to test the property sameAs
        expect(instance).to.have.property('sameAs');
        // expect(instance.sameAs).to.be(expectedValueLiteral);
      });

      it('should have the property author (base name: "author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
      });

      it('should have the property bestRating (base name: "bestRating")', function() {
        // TODO: update the code to test the property bestRating
        expect(instance).to.have.property('bestRating');
        // expect(instance.bestRating).to.be(expectedValueLiteral);
      });

      it('should have the property worstRating (base name: "worstRating")', function() {
        // TODO: update the code to test the property worstRating
        expect(instance).to.have.property('worstRating');
        // expect(instance.worstRating).to.be(expectedValueLiteral);
      });

      it('should have the property itemReviewed (base name: "itemReviewed")', function() {
        // TODO: update the code to test the property itemReviewed
        expect(instance).to.have.property('itemReviewed');
        // expect(instance.itemReviewed).to.be(expectedValueLiteral);
      });

      it('should have the property ratingExplanation (base name: "ratingExplanation")', function() {
        // TODO: update the code to test the property ratingExplanation
        expect(instance).to.have.property('ratingExplanation');
        // expect(instance.ratingExplanation).to.be(expectedValueLiteral);
      });

      it('should have the property ratingValue (base name: "ratingValue")', function() {
        // TODO: update the code to test the property ratingValue
        expect(instance).to.have.property('ratingValue');
        // expect(instance.ratingValue).to.be(expectedValueLiteral);
      });

      it('should have the property reviewCount (base name: "reviewCount")', function() {
        // TODO: update the code to test the property reviewCount
        expect(instance).to.have.property('reviewCount');
        // expect(instance.reviewCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
