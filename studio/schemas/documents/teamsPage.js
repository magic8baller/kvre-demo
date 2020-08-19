// import {MdPeople} from 'react-icons/lib/md'

// export default {
// 	name: 'teamsPage',
// 	title: 'Teams',
// 	type: 'document',
// 	icon: MdPeople,
// 	fields: [
// 		{
// 			name: 'title',
// 			title: 'Page title',
// 			type: 'string'
// 		},
// 		,
// 		{
// 			name: 'navMenu',
// 			type: 'reference',
// 			title: 'Navigation menu',
// 			// weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
// 			to: [{type: 'navigationMenu'}],
// 			description: 'Which nav menu should be shown, if any',
// 		},
// 		{
// 			name: 'body',
// 			title: 'Body',
// 			type: 'blockContent'
// 		},
// 		{
// 			name: 'team',
// 			title: 'Displayed Team',
// 			type: 'array',
// 			of: [{type: "reference", to: {type: "person"}}]
// 		}
// 	],
// 	preview: {
// 		select: {
// 			title: 'title',
// 		},
// 		prepare ({title = 'Untitled'}) {
// 			return {
// 				title: title,
// 				// media: MdPeople
// 			}
// 		}
// 	}
// }