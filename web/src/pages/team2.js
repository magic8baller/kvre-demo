import React from 'react'
import Layout from '../components/layout'
import {CTA, CTATwoInput, CTAInputBox, CTABasicButton, CTATwoButton} from '../components/sanity-ui/cta'
import tw, {styled,css} from 'twin.macro'
const DemoHeading = styled.h2`
text-align: center;
${tw`text-2xl font-bold`}
`
const CTADemo = () => {

	return (
		<Layout>
		<div tw='mx-auto items-center'>
			<h1 style={{paddingTop: '8em'}}>CTA Demo</h1>
			<DemoHeading>CTA TwoInput</DemoHeading>
			<div tw='bg-cool-gray-200'>
<CTATwoInput />
			</div>
			<div style={{padding: '3em'}}>
			<DemoHeading>CTA InputBox</DemoHeading>
<CTAInputBox />
			</div>
			<DemoHeading>CTA Basic Button</DemoHeading>
			<div tw='bg-cool-gray-200' style={{padding: '3em'}}>
<CTABasicButton />
			</div>
			<div style={{padding: '3em'}}>
			<DemoHeading>CTA Two Button</DemoHeading>
<CTATwoButton />
			</div>

</div>
		</Layout>
	)
}

export default CTADemo
