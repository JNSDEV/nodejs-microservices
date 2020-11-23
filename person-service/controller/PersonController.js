const PersonRepository = require('../repository/PersonRepository');

function createPerson(req, res) {
    return PersonRepository.create(req.body)
        .then((person) => {
            res.json(person);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function findPerson(req, res) {
    const personId = req.params.personId;

    return PersonRepository.get(personId)
        .then((person) => {
            res.json(person);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function findAllPersons(req, res) {
    return PersonRepository.getAll()
        .then((persons) => {
            res.json(persons);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function updatePerson(req, res) {
    const personId = req.params.personId;

    return PersonRepository.update(personId, req.body)
        .then((person) => {
            res.json(person);
        }).catch((errors) => {
            res.status(500).json({
                errors,
            });
        });
}

function deletePerson(req, res) {
    const personId = req.params.personId;

    PersonRepository.delete(personId);
    return res.json("ok");

}

module.exports = { createPerson, findPerson, findAllPersons, updatePerson, deletePerson };