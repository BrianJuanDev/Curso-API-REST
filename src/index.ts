import express from 'express';

import diaryRouter from './routes/diaries';

const app =  express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res)=> {

    console.log('soy un ping');
    res.send('se ha enviado un ping');
})

app.use('/api/diaries/', diaryRouter);

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

