import { Product } from '../Product'

import {
  Container,
  Header,
  Wrapper,
  Footer } from './styles'

export function Layout() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  )
}