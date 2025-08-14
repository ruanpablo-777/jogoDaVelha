const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
const port = 4000;

// Middleware para parsear JSON

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jgdavelha'
});
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida!');
});
app.get('/results', (req, res) => {
    const query = 'SELECT * FROM partidas';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Erro ao buscar resultados.')
        } else {
            res.status(200).json(results)
            
        }
    });
})

// Rota para salvar pontos
app.post('/update', (req, res) => {
    const { player, points } = req.body;
    console.log(req.body)
    const query = 'UPDATE partidas SET points = points + ? WHERE players = ?';
    db.query(query, [points, player], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados no banco de dados:', err);
            res.status(500).json({ error: 'Erro ao inserir dados' });  // Resposta em caso de erro
        } else {
            console.log('Dados salvos com sucesso:', result);
            res.status(200).json({ message: 'Dados salvos com sucesso' });  // Resposta em caso de sucesso
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
