import {db} from '../../lib/db'

const handler = async (req,res) =>{
    const {id_guru} = req.query
    try{
        if(!id_guru){
            return res.status(400).json({message:'`id guru  tidak ada`'})
        }

        const results = await db.query(
            `DELETE FROM guru WHERE id_guru=?`,id_guru)
            res.json(results)
    }catch (e){
        res.status(500).json({message:e.message})
    }
}

export default handler