// ROTAS QUE O FRONT VAI CHAMAR
import express from 'express';
import PessoaController from '../controllers/pessoasController.js';
import ConsultaController from '../controllers/consultasController.js';

const router = express.Router();

router
    .get("/pessoas", PessoaController.listarPessoas)
    .get("/pessoas/dashboard", PessoaController.registrosDashboard)
    .get("/pessoas/:id", PessoaController.listarPessoaId)
    .get("/pessoas/:id/consultas", ConsultaController.listarConsultas)
    .get("/pessoas/:id/consultas/:consultaId", ConsultaController.listarConsultasId)
    .get("/pessoas/pesquisa/:nome", PessoaController.listarPessoaNome)
    .post("/pessoas", PessoaController.cadastrarPessoa)
    .post("/pessoas/:id/consultas", ConsultaController.cadastrarConsulta)
    .post('/pessoas/:id/consultas/agendar', ConsultaController.agendarConsulta)
    .put("/pessoas/:id", PessoaController.atualizarPessoa)
    .put("/pessoas/:id/consultas/:consultaId", ConsultaController.atualizarConsulta)
    .delete("/pessoas/:id", PessoaController.excluirPessoa)
    .delete("/pessoas/:id/consultas/:consultaId", ConsultaController.excluirConsulta)

export default router;