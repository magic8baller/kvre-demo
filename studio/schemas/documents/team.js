import {MdPersonAdd} from 'react-icons/lib/md'

export default {
	name: 'team',
	title: 'Team',
	type: 'document',
	icon: MdPersonAdd,
	fields: [
		{
			name: 'order',
			title: 'order',
			type: 'number'
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule =>
				Rule.required()
		},
		{
			name: 'role',
			title: 'Role',
			type: 'string',
			validation: Rule =>
				Rule.required()
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: Rule =>
				Rule.required()
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
			validation: Rule =>
				Rule.required()
		},
		{
			name: 'nmls',
			title: 'NMLS#',
			type: 'number',
			validation: Rule =>
				Rule.required()
		},
		{
			name: 'mainImage',
			type: 'mainImage',
			title: 'Main image',
			validation: Rule =>
				Rule.required()
		},
		{
			name: 'bio',
			type: 'excerptPortableText',
			title: 'Bio',
			validation: Rule =>
				Rule.required()
		}
	],
	orderings: [
		{
			name: 'sorted',
			title: 'By order number',
			by: [
				{
					field: 'order',
					direction: 'asc'
				}
			]
		}
	],
	preview: {
		select: {
			title: 'name',
			role: 'role',
			media: 'mainImage'
		},
		prepare ({title = 'No title', role = 'No Role', media}) {
			return {
				title,
				subtitle: role,
				media
			}
		}
	}
}