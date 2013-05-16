

interface A { a: string; }
interface B extends A { b: string; }
interface C extends B { c: string; }
interface G<T, U extends B> {
    x: T;
    y: U;
}
var v1: G<A, C>;
var v2: G<{ a: string }, C>;
var v3: G<A, A>;
var v4: G<G<A, B>, C>;
var v5: G<any, any>;
var v6: G<any>;
var v7: G;


