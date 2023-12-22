"use client"
import { createAccountSchema } from '@/lib/validation';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

const CreateAccountForm = () => {
    const form = useForm<z.infer<typeof createAccountSchema>>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {name: "", pin:""}
    })
    return (
        <>
            <h1 className='text-white text-center font-bold text-3xl'>
                Create your account
            </h1>
        </>
    );
};

export default CreateAccountForm;