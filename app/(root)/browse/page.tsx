"use client"

import * as React from 'react';
import { useGlobalContext } from '@/context';
import Login from '@/components/shared/login';
import { useSession } from 'next-auth/react';

const Page = ()=>  {
   const {account} = useGlobalContext();
   const {data: session} = useSession()
   console.log(session);
   
   if (session === null) return <Login/>
    //if (account === null) return <Login/>

    return (
        <div>
            Browse Page
        </div>
    );
};

export default Page;