import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/megapacadb');
const connection= mongoose.connection;
connection.once('open', () => {
    console.log('db is connected');
});