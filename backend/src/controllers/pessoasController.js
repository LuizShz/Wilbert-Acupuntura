// FAZ O CONTROLE DOQ VAI SER RETORNADO DO BANCO
import pessoas from '../models/Pessoa.js';

class PessoaController {

    static listarPessoas = async (req, res) => {
        try {
            const pessoasResponse = await pessoas.find();
            res.status(200).json(pessoasResponse);
        } catch (err) {
            res.status(500).send({message: `${err.message} - Erro ao carregar pessoa`})
        }
    }
    static listarPessoaId = async (req, res) => {
        try {
            const id = req.params.id;
            const pessoaResponse = await pessoas.findById(id);
            res.status(200).json(pessoaResponse);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id do pessoa não localizado`})
        }
    }
    static cadastrarPessoa = async (req, res) => {      
        try {
            const pessoa = new pessoas(req.body)
            await pessoa.save();
            res.status(201).send({message: `Pessoa cadastrada com sucesso !`})
        } catch (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar pessoa. `});
        }
    }
    static atualizarPessoa = async (req, res) => {
        try {
            const id = req.params.id;
            await pessoas.findByIdAndUpdate(id, {$set: req.body})
            res.status(500).send({message: err.message})
        } catch (err) {
            res.status(200).send({message: 'Pessoa atualizado com sucesso'})
        }
    }
    static excluirPessoa = async (req, res) => {
        try {
            const id = req.params.id;
            await pessoas.findByIdAndDelete(id)
            res.status(200).send({message: 'Pessoa removido com sucesso'})
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }
}

export default PessoaController