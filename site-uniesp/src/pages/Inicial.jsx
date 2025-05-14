import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Inicial = () => {
  return (
    <Container className="py-4">

        {/* Aqui será o carousel do banner */}

        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <p>
                A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
                </p>
                <p>
                Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
                </p>
                <p>
                A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
                </p>
            </Card.Body>
        </Card>
        <Row className="g-4">
            <Col md={4}>
                {/* Card 1 */}
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                        alt="Campus Live"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Vida no Campus
                        </Card.Title>
                        <Card.Text>
                            Um ambiente vibrante e acolhedor, com atividades...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                {/* Card 1 */}
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                        alt="Biblioteca Live"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Biblioteca
                        </Card.Title>
                        <Card.Text>
                            Um ambiente ótimo para leitura...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                {/* Card 1 */}
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                        alt="Predio"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Predio
                        </Card.Title>
                        <Card.Text>
                            Um ambiente para estudar
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        

    </Container>
  )
}

export default Inicial