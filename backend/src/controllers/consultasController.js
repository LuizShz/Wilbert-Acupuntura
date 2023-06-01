import pessoas from '../models/Pessoa.js';

class ConsultaController {
  static listarConsultas = async (req, res) => {
    try {
        const pessoaId = req.params.id;

        // Encontra a pessoa pelo ID
        const pessoa = await pessoas.findById(pessoaId);

        if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada.' });
        }

        // Retorna as consultas da pessoa
        const consultas = pessoa.consultas;

        res.status(200).json(consultas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  };
  static listarConsultasId = async (req, res) => {
    try {
      const pessoaId = req.params.id;
      const consultaId = req.params.consultaId;

      // Encontra a pessoa pelo ID
      const pessoa = await pessoas.findById(pessoaId);

      if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada.' });
      }

      // Encontra a consulta pelo ID dentro das consultas da pessoa
      const consulta = pessoa.consultas.find((consulta) => consulta.id === consultaId);

      if (!consulta) {
        return res.status(404).json({ message: 'Consulta não encontrada.' });
      }

      res.status(200).json(consulta);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static cadastrarConsulta = async (req, res) => {
    try {
      const pessoaId = req.params.id;
      const consultaData = req.body;

      // Encontra a pessoa pelo ID
      const pessoa = await pessoas.findById(pessoaId);

      if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada.' });
      }

      // Adiciona a nova consulta ao array de consultas da pessoa
      pessoa.consultas.push(consultaData);

      // Salva as alterações no banco de dados
      await pessoa.save();

      res.status(201).json({ message: 'Consulta criada com sucesso.' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  static atualizarConsulta = async (req, res) => {
    try {
      const pessoaId = req.params.id;
      const consultaId = req.params.consultaId;
      const consultaData = req.body;

      // Encontra a pessoa pelo ID
      const pessoa = await pessoas.findById(pessoaId);

      if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada.' });
      }

      // Encontra a consulta pelo ID
      const consulta = pessoa.consultas.id(consultaId);

      if (!consulta) {
        return res.status(404).json({ message: 'Consulta não encontrada.' });
      }

      // Atualiza os dados da consulta
      consulta.set(consultaData);

      // Salva as alterações no banco de dados
      await pessoa.save();

      res.status(200).json({ message: 'Consulta atualizada com sucesso.' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  static excluirConsulta = async (req, res) => {
    try {
      const pessoaId = req.params.id;
      const consultaId = req.params.consultaId;

      // Encontra a pessoa pelo ID
      const pessoa = await pessoas.findById(pessoaId);

      if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada.' });
      }

      // Encontra a consulta pelo ID
      const consulta = pessoa.consultas.id(consultaId);

      if (!consulta) {
        return res.status(404).json({ message: 'Consulta não encontrada.' });
      }

      // Remove a consulta do array de consultas da pessoa
      consulta.remove();

      // Salva as alterações no banco de dados
      await pessoa.save();

      res.status(200).json({ message: 'Consulta excluída com sucesso.' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  static agendarConsulta = async (req, res) => {
    try {
      const pessoaId = req.params.id;
      const consultaData = req.body;

      // Encontra a pessoa pelo ID
      const pessoa = await pessoas.findById(pessoaId);

      if (!pessoa) {
        return res.status(404).json({ message: 'Pessoa não encontrada.' });
      }

      // Verifica se a data da consulta é uma data futura
      const dataAtual = new Date();
      const dataConsulta = new Date(consultaData.dataConsulta);

      if (dataConsulta <= dataAtual) {
        return res.status(400).json({ message: 'A data da consulta deve ser uma data futura.' });
      }

      // Adiciona a nova consulta ao array de consultas da pessoa
      pessoa.consultas.push(consultaData);

      // Salva as alterações no banco de dados
      await pessoa.save();

      res.status(201).json({ message: 'Consulta agendada com sucesso.' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

export default ConsultaController;
