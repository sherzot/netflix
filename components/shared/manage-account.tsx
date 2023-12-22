// @flow strict

import * as React from 'react';
import { MdDataObject } from "react-icons/md";
import { Trash2 } from 'lucide-react';
import { PiLockKeyFill } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from "@/components/ui/dialog";

function ManageAccount() {

    const [isDelete, setIsDelete] = React.useState<boolean>(false)
    const [open, setOpen] = React.useState(false)
    return (
        
        <div className={"min-h-screen flex justify-center flex-col items-center relative"}>
            <div className={"flex justify-center flex-col items-center"}>
                <h1 className={"text-white font-bold text-5xl my-12"}>Who`s watching?</h1>
                {/* Who`s watching? */}
                <ul className={"flex p-0 my-12"}>
                    {/* GET ACCOUNT */}
                    <li className={"max-w-[200px] w-[155ppx] cursor-pointer flex flex-col items-center gap-3 min-w-[200px]"}>
                        <div className='relative'>
                            <div className='border bg-[#e5b109] font-bold text-xl border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justfiy-center items-center'>
                                <MdDataObject className='w-20 h-20 font justfiy-center'/>
                            </div>
                            {!isDelete ? (
                                <div className={"absalute transform bottom-0 z-10 cursor-pointer justify-center"}>
                                    <Trash2 className={"w-8 h-8 text-red-600"}/>
                                </div>
                            ) : null}
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-mon font-bold text-xl'>Sher_Dev</span>
                            <PiLockKeyFill className={"w-6 h-6 text-black-300"}/>
                        </div>
                    </li>
                    {/* ADD ACCOUNT */}
                    <li 
                        onClick={() => setOpen(true)}
                        className='border bg-[#e5b109] font-bold text-xl border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justfiy-center items-center'>
                        <span className='font-mon font-bold text-xl'>Add account</span>
                        <MdAccountCircle/>
                    </li>
                </ul>
                
                <Button 
                onClick={() => setIsDelete(prev => !prev)}
                className='bg-transparent rounded-none hover::bg-transparent !text-white font font-bold border border-gray-100 cursor-pointer tracking-wide inline-flex text-sm px-[1.5em] py-[0.5em]'>
                     Manage Profiles
                </Button>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    Modal
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ManageAccount;