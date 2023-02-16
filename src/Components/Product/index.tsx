import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles'
import tshirtImage from '../../assets/tshirt.png'
import { SellerInfo } from '../SellerInfo'
import { ProductAction } from '../ProductAction'

export function Product() {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt"/>
          </Gallery>
          <Info />
        </Column>
        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  )
}

const WarrantySection = () => {
  return(
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className='title'>Compra garantida com Lorem Ipsum</p>
          <p className='description'>Reveba o produto que você está esperando ou devolvemos o seu dinheiro</p>
        </span>
        <span>
          <p className='title'>Compra garantida com Lorem Ipsum</p>
          <p className='description'>Sem garantia</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  )
}

const Info = () => {
  return(
    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.
        <br />
        <br />
        Items inclusos: <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.Eaque libero quae ipsa assumenda adipisci unde officiis necessitatibus, amet nihil quas sint totam! Amet aspernatur accusantium rem tempore deleniti a veniam.
      </p>
    </Description>
  )
}