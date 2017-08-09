/**
 * (Site name here) 
 * 
 * TheBook page Model
 * @module TheBook
 * @class TheBook
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * TheBook model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var TheBook = new keystone.List('TheBook', 
	{
		label: 'The Book Pages',
		singular: 'The Book Page',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main TheBook
 */
TheBook.add({

	name: { type: String, label: 'Page Title', required: true, initial: true },

	text: { type: Types.Markdown, label: 'The Book Page Text'}

});

/**
 * Model Registration
 */
TheBook.defaultSort = '-createdAt';
TheBook.defaultColumns = 'name, updatedAt';
TheBook.register();
