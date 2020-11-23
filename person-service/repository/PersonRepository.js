const Person = require('../model/Person');

class PersonRepository {
    constructor(model) {
        this.model = model;
    }

    create = (object) => {
        return this.model.create(object);
    }

    getAll = () => {
        return this.model.find({});
    }

    get = (personId) => {
        return this.model.findById({ _id: personId });
    }

    update = (personId, object) => {
        return this.model.updateOne({ _id: personId }, object);
    }

    delete = (personId) => {
        return this.model.deleteOne({ _id: personId });
    }
}

module.exports = new PersonRepository(Person);