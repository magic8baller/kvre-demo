// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'

// document schemas
import * as documents from './documents'
import navMenu from './documents/navMenu'
import author from './documents/author'
import person from './documents/person'
import singletonAbout from './documents/singletonAbout'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import route from './documents/route'

import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import * as objects from './objects'

import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import mailchimp from './objects/mailchimp'
import cta_alt from './objects/cta_alt'
import hero_alt from './objects/hero_alt'
import textSection from './objects/textSection'
import imageSection from './objects/imageSection'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import link from './objects/link'
import variation from './objects/variation'
import openGraph from './objects/openGraph'
import latex from './latex'

const allItems = (items) => Object.values(items).map((item) => {
  return items === plugs ? { ...item, fields: plugDefaultFields.concat(item.fields) } : {...item}
})
const allPlugs = allItems(plugs)
const allDocs = allItems(documents)
const allObjs = allItems(objects)


export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
	// Our custom types
	.concat(allDocs)
	.concat(allObjs)
	// .concat([
		// singletonAbout,
		// siteSettings,
		// route,
		// post,
		// navMenu,
		// page,
		// category,
		// author,
		// person,
		// 	latex,

		// 	mailchimp,
		// 	cta_alt,
		// 	hero_alt,
		// 	textSection,
		// 	imageSection,
		// 	localeString,
    //   variation,
    //   openGraph,
    //   experiment,
    //   link,
    //   simpleBlockContent,
    //   cta,
    //   mainImage,
		// 	authorReference,
		// 	instagram,
		// 	videoEmbed,
		// 	bioPortableText,
    //   bodyPortableText,
    //   excerptPortableText,
    // ])
    .concat(allPlugs),
})
