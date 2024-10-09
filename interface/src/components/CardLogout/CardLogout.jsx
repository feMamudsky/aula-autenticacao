import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AuthRequests from '../AuthRequests'; // Certifique-se de importar corretamente

function CardLogout({ username }) {
    // Função para realizar o logout
    const handleLogout = async (e) => {
        // Evita o recarregamento da página durante a comunicação cliente-servidor
        e.preventDefault();
        
        try {
            // Remove o token e outros dados do localStorage
            AuthRequests.removeToken();
            // Redireciona para a página principal
            window.location.href = '/';
        } catch (error) {
            console.error('Erro ao tentar realizar logout:', error);
            alert('Erro ao fazer logout.');
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Bem-vindo, {username}!</Card.Title>
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </Card.Body>
        </Card>
    );
}

export default CardLogout;
