// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color") 

function makeClass(...properties) {
    return class {
      constructor(...args) {
        properties.forEach((property, index) => {
          this[property] = args[index];
        });
      }
    };
}