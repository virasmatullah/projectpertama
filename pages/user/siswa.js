//@ts-check
import UserLayout from "../../component/user/UserLayout"
import DataSiswa from "../../component/user/DataSiswa"


const siswa = () =>{
    return (
        <div>
            <UserLayout>
                <DataSiswa/>
            </UserLayout>
        </div>
    )
}


export default siswa