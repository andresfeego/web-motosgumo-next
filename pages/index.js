import styles from './Index.module.scss'
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ListIcon from '@material-ui/icons/List';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Head from 'next/head'

import AdminItems from '../Components/AdminItems/AdminItems';
import { useState } from 'react';
import AdminMarcas from '../Components/AdminMarcas/AdminMarcas';


const Index = () => {

    const [menuStatus, setMenuStatus ] =  useState("0")

    function renderContenido(){
        switch (menuStatus) {

            case 1:
                return <AdminMarcas />;
            break;

            case 4:
                return <AdminItems />;
            break;


        
            default:
                return <span>Sin información en menu</span>
                break;
        }
    }

    return (
        <div className={styles.contenedor}>
            <Head lang="ES">
                <title>GUMO | Administración</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className={styles.arriba}>
                <img alt="" src={require("../scrAppServer/images/fondo_header.png")} className={styles.fondo_header} />
                <img alt="" src={require("../scrAppServer/images/logo_Gumo.png")} className={styles.logo} />
                
            </div>

            <div className={styles.abajo}>
                <div className={styles.menu}>
                    <div className={styles.fondo} />
                    
                    <div className={styles.menuItem} onClick={() => setMenuStatus(1)}>
                        <div className={styles.iconMenuItem}>
                            <VerifiedUserIcon  />
                        </div>
                        <span>Marcas</span>
                    </div>

                    <div className={styles.menuItem} onClick={() => setMenuStatus(2)}>
                        <div className={styles.iconMenuItem}>
                            <MotorcycleIcon  />
                        </div>
                        <span>Motos</span>
                    </div>

                    <div className={styles.menuItem} onClick={() => setMenuStatus(3)}>
                        <div className={styles.iconMenuItem}>
                            <ChatBubbleIcon  />
                        </div>
                        <span>Comentarios</span>
                    </div>

                    <div className={styles.menuItem} onClick={() => setMenuStatus(4)}>
                        <div className={styles.iconMenuItem}>
                            <ListIcon  />
                        </div>
                        <span>Items</span>
                    </div>


                </div>

                <div className={styles.contenido}>
                    {renderContenido()}
                </div>

            </div>
        </div>

    )

}

export default Index