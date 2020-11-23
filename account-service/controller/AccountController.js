const AccountRepository = require('../repository/AccountRepository');

function createAccount(req, res) {
    return AccountRepository.create(req.body)
        .then((account) => {
            res.json(account);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function findAccount(req, res) {
    const accountId = req.params.accountId;

    return AccountRepository.get(accountId)
        .then((account) => {
            res.json(account);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function findAllAccounts(req, res) {
    return AccountRepository.getAll()
        .then((accounts) => {
            res.json(accounts);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function updateAccount(req, res) {
    const accountId = req.params.accountId;

    return AccountRepository.update(accountId, req.body)
        .then((account) => {
            res.json(account);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function deleteAccount(req, res) {
    const accountId = req.params.accountId;

    AccountRepository.delete(accountId);
    return res.json("ok");

}

module.exports = { createAccount, findAccount, findAllAccounts, updateAccount, deleteAccount };