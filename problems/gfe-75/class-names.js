/* classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library. */
function classNames(...args) {
  // Create an array to push the class values to
  const classes = [];

  args.forEach((arg) => {
    // Ignore falsey values
    if (!arg) {
      return;
    }
    const argType = typeof arg;
    // Handle string and numbers
    if (argType === "string" || argType === "number") {
      classes.push(arg);
      return;
    }
    // Handle arrays with recursion
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }
    // Handle objects
    if (argType === "object") {
      for (const key in arg) {
        // Only process non-inherited keys.
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
      return;
    }
  });
  return classes.join(" ");
}

console.log(classNames("foo", "bar"));
console.log(classNames([5, "center", "left", 10, true]));
console.log(classNames("foo", "bar", 5));
console.log(classNames("foo", { bar: true }));
console.log(classNames({ "foo-bar": true }));
console.log(classNames({ "foo-bar": false }));
console.log(classNames({ foo: true }, { bar: true }));
console.log(classNames({ foo: true, bar: true }));
console.log(classNames({ foo: true, bar: false, qux: true }));
