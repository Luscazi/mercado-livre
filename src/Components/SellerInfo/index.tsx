import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermomete,
  ReputationRow,
  SuportIcon,
  ClockIcon,
  More
} from './styles'

export function SellerInfo() {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>
      <LocationCard>
        <LocationIcon/>

        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermomete>
          <li />
          <li />
          <li />
          <li />
          <li className='active'/>
        </ReputationThermomete>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong><SuportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>vendas nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  )
}