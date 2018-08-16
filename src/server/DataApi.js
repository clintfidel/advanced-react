class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((accumulator, currentValue) => {
      accumulator[currentValue.id] = currentValue;
      return accumulator;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
