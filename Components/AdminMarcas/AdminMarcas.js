
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import styles from './AdminMarcas.module.scss'
import { useState, useEffect } from 'react';
import AgregarMarca from './AgregarMarca';



const AdminMarcas = () => {

    const [listaMarcas, setListaMarcas ] =  useState([])
    //https://stackoverflow.com/questions/11744975/enabling-https-on-express-js
   const getMarcas = async () => {
        const resMarcas = await fetch(process.env.HOST_NAME + '/marcas')
        const marcasJson = await resMarcas.json()
        setListaMarcas(marcasJson)
    }

    useEffect(() => {
        getMarcas()
    }, [] )

    
    return (
        <div className="containerVentana">
            <AgregarMarca getMarcas={getMarcas}/>
            <div className={styles.adminMarcas}>
                    {listaMarcas.length}
            </div>
        </div>
    )
}





export default AdminMarcas