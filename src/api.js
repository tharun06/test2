import data from "./data.json";

const Api = {
  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
};

export default Api;
