//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const AnimeModel = db.define('animes', {
     title: { type: DataTypes.STRING },
     content: { type: DataTypes.STRING },
 })




 export default AnimeModel

