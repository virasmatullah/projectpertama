import {db} from "../../lib/db"

const handler = async (req,res)=>{
    const {id,nama,kelas,alamat,tempatlahir,tanggallahir,status,tahunmasuk}=req.body

    try{
        if(!nama || !kelas || !alamat || !tempatlahir || !tanggallahir || !status || !tahunmasuk){
            return res
            .status(400)
            .json({message:"isian tidak boleh kosong"})
        }

        const results = await db.query(
            `UPDATE siswa set nama=?,kelas=?,alamat=?, tempat_lahir=?, tanggal_lahir=?, status=?, tahun_masuk=? where id_siswa=? `,[nama,kelas,alamat,tempatlahir,tanggallahir,status,tahunmasuk,id]
        )

        return res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

export default handler