const Router = require('express');
const AccountController = require("../controller/AccountController");

var router = Router();

router.get('/', AccountController.findAllAccounts);

router.get('/:accountId', AccountController.findAccount);

router.post('/', AccountController.createAccount);

router.put('/:accountId', AccountController.updateAccount);

router.delete('/:accountId', AccountController.deleteAccount);

module.exports = router;