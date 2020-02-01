'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const inlineCss = require('inline-css');
const { minify } = require('html-minifier');

class EmailMod {
    /**
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Function} next
    */
    async handle ({ response }, next) {
        await next()

        if (response.lazyBody && response.lazyBody.content) {
            const inlinined = await inlineCss(response.lazyBody.content, {
                url: 'http://example.com',
                preserveMediaQueries: true,
            });

            response.lazyBody.content = minify(inlinined, {
                minifyCSS: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
            });
        }
    }
}

module.exports = EmailMod
