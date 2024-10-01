// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.


const getQueryParams = (url) => {
    const queryString = url.split("?")[1];
    const params = {};
  
    if (queryString) {
      const paramArray = queryString.split("&");
      for (let i = 0; i < paramArray.length; i++) {
        const param = paramArray[i].split("=");
        params[param[0]] = param[1];
      }
    }
  
    return params;
  };


console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }