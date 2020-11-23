const Account = require('../model/Account');

class AccountRepository {
    constructor(model) {
        this.model = model;
    }

    create = (object) => {
        return this.model.create(object);
    }

    getAll = () => {
        return this.model.find({});
    }

    get = (accountId) => {
        return this.model.findById({ _id: accountId });
    }

    update = (accountId, object) => {
        return this.model.updateOne({ _id: accountId }, object);
    }

    delete = (accountId) => {
        return this.model.deleteOne({ _id: accountId });
    }
}

module.exports = new AccountRepository(Account);