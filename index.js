const fs = require('fs');
const http = require("http");
const archiver = require('archiver');
require("dotenv").config();
const PORT = process.env.PORT || 3000;



const server = http.createServer((req, res) =>{
    if(req.url === '/' && req.method === "GET"){
        req.write("Home");
        req.end()
    }
    let downloadUrl = req.url.replace('/api/downloads/?', '');
    console.log(downloadUrl);
    http.get(downloadUrl, (res)=>{
        if(!downloadUrl){
            throw err
            res.end(new Error(err))
        }
        const downloadFolder = process.env.USERPROFILE + "/Downloads";
        const path = `${downloadFolder}/img.zip`;
        const write = fs.createWriteStream(path);
        const archive = archiver("zip",{
            zlib: { level: 9 }
        });
        write.on('close', function() {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
        });
        write.on('end', function() {
            console.log('Data has been drained');
        });
        archive.pipe(write);
        res.pipe(write);
    })
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Server started on : ${PORT}`)
})









