export default {
	type: 'object',
	name: 'hero_alt',
	title: 'Alt. Hero',
	fields: [
		{
			name: 'heading',
			type: 'string',
			title: 'Heading',
		},
		{
			name: 'tagline',
			type: 'excerptPortableText',
			title: 'Tagline',
		},
		{
			name: 'backgroundImage',
			type: 'image',
			title: 'Background image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'ctas',
			type: 'array',
			title: 'Call to actions',
			of: [
				{
					title: 'Call to action',
					type: 'cta_alt',
				},
			],
		},
	],
	preview: {
		select: {
			title: 'heading',
			media: 'backgroundImage',
		},
		prepare ({title, media}) {
			return {
				title,
				subtitle: 'Hero section',
				media,
			};
		},
	},
};