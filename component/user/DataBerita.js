//@ts-check
import {useDataBerita} from '../../lib/swr-fetch'
import Link from 'next/link'

const DataBerita = () =>{
    const {data,error} = useDataBerita();
    if(error){
        return <div>error loading</div>
    }
    if(!data){
        return <div>sedang loading</div>
    }


    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-12">
                    <h3> BERITA</h3>
                </div>
                {data.map((berita,index)=>[
                    <div className="col-md-4">
                        <div className="card">
                            <div style={{height:"200px",overflow:"hidden"}}>
                                <img src={berita.foto} className="card-img-top"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{berita.judul}</h5>
                                <p className="card-text"></p>
                                <Link href={`/user/detailberita?id_berita=${berita.id_berita}`}><a className="btn btn-primary">Lihat Detail</a></Link>
                            </div>
                        </div>
                    </div>
                ])}
                </div>
                
                
            </div>
        </div>
    )
}


export default DataBerita