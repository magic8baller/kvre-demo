import S from '@sanity/desk-tool/structure-builder'
import {GoHome, GoQuestion, GoSettings} from 'react-icons/lib/go'
import {MdDashboard, MdPeople} from 'react-icons/lib/md'
import PreviewIFrame from './src/components/previewIFrame'
import blog from './src/structure/blog'
import landingPages from './src/structure/landingPages'

const hiddenDocTypes = (listItem) =>
	!['route', 'about', 'navigationMenu', 'post', 'page', 'team', 'person', 'siteSettings', 'author', 'category'].includes(
		listItem.getId()
	)

export default () =>
	S.list()
		.title('Content')
		.items([
			S.documentListItem()
				.schemaType('siteSettings')
				.title('Site settings')
				.icon(GoSettings)
				.child(
					S.document()
						.schemaType('siteSettings')
						.documentId('siteSettings')
						.views([S.view.form(), PreviewIFrame()])
				),
			S.documentListItem()
				.title('Frontpage')
				.schemaType('page')
				.icon(GoHome)
				.child(
					S.document()
						.schemaType('page')
						.documentId('frontpage')
						.views([S.view.form(), PreviewIFrame()])
				),
			S.listItem()
				.title('Pages')
				.icon(MdDashboard)
				.schemaType('page').child(S.documentTypeList('page').title('Pages')
					.child((documentId) =>
						S.document()
							.documentId(documentId)
							.schemaType('page')
							.views([S.view.form(), PreviewIFrame()])
					)),
			S.listItem()
				.title('Routes')
				.schemaType('route')
				.child(S.documentTypeList('route').title('Routes')),
			S.listItem()
				.title("About")
				.icon(GoQuestion)
				.child(
					S.editor()
						.id('about')
						.schemaType("about")
						.documentId("singleton-about")
						.views([S.view.form(), PreviewIFrame()])
				),
			S.listItem()
				.title('Team')
				.icon(MdPeople)
				.child(S.documentTypeList('person').schemaType('person').title('Team')
					.child((documentId) =>
						S.document()
							.documentId(documentId)
							.schemaType('person')
							.views([S.view.form(), PreviewIFrame()])
					)),
			landingPages,
			blog,
			...S.documentTypeListItems().filter(hiddenDocTypes),
		])

			// S.listItem()
			// 	.title('Pages')
			// 	.schemaType('page')
			// 	.icon(MdDashboard)
				// .items([
				// 	S.listItem()
				// 		.title('Teams')
				// 		.child(
				// 			S.editor()
				// 				.id('teamsPage')
				// 				.schemaType('teamsPage')
				// 				.documentId('teamsPage')
				// 		)
				// 		.icon(MdContacts),
				// 	S.listItem()
				// 		.title('About')
				// 		.child(
				// 			S.editor()
				// 				.id('aboutPage')
				// 				.schemaType('page')
				// 				.documentId('about')
				// 		)
				// 		.icon(MdInfoOutline),
				// ])
				// .child(
				// 	S.documentTypeList('page')
				// 		.title('Pages')
				// 		.child(documentId =>
				// 			S.document()
				// 				.documentId(documentId)
				// 				.schemaType('page')
				// 				.views([
				// 					S.view.form(), PreviewIFrame()])
				// )),
					// S.documentListItem()
			// 	.title('Pages')
			// 	.icon(MdDashboard)
			// 	.schemaType('page')
			// 	.child(
			// 		S.documentList('page')
			// 			.title('Pages')
						// .menuItems(S.documentTypeList('page').getMenuItems())

			// 			.filter('_type == "page" && _id != "frontpage"')
			// 			.child((documentId) =>
			// 				S.document()
			// 					.documentId(documentId)
			// 					.schemaType('page')
			// 					.views([S.view.form(), PreviewIFrame()])
			// 			),
			// 		S.listItem()
			// 			.title('Terms And Conditions')
			// 			.child(
			// 				S.editor()
			// 					.id('termsAndConditionsPage')
			// 					.schemaType('page')
			// 					.documentId('termsAndConditions')
			// 			),
			// 		S.listItem()
			// 			.title('Privacy Statement')
			// 			.child(
			// 				S.editor()
			// 					.id('privacyStatement')
			// 					.schemaType('page')
			// 					.documentId('privacyStatement')
			// 			),
