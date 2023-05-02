// centraliza as rotas existentes
import express from 'express';
import pessoas from './pessoaRoutes.js';
// import autores from './autoresRoutes.js';
// import editoras from './editorasRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso Node"})
    })
    
    app.use(
        express.json(),
        pessoas

    )
}
export default routes;