// FAZ O CONTROLE DOQ VAI SER RETORNADO DO BANCO
import pessoas from '../models/Pessoa.js';

class PessoaController {

    static listarPessoas = (req, res) => {
        pessoas.find((err, pessoas) => {
            res.status(200).json(pessoas);
        })
    }
    static listarPessoaId = (req, res) => {
        const id = req.params.id;
        pessoas.findById(id, (err, pessoa) => {
            // tratamento do erro
            if (!err) {
                res.status(200).json(pessoa);
            } else {
                res.status(400).send({message: `${err.message} - Id do pessoa não localizado`})
            }
        })
    }
    static cadastrarPessoa = (req, res) => {
       let pessoa = new pessoas(req.body);
       
       pessoa.save((err) => {
        if (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar pessoa. `});
        } else {
            res.status(201).send(pessoa.toJSON())
        }
       })
    }
    static atualizarPessoa = (req, res) => {
        const id = req.params.id;
        pessoas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static excluirPessoa = (req, res) => {
        const id = req.params.id;

        pessoas.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Pessoa removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default PessoaController