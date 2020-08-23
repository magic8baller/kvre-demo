/* purgecss start ignore */
export const Header = styled.header`


nav {
  display: block;
}

nav a {
  display: inline-block;
  text-decoration: none;
  ${tw`py-3 mx-3 mt-1 text-base tracking-wider text-black transition-all duration-500 border-b border-transparent`};
}

@media (min-width:968px) {
  nav a {
    ${tw`text-xl`};
  }
}

body.contrast nav a {
  ${tw`text-black`}
}

body.contrast .headroom {
}

nav a:hover {
  ${tw`text-indigo-600 opacity-100`}
}

nav a.active {
  ${tw`mx-2 my-6`}
}

.headroom-wrapper {
  position: absolute;
}

.headroom {
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  position: fixed !important;
  ${tw`transition-all duration-500 bg-white`}
}
.headroom--unfixed {
  position: relative;
  transform: translateY(0);
  background: rgba(255, 255, 255, 0.01) !important;
}

.headroom--unfixed:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}
body.transparent .headroom--unfixed:hover a {
  color: #333;
}

body.transparent .headroom--unfixed a {
  opacity: 1;
}
.headroom--scrolled {
  ${tw`bg-white`;
}
.headroom--unpinned {
  position: fixed;
  ${tw`bg-white`};

  transform: translateY(0);
}

@media (min-width: 756px) {
  .headroom--unpinned {
    transform: translateY(-100%);
    background: transparent !important;
  }
}
.headroom--pinned {
  position: fixed;
  transform: translateY(0%);
}
`