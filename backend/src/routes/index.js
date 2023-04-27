// centraliza as rotas existentes
import express from 'express';
// import livros from './livrosRoutes.js';
// import autores from './autoresRoutes.js';
// import editoras from './editorasRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso Node"})
    })
    
    app.use(
        express.json(),
    )
}
export default routes;