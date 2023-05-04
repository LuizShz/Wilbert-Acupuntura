// ROTAS QUE O FRONT VAI CHAMAR
import express from 'express';
import PessoaController from '../controllers/pessoasController.js';

const router = express.Router();

router
    .get("/pessoas", PessoaController.listarPessoas)
    .get("/pessoas/total", PessoaController.totalPessoasCadastradas)
    .get("/pessoas/totalConsultas", PessoaController.totalConsultasUltimosSeteDias)
    .get("/pessoas/:id", PessoaController.listarPessoaId)
    .get("/pessoas/pesquisa/:nome", PessoaController.listarPessoaNome)
    .post("/pessoas", PessoaController.cadastrarPessoa)
    .put("/pessoas/:id", PessoaController.atualizarPessoa)
    .delete("/pessoas/:id", PessoaController.excluirPessoa)

export default router;