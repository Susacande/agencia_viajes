import express from "express";
import { paginaContacto,
         paginaInicio,
         paginaViajes,
         paginaNosotros,
         paginaTestimoniales,
         paginaDetalleViaje } from "../controllers/paginasController.js";

import{
    guardarTestimonial

} from '../controllers/TestimonialController.js'


const router = express.Router();
router.get('/', paginaInicio);
router.get('/Viajes', paginaViajes);
router.get('/Viajes/:slug', paginaDetalleViaje); // Se usa comodin

router.get('/Nosotros',paginaNosotros);


router.get('/Contacto', paginaContacto);

router.get('/Testimoniales', paginaTestimoniales);

router.post('/Testimoniales', guardarTestimonial);







export default router;