const fs = require('fs');
const http = require("http");
const zlib = require('zlib');
require("dotenv").config();
const PORT = process.env.PORT || 3000;



const server = http.createServer((req, res) =>{
    // let downloadUrl = req.url;
    let downloadUrl = req.url.replace('/api/downloads/?', '');
    console.log(downloadUrl);
    // const downloadPath = "C:/Users/L-64_E5570/Downloads/downloaded-image.png.gz";
    // const write = fs.createWriteStream(downloadPath);
    // const zip = zlib.createGzip();
    // res.pipe(zip).pipe(write);
    // res.end()
    http.get(downloadUrl, (res)=>{
        const path = "C:/Users/L-64 E5570/Downloads/downloaded-image.png.gz";
        const write = fs.createWriteStream(path);
        const zip = zlib.createGzip();
        res.pipe(zip).pipe(write);
    })
    res.end()
})


    //     }
    // }


server.listen(PORT, ()=>{
    console.log(`Server started on : ${PORT}`)
})

// const url = "https://sebhastian.com/img/default.png";

    // https.get(url, (res)=>{
    //         const path = "downloaded-image.png";
    //         const filePath = fs.createWriteStream(path);
    //         res.pipe(filePath);
    //         filePath.on('finish',() => {
    //             filePath.close();
    //             console.log('Download Completed');
    //         })
    // })








