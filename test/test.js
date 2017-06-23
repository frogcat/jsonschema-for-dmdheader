const expect = require('chai').expect;
const Validator = require('jsonschema').Validator;
const fs = require('fs');

const schema = JSON.parse(fs.readFileSync("jsonschema-for-dmdheader.json", "UTF-8"));

describe('DMD Header', function() {

  var obj = {
    "standard": {
      "@context": "http://imi.go.jp/ns/dmd/context.jsonld",
      "@id": "http://example.org/",
      "@type": "Asset",
      "type": "DataModelDescription",
      "issued": "2017-06-22",
      "modified": "2017-06-22",
      "title": "title",
      "description": "description",
      "publisher": ["http://example.org/", {
        "@id": "http://example.org/",
        "name": "IPA"
      }],
      "license": "http://example.org/",
      "prev": "http://example.org/",
      "last": "http://example.org/",
      "versionInfo": "1.0.0",
      "charCollection": [1, 2, 3],
      "distribution": [{
        "@id": "header.json",
        "@type": "AssetDistribution",
        "type": "Header",
        "description": "description",
        "license": "http://example.org/"
      }]
    },
    "minimum": {
      "@context": "http://imi.go.jp/ns/dmd/context.jsonld",
      "@id": "http://example.org/",
      "@type": "Asset",
      "type": "DataModelDescription",
      "issued": "2017-06-22",
      "title": "title",
      "description": "description",
      "publisher": "http://example.org/",
      "license": "http://example.org/",
      "versionInfo": "1.0.0",
      "distribution": [{
        "@id": "header.json",
        "@type": "AssetDistribution",
        "type": "Header"
      }, {
        "@id": "datamodel.ivd",
        "@type": "AssetDistribution",
        "type": "DataModel"
      }, {
        "@id": "mapping.json",
        "@type": "AssetDistribution",
        "type": "Mapping"
      }]
    },
    "license": {
      "@context": "http://imi.go.jp/ns/dmd/context.jsonld",
      "@id": "http://example.org/",
      "@type": "Asset",
      "type": "DataModelDescription",
      "issued": "2017-06-22",
      "title": "title",
      "description": "description",
      "publisher": "http://example.org/",
      "license": ["http://creativecommons.org/licenses/by/4.0/", {
        "name": "政府標準利用規約（第 2.0 版）",
        "page": "http://www.kantei.go.jp/jp/singi/it2/densi/kettei/gl2_betten_1.pdf"
      }],
      "versionInfo": "1.0.0",
      "distribution": [{
        "@id": "header.json",
        "@type": "AssetDistribution",
        "type": "Header"
      }, {
        "@id": "datamodel.ivd",
        "@type": "AssetDistribution",
        "type": "DataModel"
      }, {
        "@id": "mapping.json",
        "@type": "AssetDistribution",
        "type": "Mapping"
      }]
    },
    "language": {
      "@context": "http://imi.go.jp/ns/dmd/context.jsonld",
      "@id": "http://example.org/",
      "@type": "Asset",
      "type": "DataModelDescription",
      "issued": "2017-06-22",
      "title": [
        "デフォルトタイトル", {
          "@value": "言語指定なし"
        }, {
          "@value": "日本語タイトル",
          "@language": "ja"
        }, {
          "@value": "English title",
          "@language": "en"
        }, {
          "@value": "カタカナタイトル",
          "@language": "ja-hrkn"
        }
      ],
      "description": [
        "デフォルト説明", {
          "@value": "言語指定なし説明"
        }, {
          "@value": "日本語説明",
          "@language": "ja"
        }, {
          "@value": "English description",
          "@language": "en"
        }, {
          "@value": "カタカナセツメイ",
          "@language": "ja-hrkn"
        }
      ],
      "publisher": "http://example.org/",
      "license": "http://creativecommons.org/licenses/by/4.0/",
      "versionInfo": "1.0.0",
      "distribution": [{
        "@id": "header.json",
        "@type": "AssetDistribution",
        "type": "Header"
      }, {
        "@id": "datamodel.ivd",
        "@type": "AssetDistribution",
        "type": "DataModel"
      }, {
        "@id": "mapping.json",
        "@type": "AssetDistribution",
        "type": "Mapping"
      }]
    }


  };

  Object.keys(obj).forEach(key => {
    it(key, function() {
      var a = new Validator().validate(obj[key], schema);
      if (a.errors.length > 0) console.log(a.errors);
      expect(a.errors.length).to.equal(0);
    });
  });

});
