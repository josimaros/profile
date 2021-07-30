import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { ImgContainer, ImgCustom, IconContainer, ContainerHabilidades } from './styles'
import { GiSkills } from 'react-icons/gi'
import { RiArrowRightSLine } from 'react-icons/ri'
import { FaStar, FaFolderOpen, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import TitleText from '../../components/TitleTexto'
import AddExperiencia from '../../components/AddExperiencia';
import { Form } from '@unform/web'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

interface IFormularioDeContato {
  name: string;
  email: string;
  mensagem: string;
}


const Home: React.FC = () => {
  function handleSubmit(data:IFormularioDeContato) {
    console.log(data)
    // { email: 'test@example.com', password: '123456' }
  }

  return ( 
    <main>
      <Header />

      <section className="">
        <Container fluid="md">
          <Row>
            <Col sm={12} lg={6}>
              <h4 style={{ fontSize: 56, color: '#49af73', fontWeight: 700 }}>Eu codifico, logo existo.</h4>
              <p style={{ color: '#425475', marginTop: '20px', fontSize: 16, textAlign: 'justify' }}>Sou um jovem entusiasta que adora TI e qualquer coisa a respeito, desde meus primeiros passos no Ensino Médio. Durante os últimos anos, ganhei muita experiência neste campo devido ao forte desejo de me tornar um especialista. Hoje sou desenvolvedor front-end sênior em uma das empresas líderes do mundo. </p>
              <p>“Para mim, desenvolvimento web é mais do que codificação. É uma tela com uma página em branco e sou o artista para pintá-la com cores de codificação ”.</p>
            </Col>
            <Col sm={12} lg={6} className="d-flex flex-column justify-content-around align-items-center">
              <p style={{ fontWeight: 700, fontSize: 32, marginBottom: '0.3em' }}>Com sede em Seattle</p>
              <p style={{ color: '#49af73', marginTop: 16 }}>25 anos de idade</p>
              <ImgContainer className="rounded-circle d-flex align-items-center justify-content-center  position-relative overflow-hidden block mt-4">
                <ImgCustom src="https://hosting.renderforestsites.com/images/5699226/187562/3e8ca6ff2e47faeb397955c373766829.jpg" roundedCircle />
              </ImgContainer>

            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ background: '#1c1c1d' }}>
        <div className="container">
          <div className="row">
            <Col sm={12} lg={4} className="d-flex align-items-center justify-content-center">
              <div style={{ color: '#ffffff ', height: '280px' }} className="d-flex align-items-center justify-content-center flex-column">
                <IconContainer ><GiSkills size={24} /></IconContainer>
                <h6 className="mt-3 mb-2" style={{ fontSize: 24 }}>Habilidades</h6>
                <p className="mt-3 mb-0 text-justify" style={{ height: '40%' }}>Aprenda sobre minhas habilidades em programação, encontre informações sobre meu conhecimento de idiomas e muito mais.</p>
                <div className="mt-4 mb-0 " style={{ color: '#6ddb9a' }}>
                  <a href="#" style={{ color: '#6ddb9a' }} className="d-flex align-items-center justify-content-center text-decoration-none"><div className="mr-4 w-100"> Saber mais</div> <RiArrowRightSLine size={24} /> </a></div>
              </div>
            </Col>
            <Col sm={12} lg={4} className="d-flex align-items-center justify-content-center">
              <div style={{ color: '#ffffff ', height: '280px' }} className="d-flex align-items-center justify-content-center flex-column">
                <IconContainer ><FaStar size={24} /></IconContainer>
                <h6 className="mt-3 mb-2" style={{ fontSize: 24 }}>Experiência</h6>
                <p className="mt-3 mb-0 text-justify" style={{ height: '40%' }}>Conheça a linha do tempo de minha formação e saiba mais sobre minha experiência de trabalho.</p>
                <div className="mt-4 mb-0 " style={{ color: '#6ddb9a' }}>
                  <a href="#" style={{ color: '#6ddb9a' }} className="d-flex align-items-center justify-content-center text-decoration-none"><div className="mr-4 w-100"> Saber mais</div> <RiArrowRightSLine size={24} /> </a></div>
              </div>
            </Col>
            <Col sm={12} lg={4} className="d-flex align-items-center justify-content-center">
              <div style={{ color: '#ffffff ', height: '280px' }} className="d-flex align-items-center justify-content-center flex-column">
                <IconContainer ><FaFolderOpen size={24} /></IconContainer>
                <h6 className="mt-3 mb-2" style={{ fontSize: 24 }}>Portfólio</h6>
                <p className="mt-3 mb-0 text-justify" style={{ height: '40%' }}>Meu portfólio é meu maior orgulho. Confira meus trabalhos anteriores e conheça melhor minhas habilidades.</p>
                <div className="mt-4 mb-0 " style={{ color: '#6ddb9a' }}>
                  <a href="#" style={{ color: '#6ddb9a' }} className="d-flex align-items-center justify-content-center text-decoration-none"><div className="mr-4 w-100"> Saber mais</div> <RiArrowRightSLine size={24} /> </a></div>
              </div>
            </Col>
          </div>
        </div>
      </section>
      <section>
        <ContainerHabilidades className="container" id="habilidades">
          <Row>
            <Col sm={12} lg={8}>
              <h4 style={{ fontSize: 40 }}>Habilidades de programação</h4>
              <p style={{ textAlign: 'justify' }}>Engenheiro de front end acreditando no poder do desenvolvimento web. Experiência em todos os estágios de desenvolvimento avançado de front end. Focado no desenvolvimento de aplicativos de página única, animações CSS / JS, semântica, acessibilidade e aprimoramento progressivo. No entanto, estou interessado em explorar novos idiomas e sempre tento me manter atualizado. Além disso, tenho outros conhecimentos de informática, como uso fluentemente Adobe XD e Sketch para projetar os sites antes de codificá-los. Também tenho conhecimentos básicos em 3D Max Studio e Adobe After Effect e os utilizo como hobby. </p>
            </Col>
            <Col sm={12} lg={4}>
              <Row id="RowHabilidades">
                <Col>
                  <p>HTML</p>
                  <p>Html4 / Html5</p>
                </Col>
                <Col>
                  <p>CSS3</p>
                  <p>SASS / LESS</p>
                </Col>
              </Row>
              <Row id="RowHabilidades">
                <Col>
                  <p>JS</p>
                  <p>React / React Native</p>
                </Col>
                <Col>
                  <p>JS</p>
                  <p>Node</p>
                </Col>
              </Row>

            </Col>
          </Row>
        </ContainerHabilidades>
      </section>
      <section style={{ background: '#1c1c1d', color: '#ffffff' }}>
        <div className="container">
          <Row style={{ color: '#6ddb9a' }}>
            <TitleText>línguas</TitleText>
          </Row>
          <Row>
            <Col className="text-center">
              <p style={{ color: '#6ddb9a', fontSize: 24 }}>inglês </p>
              <p>Nativo</p>
            </Col>
            <Col className="text-center">
              <p style={{ color: '#6ddb9a', fontSize: 24 }}>inglês </p>
              <p>Nativo</p>
            </Col>
            <Col className="text-center">
              <p style={{ color: '#6ddb9a', fontSize: 24 }}>inglês </p>
              <p>Nativo</p>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2>Experiência</h2>
          <p>Do colégio à Amazon. Conheça a linha do tempo da minha experiência de trabalho do passado ao presente.</p>
          <AddExperiencia />
        </div>
      </section>
      <section>

      </section>
      <Container>
        <Row className="mb-5">
          <Col sm={12} md={3} className="px-5">
            <h3 style={{fontSize:32, marginBottom:32}}>Contate-me</h3>
            <p className="text-justify">Contacte-me através deste formulário e responderei dentro de 24 horas.</p>
            <p className="text-justify">ligue para + 1-2738-3840-234</p>
            <p className="text-justify">contact@henrymcdcv.com</p>
            <div>
              <span>Encontre me em:</span>
              <div className="align-items-center d-flex justify-content-around mt-3">
                <div><FaFacebookF size={24} color="#49af73"/></div>
                <div><FaInstagram size={24} color="#49af73"/></div>
                <div><FaLinkedin size={24} color="#49af73"/></div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={9} className="px-5">
            <Form onSubmit={handleSubmit} className="px-5 py-2 d-flex align-items-center justify-content-center flex-column">
              <Input name="name" placeholder="Nome"/>
              <Input name="email" type="email" placeholder="Email"/>
              <Input name="mensagem" placeholder="Mensagem"/>
              <Button type="submit">Enviar</Button>
            </Form>

          </Col>
        </Row>
      </Container>

      <Footer />
    </main>
  )
}

export default Home;