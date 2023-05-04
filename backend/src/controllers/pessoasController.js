// FAZ O CONTROLE DOQ VAI SER RETORNADO DO BANCO
import pessoas from '../models/Pessoa.js';

class PessoaController {

    static listarPessoas = async (req, res) => {
        try {
            const pessoasResponse = await pessoas.find({}, 'nome');
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
            res.status(400).send({message: `${err.message} - Id da pessoa não localizado`})
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
    
    static listarPessoaNome = async (req, res) => {
        try {
            const nome = new RegExp(req.params.nome, 'i');
            const pessoasResponse = await pessoas.find({nome}).exec();
            res.status(200).json(pessoasResponse);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id da pessoa não localizado`})
        }
    }
    
    static totalPessoasCadastradas = async (req, res) => {
        try {
            const totalResponse = await pessoas.countDocuments();
            res.status(200).json({total: totalResponse});
        } catch (err) {
            console.log(error);
            res.status(500).send({message: `${err.message} - Erro ao obter o total de pessoas.`})
        }
    }

    static totalConsultasUltimosSeteDias = async (req, res) => {
        try {
          const hoje = new Date();
          const seteDiasAtras = new Date();
          seteDiasAtras.setDate(hoje.getDate() - 7);
          const total = await pessoas.aggregate([
            {
              $unwind: "$consultas"
            },
            {
              $match: {
                "consultas.dataConsulta": {
                  $gte: seteDiasAtras,
                  $lte: hoje
                }
              }
            },
            {
              $count: "total"
            }
          ]);
          res.json({ total: total[0].total });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Erro ao obter o total de consultas." });
        }
      };
}

export default PessoaController