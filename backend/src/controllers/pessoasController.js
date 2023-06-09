import _ from 'lodash';
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
            const pessoaData = _.cloneDeep(req.body);
            delete pessoaData.consultas; // Remover o campo 'consultas' do objeto clonado

            const pessoa = new pessoas(pessoaData);
            await pessoa.save();
            res.status(201).send({ message: 'Pessoa cadastrada com sucesso!' });
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Falha ao cadastrar pessoa.` });
        }
    }
    static atualizarPessoa = async (req, res) => {
        try {
            const id = req.params.id;
            const pessoaData = _.cloneDeep(req.body);
            delete pessoaData.consultas; // Remover o campo 'consultas' do objeto clonado

            await pessoas.findByIdAndUpdate(id, { $set: pessoaData });
            res.status(200).send({ message: 'Pessoa atualizada com sucesso!' });
        } catch (err) {
            res.status(500).send({ message: err.message });
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

    static registrosDashboard = async (req, res) => {
        try {
            // Total de pessoas
            var totalPessoas = await pessoas.countDocuments();
            
            const today = new Date();
            // Total de consultas nos últimos 7 dias
            const seteDiasAtras = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            var consultasSeteDias = await pessoas.countDocuments({
                'consultas.dataConsulta': { $gte: seteDiasAtras, $lte: today },
            });

            // Total de consultas no último mês
            const primeiroDiaMes = new Date(today.getFullYear(), today.getMonth(), 1);
            var consultasMesAtual = await pessoas.countDocuments({
                'consultas.dataConsulta': { $gte: primeiroDiaMes, $lte: today },
            });
            // lista de consultas na data atual
            const consultasHoje = await pessoas.find({
                'consultas.dataConsulta': { $gte: today, $lte: today },
            });

            res.status(200).json({totalPessoas, consultasSeteDias, consultasMesAtual, consultasHoje});
        } catch (err) {
            res.status(500).send({message: `${err.message} - Erro ao obter a dashboard.`})
        }
    }
}

export default PessoaController