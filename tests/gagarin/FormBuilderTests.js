
describe('clinical:form-builder', function () {
  var server = meteor();
  var client = browser(server);

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

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
});
