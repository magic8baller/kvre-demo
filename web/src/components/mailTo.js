import React from 'react'
function Mailto({email, subject, body, ...props}) {
	return (
		<a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
	);
}

export default Mailto
export const Example = () =>(
	<Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
		Mail me!
	</Mailto>
	)
