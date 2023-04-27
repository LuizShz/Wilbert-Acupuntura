import mongoose from 'mongoose'

const pessoaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        genero: {type: String},
        endereco: {type: String},
        // escolaridade: {type: String},
        filhos: {type: Boolean},
        qtdFilhos: {type: Number},
        // religiao: {type: Number},
        dataNascimento: {type: Date},
        // idade: {type: Number}, fazer o calc com base na data de nascimento
        primeiraSessao: {type: Boolean}
    }
);

const pessoas = mongoose.model('pessoa', pessoaSchema);

export default pessoas;