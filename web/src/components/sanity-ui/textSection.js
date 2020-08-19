import React from 'react'
import PortableText from './portableText'
import 'twin.macro'
const TextSection = ({_key, _type, heading, label, text}) => {

let isPrivacyPolicy = heading === 'Privacy Policy'
	return (
		isPrivacyPolicy && (
<div tw='w-full bg-cool-gray-100 mx-auto pt-8'>
<section tw='w-full font-sans text-black
'>
<PortableText blocks={text} />
</section>
</div>
		)
	)
}

export default TextSection
