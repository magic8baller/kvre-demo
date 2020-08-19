import S from '@sanity/desk-tool/structure-builder'
import {MdMenu} from 'react-icons/lib/md'
import PreviewIFrame from '../../src/components/previewIFrame'

export default S.listItem()
	.title('Page Builder')
	.child(
		S.list()
			.title('Landing Pages')
			.items([
				S.listItem()
					.title('Navigation Menus')
					.icon(MdMenu)
					.schemaType('navigationMenu')
					.child(S.documentTypeList('navigationMenu').title('Navigation Menus')),
				S.listItem()
					.title('Routes')
					.schemaType('route')
					.child(
						S.documentTypeList('route')
							.title('Routes')
							.child((documentId) =>
								S.document()
									.documentId(documentId)
									.schemaType('route')
									.views([S.view.form(), PreviewIFrame()])
							)),
						// S.listItem()
						// 	.title('Teams Page')
						// 	.schemaType('teamsPage')
						// 	.child(
						// 		S.documentTypeList('team')
						// 			.title('Team')
						// 			.child((documentId) =>
						// 				S.document()
						// 					.documentId(documentId)
						// 					.schemaType('team')
						// 					.views([S.view.form(), PreviewIFrame()])

						// 			)),
						S.listItem()
							.title('Pages')
							.schemaType('page')
							.child(
								S.documentList('page')
									.title('Pages')
									.menuItems(S.documentTypeList('page').getMenuItems())
									.filter('_type == "page" && _id != "frontpage"')
									.child((documentId) =>
										S.document()
											.documentId(documentId)
											.schemaType('page')
											.views([S.view.form(), PreviewIFrame()])
									)
							),

			])
	)
