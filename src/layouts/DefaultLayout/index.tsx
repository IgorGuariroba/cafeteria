import { Actions, LayoutContainer } from './styles'
import logoNav from '../../assets/Logo.svg'
import { ShoppingCart } from "phosphor-react";


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={logoNav} alt="Copo de café" />
      <Actions>
        <ShoppingCart size={32} />
      </Actions>
    </LayoutContainer>
  )
}