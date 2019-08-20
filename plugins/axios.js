/* eslint-disable no-param-reassign */
import Jsona from 'jsona';

const dataFormatter = new Jsona();

export default function({ $axios }) {
  $axios.onRequest(config => {
    config.headers['Content-Type'] = 'application/vnd.api+json';
    config.headers.Accept = 'application/vnd.api+json';
  });

  $axios.onResponse(({ data }) => {
    if (!data) return;
    const normalizedDAta = {};
    Object.assign(normalizedDAta, dataFormatter.deserialize(data));
    delete data.data;
    delete data.jsonapi;

    Object.assign(data, normalizedDAta);
  });
}
