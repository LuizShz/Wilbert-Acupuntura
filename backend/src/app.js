// CONEXÃO COM O BANCO
import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// tratamente se tiver algum erro na conexão
db.on("error", console.log.bind(console, "Erro de conexão com o banco"))
// abre a conexão com o banco
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

routes(app);


// Para usar o export defult o package.json precisa de ter "type": "module"
export default app