import {db} from '../../lib/db'

const handler = async (req,res) => {
    const {judul,deskripsi,tanggalrilis,foto} = req.body;
    try{
        if(!judul || !deskripsi || !tanggalrilis){
            return res
            .status(400)
            .json({message:'input harus di isi semua'})
        }
        const results = await db.query(
            `INSERT INTO berita (id_berita,judul,deskripsi,tgl_rilis,foto) VALUES ('',?,?,?,?)`,[judul,deskripsi,tanggalrilis,foto]
        );
        await db.end

        return res.json(results)
    } catch (e){
        res.status(500).json({message:e.message});
    }
}


export default handler;