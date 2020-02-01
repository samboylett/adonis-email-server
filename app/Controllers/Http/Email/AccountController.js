'use strict'

const inlineCss = require('inline-css');
const { minify } = require('html-minifier');

class AccountController {
    async welcome({ request, view }) {
        view.share({
            ...request.only(['firstName']),
        });

        const html = view.render('email.account.welcome');

        const inlinined = await inlineCss(html, {
            url: 'http://example.com',
            preserveMediaQueries: true,
        });

        return minify(inlinined, {
            minifyCSS: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
        });
    }
}

module.exports = AccountController
