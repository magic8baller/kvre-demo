export default {
	title: 'About',
	name: 'about',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'navMenu',
			type: 'reference',
			title: 'Navigation menu',
			// weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
			to: [{type: 'navigationMenu'}],
			description: 'Which nav menu should be shown, if any',
		},

		{
			name: 'subtitle',
			type: 'excerptPortableText'
		},
		{
			title: 'Body',
			name: 'body',
			type: 'bodyPortableText'
		},

		{
			name: 'content',
			type: 'array',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
			of: [
				{type: 'pricing'},
				{type: 'uiComponentRef'},
				{type: 'hero'},
				{type: 'hero_alt'},
				{type: 'mailchimp'},
				{type: 'infoRows'},
				{type: 'ctaColumns'},
				{type: 'textSection'},
				{type: 'ctaPlug'},
				{type: 'imageSection'},
				{type: 'cta_alt'},
			],
		},
	], preview: {
		select: {
			title: 'title'
		},
		prepare ({title}) {
			return {
				title: 'About',
				subtitle: title
			}
		}
	},
}