import { observable } from "mobx";
class PathArray {
  @observable public pathArray: string[];

  constructor() {
    this.pathArray = [];
  }
}

export default PathArray;
