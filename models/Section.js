/**
 * (Site name here) 
 * 
 * Section page Model
 * @module Section
 * @class Section
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Section model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Section = new keystone.List('Section', 
	{
		label: 'Case Study Sections',
		singular: 'Case Study Section',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main Section
 */
Section.add({

	name: { type: String, label: 'Section Page Title', required: true, initial: true },
	text: { type: Types.Markdown, label: 'Section Text'}

});

/**
 * Model Registration
 */
Section.defaultSort = '-createdAt';
Section.defaultColumns = 'name, updatedAt';
Section.register();
