import {db} from '../../lib/db'


const handler = async (_,res)=>{
    try{
        const results = await  db.query(
            `SELECT * from forum ORDER BY id_forum ASC`
        );
        await db.end;

        return res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}


export default handler