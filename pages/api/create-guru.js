import {db} from '../../lib/db'

const handler = async (req,res) => {
    const {nama,alamat,tempatlahir,tanggallahir} = req.body;
    try{
        if(!nama || !alamat || !tempatlahir || !tanggallahir){
            return res
            .status(400)
            .json({message:'input harus di isi semua'})
        }
        const results = await db.query(
            `INSERT INTO guru (id_guru,nama,alamat,tempat_lahir,tanggal_lahir) VALUES ('',?,?,?,?)`,[nama,alamat,tempatlahir,tanggallahir]
        );
        await db.end

        return res.json(results)
    } catch (e){
        res.status(500).json({message:e.message});
    }
}


export default handler;