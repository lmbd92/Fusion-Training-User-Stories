/**
 * Makes a call to the url
 * https://{CONTENT_BASE}/content/v4/stories/?website_url=${ key.website_url || key }&website=demo`;
 *
 * */

// import { CONTENT } from "../../helpers/sample-content";

const schemaName = "article";

const params = {
  website_url: "text",
  published: "text",
};

const resolve = (key) => {
  // console.log("resolve function param: " + key);
  const requestUri = `/content/v4/stories/?website_url=${
    key.website_url || key
  }&website=pyxis`;

  return requestUri;

  /*return key.hasOwnProperty("published")
    ? `${requestUri}&published=${key.published}`
    : requestUri;*/
};

/*const fetch = (query = {}) => {
  return CONTENT;
};*/

export default {
  resolve,
  // fetch,
  params,
  schemaName,
};
