import mysql from 'serverless-mysql'


export const db = mysql({
    config :{
        host : 'localhost',
        database : 'portal_berita',
        user: 'root',
        password :'',
        port : parseInt(3306)
    }
})