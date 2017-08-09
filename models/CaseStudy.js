/**
 * (Site name here) 
 * 
 * CaseStudy page Model
 * @module CaseStudy
 * @class CaseStudy
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * CaseStudy model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var CaseStudy = new keystone.List('CaseStudy', 
	{
		label: 'Case Studies',
		singular: 'Case Study',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main CaseStudy
 */
CaseStudy.add({

	name: { type: String, label: 'Name', required: true, initial: true },

	body: { type: Types.Markdown, label: 'Case Study Body Text' },
	references: { type: Types.Markdown, label: 'Case Study References' },
	acknowledgements: { type: Types.Markdown, label: 'Case Study Acknowledgements' },

	comments: { type: Types.Relationship, label: 'Archived Disqus Peer Reviewed Comments', ref: 'Comment'},

	image: { type: Types.CloudinaryImage, label: 'Case Study Image' }, 
	authors: { type: Types.Relationship, ref: 'Contributor', label: 'Authors' }

});

/**
 * Model Registration
 */
CaseStudy.defaultSort = '-createdAt';
CaseStudy.defaultColumns = 'name, updatedAt';
CaseStudy.register();
