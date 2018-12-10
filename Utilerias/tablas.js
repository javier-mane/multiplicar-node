const fs = require('fs');


let creaArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        
        if (!Number(base)){
            reject(`La base "${base}" no es un número`);
            return;
        }

        if (!Number(limite)){
            reject(`El limite "${limite}" no es un número`);
            return;
        }
         
        let data = '';

        for (let i = 1; i<= limite; i++){
            data += `${base} x ${i} = ${base * i}\n ` 
        };

        fs.writeFile(`./Tablas/Tabla del ${base} al ${limite}.txt`, data, (err) => {
            if (err) 
                 reject(err);
            else {
                resolve(`Tabla del ${base} al ${limite}.txt`)
            }
        });
        
    })
};

let  listarTabla= (base, limite=10) => {
    let data = '';

    for (let i = 1; i<= limite; i++){
        console.log(  `${base} x ${i} = ${base * i} `); 
    };
}

module.exports = {
    creaArchivo,
    listarTabla
}



