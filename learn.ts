
var array: Array<string> = ["a", "b"]
array.push("aa")
// array.push(1)

class Hoge {
    public a: string = "a"
}
class Fuga {
    public b: string = "a"
}

var hoges: Array<Hoge> = new Array<Hoge>()
hoges.push("a")

interface Pair<T1, T2> {
    left: T1;
    right: T2;
} 

var c: Pair<string, number> = {
    left: "aaa",
    right: 1
}

class A<T> {
    constructor(public value: T) { }
    get(): T {
        return this.value;
    }
    setPair(p: Pair<string, number>) {

    }
}

var a = new A<number>(1)
var b = new A<string>("2")

a.setPair({
    left: "aa",
    right: 1
});

class B<V extends Hoge> {
    setPair(p: Pair<string, V>) {

    }
}

var d = new B<string>()
d.setPair({
    left: "aaaa",
    right: "a"
})

var e = new B<Fuga>()
e.setPair({
    left: "aaaa",
    right: "aaa"
})


enum EA {
    a,
    b,
    c
}