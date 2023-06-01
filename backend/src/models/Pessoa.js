import mongoose from 'mongoose';
import moment from 'moment';

const consultaSchema = new mongoose.Schema({
  consultaId: { type: String },
  dataConsulta: {
    type: Date,
    required: true,
    get: (value) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    set: (value) => moment(value, 'YYYY-MM-DD HH:mm:ss').toDate(),
  },
  queixaPrincipal: { type: String },
  interrogatorio: { type: String },
  cirurgia: { type: String },
  medicacaoUso: { type: String },
  auriculo: { type: String },
  pulsoDireito: { type: String },
  pulsoEsquerdo: { type: String },
  lingua: { type: String },
  localizacaoDoenca: { type: String },
  naturezaDoenca: { type: String },
  etiopatogenia: { type: String },
  sindrome: { type: String },
  principioTerapeutico: { type: String },
  prescicao: { type: String },
});

const pessoaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  genero: { type: String },
  endereco: { type: String },
  profissao: { type: String },
  filhos: { type: Boolean },
  qtdFilhos: { type: Number },
  dataNascimento: { type: Date },
  primeiraSessao: { type: Boolean },
  consultas: [consultaSchema],
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

export default Pessoa;
