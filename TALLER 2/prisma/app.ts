// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const createUser= async ()=>{
    const userCreated= await prisma.paciente.create({
        data:{
            nombre: "Angel",
            apellido: "Prado",
            direccion: "Av. Naciones unidas",
            especializacion: "Otorrinonaringologo",
            email: "angel2001@hotmail.com"
        }
    });
    console.log(userCreated)
    
}

const queryUser= async ()=>{
    const user= await prisma.paciente.findMany({
         where:{
            id:1
        }
    })
    console.log(user)
}

const updateUser= async ()=>{
    const user= await prisma.paciente.update({
        data:{
            nombre: "Jefferson",
            apellido: "Vera",
            fechaNacimiento: (19-12-2001), // Fecha en formato ISO8601
            direccion: "Granados",
            email: "Jeffersonv1999@gmail.com"
        },
        where:{
            id:1
        }
    })
}

const deleteUser= async ()=>{
    const user= await prisma.paciente.delete({
        where:{
            id:1
        }
    })
}

(async ()=>{
    // await createUser()
    await queryUser()

})()