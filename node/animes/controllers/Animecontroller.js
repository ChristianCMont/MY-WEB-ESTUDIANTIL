//importamos el Modelo
import AnimeModel from "../models/AnimeModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllAnimes = async (req, res) => {
    try {
        const animes = await AnimeModel.findAll()
        res.json(animes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getAnime = async (req, res) => {
        try {
            const anime = await AnimeModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(Anime[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createAnime = async (req, res) => {
    try {
       await AnimeModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateAnime = async (req, res) => {
    try {
        await AnimeModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteAnime = async (req, res) => {
    try {
        await AnimeModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}