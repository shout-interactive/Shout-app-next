import axios from "axios";
import * as _ from "lodash";
export const apiUrl = process.env.REACT_APP_API_URL;

export const API = async (callObj, dispatch) => {
  const { path, method, data = null, header = false } = callObj;
  //  let headers;

  // if(token){
  //   headers = { "Content-Type": "application/json", "Authorization": `Basic ${token}` };
  // } else {
  //   headers = { "Content-Type": "application/json"};
  // }

  const headers = { "Content-Type": "application/json" };
  let url = `${apiUrl}${path}`;
  console.log(apiUrl);
  try {
    //  const response = await fetch(url, {method,headers,body: data})
    // .then(resp => resp.json())
    // .then((val) => console.log(val))
    // .catch((err) => {
    //   console.log('Error:', err)
    // })
    // })
    const response = await axios({ method, url, data, headers, json: true });

    const result = response && response.data;

    if (header) {
      return response;
    } else {
      return result;
    }
  } catch (error) {
    console.log(error);
    const { data } = error?.response;
    if (!_.isEmpty(data)) {
      return data;
    }
    console.log({ error });
    // throw error;
  }
};
