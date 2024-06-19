/** helper functions for es5 when the the transpiled code doesn't work correctly */

function b0(b) {
  return parseInt(b, 2);
}
var B0 = b0;
function o0(o) {
  return parseInt(o, 8);
}
var O0 = o0;
function x0(x) {
  return parseInt(x, 16);
}
var X0 = x0;

/** Babel is not transpiling binary, octal, or hex correctly */
/*es6*/
let binaryNumber6 = 0b11;
let octalNumber6 = 0o77;
let hexNumber6 = 0xf1;

/*es5*/
var binaryNumber5 = b0(11);
var octalNumber5 = o0(77);
var hexNumber5 = x0("F1");

console.log(octalNumber5);

/** Optional Chaining example */
var obj = undefined;
/*es6:*/ let a6 = obj?.prop;
/*es5:*/ var a5 = (obj || {}).prop;

/** Block scope loop examples
 *es5 only scopes varables to functions. We can use IIFE to create a block scope loop
 */

/*es6 block scoped loop index*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*es5 block scoped loop index*/
(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();

/*es6 block scoped loop index and inner block*/
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  const x = arr[i];
  console.log(x);
}

/*es5 block scoped loop index and inner block*/
(function () {
  var arr = ["a", "b", "c"];
  for (var i = 0; i < arr.length; i++) {
    (function () {
      var x = arr[i];
      console.log(x);
    })();
  }
})();

/** Operators: for additional compatability see my custom operator library
 *https://github.com/Patrick-ring-motive/operators
 */

/** These functions serve as fill-ins for arrow functions */

function Þ(x, y) {
  return eval(
    (
      "var lambda = function Þ" +
      new Date().getTime() +
      "(" +
      x +
      "){return " +
      y +
      "};lambda;"
    )
      .replace(/ì/g, "'")
      .replace(/æ/g, "argumemts"),
  );
}

function þ(x, y, z) {
  return eval(
    (
      "var lambda = function þ" +
      new Date().getTime() +
      "(" +
      x +
      "){" +
      y +
      ";return " +
      z +
      "};lambda;"
    )
      .replace(/ì/g, "'")
      .replace(/æ/g, "argumemts"),
  );
}

/*es6 arrow functions*/
let mult6 = (x, y) => x * y;
let add6 = (x, y) => {
  let z = x + y;
  return z + " added";
};

/*es5 arrow functions*/
var mult5 = Þ("x,y", "x*y");
var add5 = þ("x,y", "var z = x+y", "z+ì addedì");

/** helper function for quick number coercion */

function t(x) {
  return 1 * x;
}

/*es6 number coercion*/

let num6 = +"6";

/*es5 number coercion*/

var num5 = t("5");

/** helper function for quick string coercion and templating */

function $() {
  return [].join.call(arguments, "");
}

/*es6 string coercion*/

let str6 = `This ${6} is a string`;

/*es5 number coercion*/

var str5 = $("This ", 5, " is a string");

/* These functions are specifically for running nashorn inside of Scala. Scala lists are coerced into 'List(a,b)' so this conveniently transforms them into js arrays.*/

function Seq() {
  return [].map.call(arguments, function (x) {
    return x;
  });
}
var Vector = Seq;
var List = Seq;
var ArrayList = Seq;
var ArraySeq = Seq;



function Set(x){
    var Sit = {};
    var Sat = [];
    Object.defineProperty(Sat, "size", {
      get() {
        return this.length;
      },
      set(s) {
        this.length=s;
      }
    });
    for(var i=0;i<x.length;i++){Sit[x[i]]=x[i];}
    for(var v in Sit){Sat.push(Sit[v]);}
    return Sat;
}
Object.defineProperty(Sat, "size", {
  get() {
    return this.length;
  },
  set(s) {
    this.length=s;
  }
});