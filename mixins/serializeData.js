import Jsona from 'jsona';

export default {
  methods: {
    serializeData(data) {
      const dataFormatter = new Jsona();
      return dataFormatter.serialize({ stuff: data, includeNames: data.relationshipNames });
    }
  }
};
