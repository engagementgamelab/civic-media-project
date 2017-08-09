/**
 * (Site name here) 
 * 
 * PeerReview page Model
 * @module PeerReview
 * @class PeerReview
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PeerReview model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var PeerReview = new keystone.List('PeerReview', 
	{
		label: 'Peer Review Philosophy Pages',
		singular: 'Peer Review Philosophy Page',
		autokey: { path: 'key', from: 'name', unique: true },
	});

/**
 * Model Fields
 * @main PeerReview
 */
PeerReview.add({

	name: { type: String, label: 'Page Title', required: true, initial: true },

	text: { type: Types.Markdown, label: 'Peer Review Philosophy Text'}

});

/**
 * Model Registration
 */
PeerReview.defaultSort = '-createdAt';
PeerReview.defaultColumns = 'name, updatedAt';
PeerReview.register();
