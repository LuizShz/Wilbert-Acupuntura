// centraliza as rotas existentes
import express from 'express';
import pessoas from './pessoaRoutes.js';

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