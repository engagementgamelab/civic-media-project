/**
 * (Site name here) 
 * 
 * Contributor page Model
 * @module Contributor
 * @class Contributor
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contributor model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Contributor = new keystone.List('Contributor', 
	{
		label: 'Contributors',
		singular: 'Contributor',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main Contributor
 */
Contributor.add({

	name: { type: String, label: 'Name', required: true, initial: true },

	title: { type: Types.Markdown, label: 'Contributor Title'},
	image: { type: Types.CloudinaryImage, label: 'Contributor Image'}, 
	caseStudy: { 
		type: Types.Relationship, 
		lable: 'Case Study', 
		ref: 'CaseStudy'
	}, 
	info: { type: Types.Markdown, label: 'Contributor Info'}

});

/**
 * Model Registration
 */
Contributor.defaultSort = '-createdAt';
Contributor.defaultColumns = 'name, updatedAt';
Contributor.register();
