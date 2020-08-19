import React from 'react'
import HamburgerIcon from './hamburger'
import {Service0 as ServiceIcon0, Service1 as ServiceIcon1, Service2 as ServiceIcon2, Service3 as ServiceIcon3} from './service0'
import ChevronRightIcon from './chevron-right'
function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'chevron-right':
      return <ChevronRightIcon />
    case 'service-0':
      return <ServiceIcon0 />
    case 'service-1':
      return <ServiceIcon1 />
    case 'service-2':
      return <ServiceIcon2 />
    case 'service-3':
      return <ServiceIcon3 />

    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
