import {db} from '../../lib/db'

const handler = async (req,res) =>{
    const {id_siswa} = req.query
    try{
        if(!id_siswa){
            return res.status(400).json({message:'`id siswa  tidak ada`'})
        }

        const results = await db.query(
            `DELETE FROM siswa WHERE id_siswa=?`,id_siswa)
            res.json(results)
    }catch (e){
        res.status(500).json({message:e.message})
    }
}

export default handler