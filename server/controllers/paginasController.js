import {Viaje} from "../models/Viajes.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async(req,res) =>{

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit:3}));


    try{
         
        const resultado = await Promise.all(promiseDB);


        res.render('inicio',{
            pagina:'Inicio',
            clase:'home',
            Viajes: resultado[0],
            testimoniales: resultado[1]
    
        });

    }
    catch(error)
    {
        
    }
    

}

const paginaViajes= async (req,res)=>{

    /*
    Consultar modelo
     */

    const Viajes = await Viaje.findAll();
    
    res.render('Viajes',{ Viajes
    }); 
}




const paginaNosotros = (req,res)=>{
    res.render('nosotros', {pagina:'nosotros'}); 

}

const paginaContacto =(req,res)=>{
    res.render('Contacto', {pagina:'Contacto'}); 

}
const paginaTestimoniales = async(req,res)=>{
    try{

        const testimoniales = await Testimonial.findAll();


        res.render('Testimoniales', {
            pagina:'Testimoniales',
            testimoniales

                }); 
    }
    catch(error)
    {
        consolelog(error);

    }

}

const paginaDetalleViaje = async (req,res) =>{
    const {slug} = req.params;
    try {

        const resultado = await Viaje.findOne({ where  :{slug}})
        res.render('viaje',{
            viaje,

        })
        

    }
    catch
    {

    }
}


export{
     paginaInicio,
     paginaViajes,
     paginaNosotros,
     paginaContacto,
     paginaTestimoniales,
     paginaDetalleViaje
}