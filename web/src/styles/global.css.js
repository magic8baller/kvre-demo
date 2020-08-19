import {css, Global} from '@emotion/core'
import React from 'react'
import tw from 'twin.macro'
export const GlobalStyles = () => <Global css={css`
	:root {
  --font-family-sans: "Source Sans Pro", sans-serif;

  --color-black: #202123;
  --color-dark-gray: #32373e;
  --color-gray: #697a90;
  --color-light-gray: #b4bcc7;
  --color-very-light-gray: rgb(242, 244, 245);
  --color-white: #fff;
  --color-accent: #156dff;

  /* Typography */
  --unit: 16;
  --font-micro-size: calc(10 / var(--unit) * 1rem); /* 10px */
  --font-micro-line-height: calc(12 / 10); /* 12px */
  --font-small-size: calc(14 / var(--unit) * 1rem); /* 14px */
  --font-small-line-height: calc(21 / 14); /* 21px */
  --font-base-size: 1em; /* 16px */
  --font-base-line-height: calc(24 / var(--unit)); /* 24px */
  --font-large-size: calc(18 / var(--unit) * 1rem); /* 18px */
  --font-large-line-height: calc(27 / 18); /* 27px */

  --font-title3-size: calc(21 / var(--unit) * 1rem); /* 21px */
  --font-title3-line-height: calc(30 / 21); /* 30px */
  --font-title2-size: calc(24 / var(--unit) * 1rem); /* 24px */
  --font-title2-line-height: calc(33 / 24); /* 33px */
  --font-title1-size: calc(49 / var(--unit) * 1rem); /* 49px */
  --font-title1-line-height: calc(57 / 49); /* 57px */
}

html, body {
${tw`font-body bg-cool-gray-400 antialiased`}
}
h1, h2, h3, h4 {
	${tw`font-display`}
}

title1 {
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);
}

.title2 {
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
}

.title3 {
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
}

.large {
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
}

.base {
  font-size: inherit;
  line-height: inherit;
}

.small {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
}

.micro {
  font-size: var(--font-micro-size);
  line-height: var(--font-micro-line-height);
  text-transform: uppercase;
}



/*
 * Responsively sized elements
 */

.paragraph {
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin: 0.5rem 0 1rem 0;

  @media (min-width: 450px) {
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
}

.blockQuote {
  background: var(--color-very-light-gray);
}

.responsiveTitle1 {
  font-weight: 600;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 1rem 0 2rem;

  @media (min-width: 450px) {
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}

.responsiveTitle2 {
  font-weight: 600;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1.5rem 0 0.5rem;

  @media (min-width: 450px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }
}

.responsiveTitle3 {
  font-weight: 600;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1rem 0 0.5rem;

  @media (min-width: 450px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }
}

.responsiveTitle4 {
  font-weight: 600;
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin: 1rem 0 0.5rem;

  @media (min-width: 450px) {
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  @media (min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
}

	`} />
