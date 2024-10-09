import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import AuthRequests from '../../fetch/AuthRequest';

function Navegacao() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Checar se o token e o nome de usuário estão armazenados no localStorage
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        if (token && storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername); // Atualiza o nome do usuário logado
        }
    }, []);

    const handleLogout = () => {
        // Remover token e informações de usuário do localStorage
        AuthRequests.removeToken(); // Use o método que remove todos os dados
        setIsLoggedIn(false);
        setShowCard(false);
    };

    const toggleCard = () => {
        setShowCard(!showCard);
    };

    const estiloNavbar = {
        backgroundColor: 'var(--primaryColor)',
    };

    const estiloNavOptions = {
        color: 'var(--fontColor)',
    };

    return (
        <>
            <Navbar style={estiloNavbar}>
                <Container>
                    <Navbar.Brand href="/" style={estiloNavOptions}>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/pessoas" style={estiloNavOptions}>Pessoas</Nav.Link>
                    </Nav>
                    {isLoggedIn ? (
                        <Button onClick={toggleCard} variant='light'>
                            Conectado
                        </Button>
                    ) : (
                        <Button href='/login' variant='light'>Login</Button>
                    )}
                </Container>
            </Navbar>

            {/* Cartão com o nome do usuário e botão de logout */}
            {showCard && (
                <div style={{ position: 'absolute', top: '50px', right: '20px', zIndex: 1000 }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Olá, {username}!</Card.Title>
                            <Button onClick={handleLogout} variant='danger'>
                                Logout
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </>
    );
}

export default Navegacao;
