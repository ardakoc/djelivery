// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import HeroBanner from '../../assets/img/hero-banner.jpg'
import HeroForm from './HeroForm';

export default function Hero() {
  return (
    <>
      <Row>
        <Image src={HeroBanner} fluid className="banner"/>
        <HeroForm />
      </Row>
    </>
  )
}