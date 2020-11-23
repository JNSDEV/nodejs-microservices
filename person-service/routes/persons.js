const Router = require('express');
const PersonController = require("../controller/PersonController");

var router = Router();

router.get('/', PersonController.findAllPersons);

router.get('/:personId', PersonController.findPerson);

router.post('/', PersonController.createPerson);

router.put('/:personId', PersonController.updatePerson);

router.delete('/:personId', PersonController.deletePerson);

module.exports = router;