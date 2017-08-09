/**
 * (Site name here) 
 * 
 * Comment page Model
 * @module Comment
 * @class Comment
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Comment model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Comment = new keystone.List('Comment', 
	{
		label: 'Case Study Comments',
		singular: 'Case Study Comment',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main Comment
 */
Comment.add({

	name: { type: String, label: 'Commenter Name', required: true, initial: true },
	body: { type: Types.Markdown, label: 'Comment Text' }
});

/**
 * Model Registration
 */
Comment.defaultSort = '-createdAt';
Comment.defaultColumns = 'name, updatedAt';
Comment.register();
