interface Identify<T> {
    value: T;
}

class NumberIdentify implements Identify<number> {

    constructor(public value: number) {

    }
}

class StringIdentify implements Identify<string> {

    constructor(public value: string) { 

    }
}

var numberIdentify = new NumberIdentify(1);
var stringIdentify = new StringIdentify("A");


class Entity<T extends Identify> {

    constructor(public identify: T) {

    }
}

var entity = new Entity<NumberIdentify>(numberIdentify);

class Person extends Entity<NumberIdentify> {

    constructor(public identify: NumberIdentify) {
        super(identify);
    }
}

var e1 = new Entity(numberIdentify);
var e2 = new Entity(stringIdentify);

class Repository<E extends Entity<I>, I extends Identify> {

    public value: E = null;

    store(entity: E) {
        this.value = entity;
    }

    findByIdentify(identify: I): E {
        return this.value;
    }
}

var repository = new Repository<Entity<NumberIdentify>, NumberIdentify>();
repository.store(e1);

var personA = new Person(numberIdentify);
var personRepository = new Repository<Person, NumberIdentify>();
repository.store(personA);
repository.findByIdentify(numberIdentify);

class PersonRepository extends Repository<Person, NumberIdentify> {

}

var personRepository2 = new PersonRepository();
repository.store(personA);
//repository.store(e2);

