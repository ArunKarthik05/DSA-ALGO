class PrivateConstructor {
    static #isInternalConstructing = false;
  
    constructor() {
      if (!PrivateConstructor.#isInternalConstructing) {
        throw new TypeError("PrivateConstructor is not constructable");
      }
      PrivateConstructor.#isInternalConstructing = false;
    }
  
    static create() {
      PrivateConstructor.#isInternalConstructing = true;
      const instance = new PrivateConstructor();
      return instance;
    }
  }
  
    //  new PrivateConstructor(); 
  PrivateConstructor.create(); 
  
