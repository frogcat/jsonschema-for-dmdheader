const expect = require('chai').expect;
const Validator = require('jsonschema').Validator;
const fs = require('fs');

const schema = JSON.parse(fs.readFileSync("jsonschema-for-dmdheader.json", "UTF-8"));

describe('DMD Header', function() {

  fs.readdirSync("examples").forEach(name => {
    var json = JSON.parse(fs.readFileSync("examples/" + name, "UTF-8"));
    it(name, function() {
      var a = new Validator().validate(json, schema);
      a.errors.forEach(b => {
        console.log(name + " : " + b.stack);
      });
      if (name.indexOf("good") === 0) {
        expect(a.errors.length).to.equal(0);
      } else {
        expect(a.errors.length).not.to.equal(0);
      }
    });
  });
});
