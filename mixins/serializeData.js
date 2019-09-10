import Jsona from 'jsona';

export default {
  methods: {
    serializeData(data) {
      const dataFormatter = new Jsona();
      return dataFormatter.serialize({ stuff: data, includeNames: data.relationshipNames });
    },
    serializeDataWithCustomAttribute(data, customAttribute) {
      const jsonData = this.serializeData(data);
      const attributeKey = Object.keys(customAttribute)[0];
      const attributeValue = Object.values(customAttribute)[0];
      jsonData.data.attributes[attributeKey] = attributeValue;
      return jsonData;
    }
  }
};
