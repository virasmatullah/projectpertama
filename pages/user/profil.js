import UserLayout from "../../component/user/UserLayout"

const profil = ()=>{
    return (
        
        <div>
            <UserLayout>
            <div className="container py-5">
                <div className="container">
                    <h3>PROFIL</h3>
                    <div className="text-center mb-3">
                        <img src="https://2.bp.blogspot.com/-hK8ghhQjJvY/VxuT0L8rz1I/AAAAAAAAW_k/wKz84QxhN0oxHFBiU8m9aW8g6e9q5CMzwCLcB/s1600/Logo%2BTaman%2BKanak%2BKanak.png" className="img-fluid" style={{width:"200px"}} alt="" />
                    </div>
                    <table className="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <td><b> Nama Sekolah</b></td>
                                <td>TKIT AL USWAH BANYUWANNGI</td>
                            </tr>
                            <tr>
                                <td><b>Alamat</b></td>
                                <td>Banyuwangi - Rogojampi </td>
                            </tr>
                            <tr>
                                <td><b>NPSN</b></td>
                                <td>1117101457</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </UserLayout>
        </div>
    )
}


export default profil