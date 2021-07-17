//@ts-check
import {useDataBeritaDetail} from '../../lib/swr-fetch'
import Router, {useRouter} from 'next/router'
const Detailberita = ()=>{

    // mengambil data yang dikirim melalui router
    const router = useRouter();
    const {id_berita} =router.query;

    const {data,error} = useDataBeritaDetail(id_berita);
    if(error){
        return <div>error loading</div>
    }
    if(!data){
        return <div>sedang loading</div>
    }

    return(
        <div>
            <div className="container mt-4">
                <div className="row justify-content-md-center">
                    <div className="col-md-9">
                        {data.map((guru,index)=>[
                        <div>
                            <h1>{guru.judul}</h1>
                            <div style={{width:"100%",height:"400px",textAlign:"center",backgroundColor:"#eee"}}>
                                <img src={guru.foto} className="img-fluid" style={{height:"400px"}}/>
                            </div>
                            <p className="mt-2">{guru.deskripsi}</p>
                        </div>
                        
                        ])}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Detailberita