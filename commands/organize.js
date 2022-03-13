const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}


function organize(srcPath){
        //1. to check if srcPath is present
    if(srcPath == undefined){
//  The process.cwd() method returns the current working directory of the Node.js process.
        srcPath = process.cwd();

    }
    //2. to create a directory-> organized_files
  // let organizedFiles = srcPath + "/" + "organized_files";

    let organizedFiles = path.join(srcPath , "organized_Files");

    if(fs.existsSync(organizedFiles) ==false){
        fs.mkdirSync(organizedFiles);
    }else{
        console.log("The file is Already exists");
    }
  
    // 3. scan the entire directory ->read the files of the directory

    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    // 4. traverse all the file and classify on the basis of the extensions

    for(let i = 0 ; i < allFiles.length; i++){

       let ext = path.extname(allFiles[i]);  // it returns the extensions of the files
       console.log(ext);
    }


}
let srcPath = "E:/project - 1/downloads"
organize(srcPath);