/**
 * (Site name here) 
 * 
 * Index page Model
 * @module index
 * @class index
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * index model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Index = new keystone.List('Index', 
	{
		label: 'Home Page',
		singular: 'Home Page',
		nodelete: true
	});

/**
 * Model Fields
 * @main Index
 */
Index.add({
	name: { type: String, default: "Home Page", hidden: true, required: true, initial: true },
	content: { type: Types.Markdown, label: "Home Page Text",  initial: true, required: true }
	
});

/**
 * Model Registration
 */
Index.defaultSort = '-createdAt';
Index.defaultColumns = 'name, updatedAt';
Index.register();
