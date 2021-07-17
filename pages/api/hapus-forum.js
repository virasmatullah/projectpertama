import {db} from '../../lib/db'

const handler = async (req,res) =>{
    const {id_forum} = req.query
    try{
        if(!id_forum){
            return res.status(400).json({message:'`id forum  tidak ada`'})
        }

        const results = await db.query(
            `DELETE FROM forum WHERE id_forum=?`,id_forum)
            res.json(results)
    }catch (e){
        res.status(500).json({message:e.message})
    }
}

export default handler