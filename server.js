import express from 'express'; // Importando express
import { PrismaClient } from '@prisma/client' //

const prisma = new PrismaClient()

const app = express();
app.use(express.json());

/*precisa do tipo de rota http
E o endereço*/

//criando usuario
app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })

    res.status(201).json(req.body);
})

//listando usuarios
app.get('/users', async (req, res) => {

    let users = []

    if(req.query) { //filtro pra buscar query's especificos
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
            }
        })
    }else {    
        users = await prisma.user.findMany() //irá procurar todos os usuarios
    }
    

   res.status(200).json(users)
})

//editando usuarios
app.put('/users/:id', async (req, res) => {
 
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })

    res.status(201).json(req.body);
})

//deletando usuarios
app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({Message: "Excluido com sucesso"})
})

app.listen(3000)

 

/* Para executar o server `yarn node --watch server.js` 
    E para executar o prisma ´yarn prisma | yarn prisma studio´
*/