import { observable, computed } from 'mobx';

class Store {
  @observable value = 'Bartek';
  @computed get decorated() {
    return `${this.value} is awesome!`;
  }
}

export default Store;