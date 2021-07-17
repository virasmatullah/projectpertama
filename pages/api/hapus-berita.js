import {db} from '../../lib/db'

const handler = async (req,res) =>{
    const {id_berita} = req.query
    try{
        if(!id_berita){
            return res.status(400).json({message:'`id berita  tidak ada`'})
        }

        const results = await db.query(
            `DELETE FROM berita WHERE id_berita=?`,id_berita)
            res.json(results)
    }catch (e){
        res.status(500).json({message:e.message})
    }
}

export default handler