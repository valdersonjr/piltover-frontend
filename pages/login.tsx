import React, { useState } from "react";
import { ILoginForm } from "../model";


const Login:React.FC = () => {
    const [inputs, setInputs] = useState<ILoginForm>({
        email: '',
        password: ''
    });

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const handleFormSubmit = (event:any) => {
        event.preventDefault();
        console.log(inputs);
        
        return;
    }

    return(
        <div className="w-screen h-screen bg-slate-700 flex flex-col items-center justify-center  gap-10">
            <h2 className="text-white text-5xl font-bold">Piltover Services</h2>
            <div className="p-10 w-[30vw] h-[35vw] bg-white flex flex-col items-center justify-around">
                <img width={150} src="../../assets/diannaChibi.png" alt="img of dianna chibi" />
                <form className="w-[90%] flex flex-col gap-4" onSubmit={(event) => handleFormSubmit(event)}>
                    <div className="flex flex-col">
                        <span className="text-xl text-slate-700">Email:</span>
                        <input  onChange={(event) => handleChange(event)} name="email" type="text" placeholder="piltover@services.job" value={inputs.email} className="border-slate-700 border-2 px-4" required />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl text-slate-700">Senha:</span>
                        <input  onChange={(event) => handleChange(event)} name="password" placeholder="*************" value={inputs.password} type="password" className="border-slate-700 border-2 px-4"/>
                    </div>        
                    <button type="submit" className="py-2 text-white bg-slate-700 text-xl hover:text-slate-700 hover:bg-slate-400">Entrar</button>            
                </form>                
            </div>
        </div>
    )
}

export default Login;