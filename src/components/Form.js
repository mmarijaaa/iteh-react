import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import img from './images/quote1.jpeg'




//register koja polja zelimo da budu validirana
//errors object koji sadrzi sve greske
//useForme to generate a lot of stuff related to the form
//handleSubmit is the function that react hook form useForm will use to handle all the stuff prior to submitting
//insert input inside of the form to be a part of the validation - register
//sve sto dobijemo sa forme ce biti u obliku Objekta npr vraca ime Pera kao firstName 
//register kod inputa kao name 
//data uzimamo iz onSubmit zato sto ce nam to dati handleSubmit funkcija, tako radi ta fja u react hook form

const stilstranice = {
    height: 563 + "px",
    backgroundColor: "rgb(54, 85, 99)"
}

function Form() { 

    //nasa sema ce izgledati kao objekat tj nasi podaci-data ce izgledati kao objekat
    //shape fja prihvata objekat, specificirati oblik svakog objekta u semi 
    //resolver - tako treba da bude format nase forme
    //radi email samo ako ima @gmail.com

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
    };

    return (
        <div className="formasve" style={stilstranice}>
            <div className="form">

            <div className="inputs">
                <form className = "forma" onSubmit={handleSubmit(onSubmit)}>

                    <div className="inputnaslov">
                        Subscribe here and discover more of Van Goghs work! 
                    </div>

                    <div className="inputpolje">
                        <input className="inputpolje" type="text" placeholder="First Name..." {...register("firstName")} />
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

                    {/*<input type="text" placeholder="First Name..." {...register("firstName")} />
                    <p>{errors.firstName?.message}</p>
                    <input type="text" placeholder="Last Name..." {...register("lastName")}/>
                    <p>{errors.lastName?.message}</p>
                    <input type="text" placeholder="Email..." {...register("email")}/>
                    <p>{errors.email?.message}</p>
                    <input type="submit" id="submit" />*/}
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