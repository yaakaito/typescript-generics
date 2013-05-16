var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NumberIdentify = (function () {
    function NumberIdentify(value) {
        this.value = value;
    }
    return NumberIdentify;
})();

var StringIdentify = (function () {
    function StringIdentify(value) {
        this.value = value;
    }
    return StringIdentify;
})();

var numberIdentify = new NumberIdentify(1);
var stringIdentify = new StringIdentify("A");

var Entity = (function () {
    function Entity(identify) {
        this.identify = identify;
    }
    return Entity;
})();

var Person = (function (_super) {
    __extends(Person, _super);
    function Person(identify) {
        _super.call(this, identify);
        this.identify = identify;
    }
    return Person;
})(Entity);

var e1 = new Entity(numberIdentify);
var e2 = new Entity(stringIdentify);

var Repository = (function () {
    function Repository() {
        this.value = null;
    }
    Repository.prototype.store = function (entity) {
        this.value = entity;
    };

    Repository.prototype.findByIdentify = function (identify) {
        return this.value;
    };
    return Repository;
})();

var repository = new Repository();
repository.store(e1);

var personA = new Person(numberIdentify);
var personRepository = new Repository();
repository.store(personA);
repository.findByIdentify(numberIdentify);

var PersonRepository = (function (_super) {
    __extends(PersonRepository, _super);
    function PersonRepository() {
        _super.apply(this, arguments);
    }
    return PersonRepository;
})(Repository);

var personRepository2 = new PersonRepository();
repository.store(personA);
repository.store(e2);
