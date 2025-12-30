import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function FormInput(props) {



    const { nameLb, Inptype, value } = props;


    return (
        <div className='container-fluid'>


            <label htmlFor="">{nameLb}</label><br />
            <input type={Inptype} value={value} />




        </div>
    );
}
