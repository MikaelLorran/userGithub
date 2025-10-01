import Express from 'express'

const app = Express();
const port = 3000;


app.get('/usuario', (req, res)=>{
    res.send(`<a href="https://github.com/MikaelLorran">MikaelLorran</a>`)
})

app.listen(3000, ()=>{
    console.log("Servidor rodando em: http://localhost:"+port)
})

