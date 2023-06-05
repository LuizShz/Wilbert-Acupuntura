import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema({
  consultaId: { type: String },
  dataConsulta: {  type: Date  },
  horaConsulta: { type: String },
  acunpuntura: { type: String },
  queixaPrincipal: { type: String },
  interrogatorio: { type: String },
  localizacaoDoenca: { type: String },
  naturezaDoenca: { type: String },
  sindrome: { type: String },
  principioTerapeutico: { type: String },
  prescricao: { type: String },
  cirurgia: { type: String },
  medicacaoUso: { type: String },
  auriculo: { type: String },
  pulsoDireito: { type: String },
  pulsoEsquerdo: { type: String },
  lingua: { type: String },
  etiopatogenia: { type: String },
});

const pessoaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  endereco: { type: String },
  telefone: { type: String},
  genero: { type: String },
  estadoCivil: { type: String },
  profissao: { type: String },
  //   filhos: { type: Boolean }, colocado direto em qntd filhos
  qtdFilhos: { type: Number },
  dataNascimento: {  type: Date },
  idade: { type: String },
  primeiraSessao: { type: Boolean },
  consultas: [consultaSchema],
});

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

export default Pessoa;
