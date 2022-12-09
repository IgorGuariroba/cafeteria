import { Actions, LayoutContainer } from './styles'
import logoNav from '../../assets/Logo.svg'

import map from '../../assets/map.svg'
import shoppingCart from '../../assets/ShoppingCart.svg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={logoNav} alt="Copo de café" />
      <Actions>
        <div>
          <img src={map} alt="" />
          Mogi Das Cruzes
        </div>
        <span>
        <img src={shoppingCart} alt="" />
        </span>
      </Actions>
    </LayoutContainer>
  )
}