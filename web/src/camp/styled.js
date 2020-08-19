export const Menu = styled.div`
    button {
        transform-origin: center;
        border: none;
        padding: 20px;
        background: none;
        outline: none;
        span {
          width: 32px;
            height: 5px;
            display: block;
            background: #00f;
            margin: 8px;
        }
		}
		${({isMenuOpen}) => isMenuOpen &&
		css`
			display: none;
		`}
`