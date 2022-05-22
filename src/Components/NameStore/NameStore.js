import React from 'react';
import logo1 from '../Assets/img/logo3.jpg'
import './NameStore.css'

export default function NameStore () {
    return (
        <>  
            <div className='title'>
                <div className='titlea'>
                    <img src={logo1} alt='imagen'/>
                </div>
                <div className='titleb'>
                    <h1>Wines</h1>
                </div>
            </div>
        </>
    )
}