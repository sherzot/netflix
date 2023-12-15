"use client"

import * as React from 'react';
import { useGlobalContext } from '@/context';
import Login from '@/components/shared/login';

const Page = ()=>  {
   const {account} = useGlobalContext();
    if (account === null) return <Login/>

    return (
        <div>
            Browse Page
        </div>
    );
};

export default Page;