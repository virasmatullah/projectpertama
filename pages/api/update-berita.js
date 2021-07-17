import {db} from "../../lib/db"

const handler = async (req,res)=>{
    const {id,judul,deskripsi,tanggalrilis,foto}=req.body

    try{
        if(!judul || !deskripsi || !tanggalrilis){
            return res
            .status(400)
            .json({message:"isian tidak boleh kosong"})
        }

        const results = await db.query(
            `UPDATE berita set judul=?,deskripsi=?,tgl_rilis=?,foto=? where id_berita=? `,[judul,deskripsi,tanggalrilis,foto,id]
        )

        return res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

export default handler