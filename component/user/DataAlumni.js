//@ts-check
import { useDataAlumni } from "../../lib/swr-fetch"

const DataAlumni = () =>{
    const {data,error} = useDataAlumni();
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
                <h3>DATA ALUMNI</h3>
                <div className="row">
                    {data.map((alumni,index)=>[
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{alumni.nama}</h5>
                                    <p className="card-text">{alumni.alamat}</p>
                                </div>
                            </div>
                        </div>
                    ])}
                </div>
            </div>
        </div>
    )
}

export default DataAlumni