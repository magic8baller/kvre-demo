import tw, {styled} from 'twin.macro';

export const H1 = styled.h1`
${tw`text-5xl sm:text-6xl font-normal leading-normal mt-0 mb-2`}
`
export const H2 = styled.h2`
${tw`text-4xl sm:text-5xl font-normal leading-normal mt-0 mb-2`}
`
export const H3 = styled.h3`
${tw`text-3xl sm:text-4xl font-normal leading-normal mt-0 mb-2`}
`
export const H4 = styled.h4`
${tw`text-2xl sm:text-3xl font-normal leading-normal mt-0 mb-2`}
`
export const H5 = styled.h5`
${tw`text-xl sm:text-2xl font-normal leading-normal mt-0 mb-2`}
`
export const H6 = styled.h6`
${tw`text-xl font-normal leading-normal mt-0 mb-2`}
`
export const Small = styled.small`
${tw`font-normal leading-normal mt-0 mb-4 `}
`
const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
	posuere erat a ante.`
export const Quote = (text = body, author = 'Someone famous in', source = 'Source Title') => (
	<div>
		<p className="text-base font-light leading-relaxed mt-0 mb-0 text-pink-800">
			{body}
		</p>
		<footer className="block text-pink-600">
			- {author} <cite>{source}</cite>
		</footer>
	</div>
)