import {db} from "../../lib/db"

const handler = async (req,res)=>{
    const {id,nama,alamat,tempatlahir,tanggallahir}=req.body

    try{
        if(!nama || !alamat || !tempatlahir || !tanggallahir){
            return res
            .status(400)
            .json({message:"isian tidak boleh kosong"})
        }

        const results = await db.query(
            `UPDATE guru set nama=?,alamat=?, tempat_lahir=?, tanggal_lahir=? where id_guru=? `,[nama,alamat,tempatlahir,tanggallahir,id]
        )

        return res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

export default handler