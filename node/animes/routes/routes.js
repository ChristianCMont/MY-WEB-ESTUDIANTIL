import express from 'express'
import { getAllAnimes, getAnime, createAnime, updateAnime, deleteAnime } from '../controllers/AnimeController.js'
const router = express.Router()

router.get('/', getAllAnimes)
router.get('/:id', getAnime)
router.post('/', createAnime)
router.put('/:id', updateAnime)
router.delete('/:id', deleteAnime)

export default router