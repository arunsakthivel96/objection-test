Java.performNow(function() {
  var Pinner = Java.use("n/l$a"); // this is what the class is called for the obfuscated app i'm working on
  Pinner.a.overload(
    "java.lang.String",
    "[Ljava.lang.String;"
  ).implementation = function(a, b) {
    console.log("Disabling pin for " + a);
    return this;
  };
});
