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

      let fullPathOfFile = path.join(srcPath , allFiles[i]);
      //1. check if it is a file or folder

      let isFile = fs.lstatSync(fullPathOfFile).isFile();
      //lstatsync gives the information regarding the link provided ,
      if(isFile){
        //1.1 get ext name
        let ext = path.extname(allFiles[i]).split(".")[1];
        //1.2 get folder name from extension
        let folderName = getFolderName(ext);

        //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                    //copy      kya copy kro    paste 
        copyFileToDest(srcPath, fullPathOfFile, folderName);



      }
    }


}

function getFolderName(ext) {
  
    //magic 

   for (let key in types){


    for(let i = 0 ; i <types[key].length ; i++){

        if(types[key][i] == ext){

            return key;
        }
    }

   }
   return "miscelleneous"; 
  }
  
  function copyFileToDest(srcPath, fullPathOfFile, folderName) {
    
    //1. folderName ka path banana h

    let destFolderPath = path.join(srcPath , "organized_files",folderName);

    //2 check folder if exists, if it does not, then make folder

    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }



    let fileName = path.basename(fullPathOfFile);
    let destFileName = path.join(destFolderPath , fileName);

    fs.copyFileSync(fullPathOfFile , destFileName);
    // fs.unlinkSync(srcPath);
    //magic 
  }


// let srcPath = "E:/project - 1/downloads"
// organize(srcPath);

module.exports = {
    organize:organize
  }