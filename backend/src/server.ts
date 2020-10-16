import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import './database/connection'

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);




// Rota = conjunto
// Recurso = usuario 
// Metodos HTTP = GET / POST / DELETE / PUT
// Parametros = body.params / query.params / 

// Query = https://localhost:3333/users?search=diego (algum tipo de busca, filtro, paginacao)
// Route Params = https://localhost:3333/users/1 ( Identificar um recurso )
// Body = https://localhost:3333/users 
// REQ / RES 
