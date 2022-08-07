import React from 'react';
import logoTeste from "../../assets/CebasVetorizado.png";


const Home = () => {
    return (
        <>
            <div className='home'>
                <div className="col-12 text-center">
                    <img src={logoTeste} alt="logo" style={{minHeight:"100%"}}/>
                    <p style={{ textAlign:"center", fontSize:"20px", padding:"30px"}}>
                        Documentação - CEBAS Educação
                    </p>
                </div>
            </div>
            <p  style={{ textAlign:"center", fontSize:"17px", padding:"30px"}}>
                Essa é uma solução desenvolvida pela CGS/STIC.
            </p>
        </>

    );
};

export default Home;