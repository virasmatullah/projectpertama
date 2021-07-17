import {db} from '../../lib/db'

const handler = async (req,res) => {
    const {nama,kelas,alamat,tempatlahir,tanggallahir,status,tahunmasuk} = req.body;
    try{
        if(!nama || !kelas || !alamat || !tempatlahir || !tanggallahir || !status || !tahunmasuk){
            return res
            .status(400)
            .json({message:'input harus di isi semua'})
        }
        const results = await db.query(
            `INSERT INTO siswa (id_siswa,nama,kelas,alamat,tempat_lahir,tanggal_lahir,status,tahun_masuk) VALUES ('',?,?,?,?,?,?,?)`,[nama,kelas,alamat,tempatlahir,tanggallahir,status,tahunmasuk]
        );
        await db.end

        return res.json(results)
    } catch (e){
        res.status(500).json({message:e.message});
    }
}


export default handler;