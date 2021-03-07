const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let user= models.User
let camera= models.CameraId


app.post('/register', async (req,res)=> {
    const {password,rePassword,username} = req.body
    if (username === '' || password === '') return res.status(400).json({error:'Campos não preenchidos'})
    const findUser = await user.findOne({
        where:{ username }
    });
    if (password !== rePassword) return res.status(400).json({error:'as senhas não são iguais'})

    if (findUser) return res.status(400).json({ error: 'usuário ja existe' })
    
    const signUpUser = await user.create({username, password})
    return res.status(201).json(signUpUser)
    
})



app.post('/login', async (req,res) => {
    const {password,username} = req.body
   let findUser = await user.findOne({
        where:{ username, password}
    });

    if(!findUser){
        return res.status(400).json({ error: 'usuário não encontrado' });
    } else {
       return res.json(findUser);
    }
}
);
let port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Servidor Online')
});



 