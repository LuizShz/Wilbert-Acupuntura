import mongoose from 'mongoose'

const pessoaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        genero: {type: String},
        endereco: {type: String},
        profissao: {type: String}, // ao inves de escolaridade colocar profissao
        filhos: {type: Boolean},
        qtdFilhos: {type: Number},
        // religiao: {type: Number}, não vai precisar
        dataNascimento: {type: Date},
        // idade: {type: Number}, fazer o calc com base na data de nascimento
        primeiraSessao: {type: Boolean}
    }
);

const pessoas = mongoose.model('pessoa', pessoaSchema);

export default pessoas;