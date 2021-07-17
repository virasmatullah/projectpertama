//@ts-check
import { useDataGuru } from "../../lib/swr-fetch"

const DataGuru = () =>{
    const {data,error} = useDataGuru();
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
                <h3>DATA GURU</h3>
                <div className="row">
                    {data.map((guru,index)=>[
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{guru.nama}</h5>
                                    <p className="card-text">{guru.alamat}</p>
                                </div>
                            </div>
                        </div>
                    ])}
                </div>
            </div>
        </div>
    )
}

export default DataGuru 