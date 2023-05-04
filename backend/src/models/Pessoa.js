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
        primeiraSessao: {type: Boolean},
        consultas: [{
            id: {type: String},
            dataConsulta: {type: Date, required: true},
            queixaPrincipal: {type: String, required: true},
            interrogatorio: {type: String},
            cirurgia: {type: String},
            medicacaoUso: {type: String},
            auriculo: {type: String},
            pulsoDireito: {type: String},
            pulsoEsquerdo: {type: String},
            lingua: {type: String},
            localizacaoDoenca: {type: String},
            naturezaDoenca: {type: String},
            etiopatogenia: {type: String},
            sindrome: {type: String},
            principioTerapeutico: {type: String},
            prescicao: {type: String}
        }]
    }
);

const pessoas = mongoose.model('pessoas', pessoaSchema);

export default pessoas;