// CONEXÃO COM O BANCO
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://adm-projeto-clinica:projetoEstacio@cluster0.ebk0ea1.mongodb.net/test");

let db = mongoose.connection;

export default db;