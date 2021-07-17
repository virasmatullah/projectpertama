import {db} from '../../lib/db'

const handler = async (req,res) => {
    const {nama,alamat,no_telepon,pesan} = req.body;
    try{
        if(!nama || !alamat || !no_telepon || !pesan){
            return res
            .status(400)
            .json({message:'input harus di isi semua'})
        }
        const results = await db.query(
            `INSERT INTO forum (id_forum,nama,alamat,no_telepon,pesan) VALUES ('',?,?,?,?)`,[nama,alamat,no_telepon,pesan]
        );
        await db.end

        return res.json(results)
    } catch (e){
        res.status(500).json({message:e.message});
    }
}


export default handler;