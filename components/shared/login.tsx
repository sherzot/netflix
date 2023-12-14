"use client"

import * as React from 'react';
import Image  from 'next/image';

const Login = () => {
    return (
        <div className={"w-full h-screen"}>
            <div className={"absolute inset-0"}>
               <Image src = {"https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"} 
               alt = {"bg"} 
               fill
               />
            </div>
            Login Component
        </div>
    );
};

export default Login;