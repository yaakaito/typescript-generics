var array = ["a", "b"];
array.push("aa");

var Hoge = (function () {
    function Hoge() {
        this.a = "a";
    }
    return Hoge;
})();
var Fuga = (function () {
    function Fuga() {
        this.b = "a";
    }
    return Fuga;
})();

var hoges = new Array();
hoges.push("a");

var c = {
    left: "aaa",
    right: 1
};

var A = (function () {
    function A(value) {
        this.value = value;
    }
    A.prototype.get = function () {
        return this.value;
    };
    A.prototype.setPair = function (p) {
    };
    return A;
})();

var a = new A(1);
var b = new A("2");

a.setPair({
    left: "aa",
    right: 1
});

var B = (function () {
    function B() {
    }
    B.prototype.setPair = function (p) {
    };
    return B;
})();

var d = new B();
d.setPair({
    left: "aaaa",
    right: "a"
});

var e = new B();
e.setPair({
    left: "aaaa",
    right: "aaa"
});

var EA;
(function (EA) {
    EA[EA["a"] = 0] = "a";
    EA[EA["b"] = 1] = "b";

    EA[EA["c"] = 2] = "c";
})(EA || (EA = {}));
