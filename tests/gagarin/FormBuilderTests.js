
describe('clinical:form-builder', function () {
  var server = meteor();
  var client = browser(server);

  it('FormBuilder should exist on the client', function () {
    return client.execute(function () {
      expect(FormBuilder).to.exist;
    });
  });

  it('FormBuilder should exist on the server', function () {
    return server.execute(function () {
      expect(FormBuilder).to.exist;
    });
  });


  it("FormBuilder can add partial schemas to a Form.", function () {
    return client.execute(function () {

      expect(Items.find().count()).to.equal(0);

      Session.set('selectedFormElementId', "textInputBlock");

      FormBuilder.addQuestion("Why did the chicken cross the road?");

      var item = Items.findOne();

      expect(item.formElementId).to.equal("textInputBlock");
      expect(item.elementType).to.equal("text");
      expect(item.rank).to.equal(0);
      expect(item.schemaTemplate.type).to.equal("String");
      expect(item.schemaTemplate.autoform.afFieldInput.type).to.equal("text");
    });
  });


});
