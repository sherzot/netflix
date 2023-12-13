"use client"

import { redirect } from 'next/navigation';
import * as React from 'react';

const Page = () => {
    return redirect('/browse')
};

export default Page;