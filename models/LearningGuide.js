/**
 * (Site name here) 
 * 
 * LearningGuide page Model
 * @module LearningGuide
 * @class LearningGuide
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * LearningGuide model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var LearningGuide = new keystone.List('LearningGuide', 
	{
		label: 'Learning Guides',
		singular: 'Learning Guide',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main LearningGuide
 */
LearningGuide.add({

	name: { type: String, label: 'Page Title', required: true, initial: true },

	text: { type: Types.Markdown, label: 'Learning Guide Text'}

});

/**
 * Model Registration
 */
LearningGuide.defaultSort = '-createdAt';
LearningGuide.defaultColumns = 'name, updatedAt';
LearningGuide.register();
