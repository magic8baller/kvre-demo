import React from "react";
import { Link } from "gatsby";
import Icon from '../../icon'
const CTAction = ({ kind, title, link }) => {
	let ContactButton = () => (
		<span>{title} <Icon symbol='chevron-right'/></span>
	)
	let renderTitle = title == 'contact' ? <ContactButton/> : title
	let isButton = kind === 'button'
	let isLink = kind === 'link'
let Button = () => (
<button className="">
        {title}
			</button>
			)
	return isButton ? <Button/> : isLink ? <Link to={link}>{renderTitle}</Link> : ''

}

export default CTAction;
