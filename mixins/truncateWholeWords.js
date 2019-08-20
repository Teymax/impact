export default {
  methods: {
    truncateText(text, length) {
      if (this.breakpoint.lgAndUp) return text;

      let textArray = text.split(' ');
      const arrayLength = (textArray.length - (textArray.length - length));
      textArray = textArray.slice(0, arrayLength).join(' ');

      return `${textArray}...`;
    }
  }
};
