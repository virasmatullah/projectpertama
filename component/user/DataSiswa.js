//@ts-check
import { useDataSiswa } from "../../lib/swr-fetch"

const DataSiswa = () =>{
    const {data,error} = useDataSiswa();
    if(error){
        return <div>error loading</div>
    }
    if(!data){
        return <div>sedang loading</div>
    }

    console.log(data)


    return (
        <div>
            <div className="container mt-4">
                <h3>DATA SISWA</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {data.map((siswa,index)=>[
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{siswa.nama}</h5>
                                            <p className="card-text">{siswa.alamat}</p>
                                        </div>
                                    </div>
                                </div>
                            ])}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DataSiswa