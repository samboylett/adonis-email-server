'use strict'

class AccountController {
    async welcome({ request, view }) {
        view.share({
            ...request.only(['firstName']),
        });

        return view.render('email.account.welcome');
    }
}

module.exports = AccountController
