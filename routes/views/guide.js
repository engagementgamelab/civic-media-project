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
    Guide = keystone.list('LearningGuide'),
    _ = require('underscore');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res),
        locals = res.locals;

    // Init locals
    locals.section = 'guide';

    view.on('init', function(next) {

        var queryGuide = Guide.model.findOne({}, {}, {});
        queryGuide.exec(function(err, result) {
            if (err) throw err;

            locals.guide = result;

            next(err);
        });
    });

    // Render the view
    view.render('guide');

};
