/* eslint-disable react-hooks/exhaustive-deps */
// @flow strict
"use client";

import { MdAccountCircle, MdDataObject } from "react-icons/md";
import { useEffect, useState } from "react";
import { LockKeyhole, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CreateAccountForm from "@/components/form/create-account-form";
import LoginAccountForm from "@/components/form/login-account-form";
import { AccountProps, AccountResponse } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import PiLockKeyFill from "lucide-react"

const ManageAccount = () => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"login" | "create">("create");
  const [accounts, setAccounts] = useState<AccountProps[]>([]);
  const [currentAccount, setCurrentAccount] = useState<AccountProps | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const { data: session }: any = useSession();

  useEffect(() => {
    const getAllAccounts = async () => {
      try {
        const { data } = await axios.get<AccountResponse>(
          `/api/account?uid=${session?.user?.uid}`
        );
        console.log(data);
        data.success && setAccounts(data.data as AccountProps[]);
      } catch (e) {
        return toast({
          title: "Error",
          description: "An error occurred while fetching your accounts",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    getAllAccounts();
  }, [session]);

  return (
    <div
      className={
        "min-h-screen flex justify-center flex-col items-center relative"
      }
    >
      <div className={"flex justify-center flex-col items-center"}>
        <h1 className={"text-white font-bold text-5xl my-12"}>
          Who`s watching?
        </h1>
        {/* Who`s watching? */}
        <ul className={"flex p-0 my-12"}>
          {/* GET ACCOUNT */}
          {accounts.map((account) => (
            <li
              key={account._id}
              onClick={() => {
                setOpen(true);
                setState("login");
              }}
              className={
                "max-w-[200px] w-[155ppx] cursor-pointer flex flex-col items-center gap-3 min-w-[200px]"
              }
            >
              <div className="relative">
                <div className="border bg-[#e5b109] font-bold text-xl border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justfiy-center items-center">
                  <MdDataObject className="w-20 h-20 font justfiy-center" />
                </div>
                {!isDelete ? (
                  <div
                    className={
                      "absalute transform bottom-0 z-10 cursor-pointer justify-center"
                    }
                  >
                    <Trash2 className={"w-8 h-8 text-red-600"} />
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-mon font-bold text-xl">
                  {account.name}
                </span>
                {/* <PiLockKeyFill className={"w-6 h-6 text-black-300"} /> */}
              </div>
            </li>
          ))}
          {/* ADD ACCOUNT */}
          <li
            onClick={() => {
              setOpen(true);
              setState("create");
            }}
            className="border bg-[#e5b109] font-bold text-xl border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justfiy-center items-center"
          >
            <span className="font-mon font-bold text-xl">Add account</span>
            <MdAccountCircle />
          </li>
        </ul>

        <Button
          onClick={() => setIsDelete((prev) => !prev)}
          className="bg-transparent rounded-none hover::bg-transparent !text-white font font-bold border border-gray-100 cursor-pointer tracking-wide inline-flex text-sm px-[1.5em] py-[0.5em]"
        >
          Manage Profiles
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {state === "create" && (
            <CreateAccountForm
              uid={session?.user?.uid}
              setOpen={setOpen}
              setAccounts={setAccounts}
              accounts={accounts}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageAccount;

function setIsLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}
