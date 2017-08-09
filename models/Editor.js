/**
 * (Site name here) 
 * 
 * Editor page Model
 * @module Editor
 * @class Editor
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Editor model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Editor = new keystone.List('Editor', 
	{
		label: 'Editors',
		singular: 'Editor',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main Editor
 */
Editor.add({

	name: { type: String, label: 'Name', required: true, initial: true },

	title: { type: Types.Markdown, label: 'Editor Title'},
	image: { type: Types.CloudinaryImage, label: 'Editor Image'},

	twitterURL: { type: Types.Url, label: 'Twitter' },	
	fbURL: { type: Types.Url, label: 'Facebook' },	
	linkedInURL: { type: Types.Url, label: 'LinkedIn' },	
	githubURL: { type: Types.Url, label: 'Github' },
	websiteURL: { type: Types.Url, label: 'Website' },	

	email: { type: String, label: 'Email' },
	phone: { type: String, label: 'Phone' },
	
	info: { type: Types.Markdown, label: 'Editor Info'}

});

/**
 * Model Registration
 */
Editor.defaultSort = '-createdAt';
Editor.defaultColumns = 'name, updatedAt';
Editor.register();
