/**
 * (Site name here)
 * Developed by Engagement Lab, 2016
 * ==============
 * Index page view controller.
 *
 * Help: http://keystonejs.com/docs/getting-started/#routesviews-firstview
 *
 * @class Index
 * @author 
 *
 * ==========
 */
var keystone = require('keystone'),
    Book = keystone.list('TheBook'),
    _ = require('underscore');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res),
        locals = res.locals;

    // Init locals
    locals.section = 'book';

    view.on('init', function(next) {

        var queryBook = Book.model.findOne({}, {}, {});
        queryBook.exec(function(err, result) {
            if (err) throw err;

            locals = result;

            next(err);
        });
    });

    // Render the view
    view.render('book');

};
