import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import img from './images/quote1.jpeg'



const stilstranice = {
    paddingTop: 50 + "px",
    paddingBottom: 50 + "px",
    backgroundColor: "rgb(54, 85, 99)"
}

function Form() { 

    const sema = yup.object().shape({
        firstName: yup.string().required("Your first name is reqired!"),
        lastName: yup.string().required("Your last name is required!"),
        email: yup.string().email("Your email is not properly written!").required("Your email is required!")
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(sema),
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("You subscribed successfully!");
    };

    return (
        <div className="formasve" style={stilstranice}>
            <div className="form">

            <div className="inputs">
                <form className = "forma" id = "frm" onSubmit={handleSubmit(onSubmit)}>

                    <div className="inputnaslov">
                        Subscribe here and discover more of Van Goghs work! 
                    </div>

                    <div className="inputpolje">
                        <input className="inputpolje" type="text" id="txt" placeholder="First Name..." {...register("firstName")} />
                    </div>
                            <p>{errors.firstName?.message}</p>
                    <div className="inputpolje">
                        <input  className="inputpolje" type="text" placeholder="Last Name..." {...register("lastName")}/>
                    </div>
                            <p>{errors.lastName?.message}</p>
                    <div className="inputpolje">
                        <input  className="inputpolje" type="text" placeholder="Email..." {...register("email")}/>
                    </div>
                            <p>{errors.email?.message}</p>
                    <div className="inputdugme">
                        <input className = "submitdugme" type="submit" id="submit" value = "SUBSCRIBE"/>
                    </div>

                </form>
            </div>

            <div className="slikavangogh" >
                <img className="slikaforma" src={img} />
            </div>

            </div>
        </div>
    )
}

export default Form;