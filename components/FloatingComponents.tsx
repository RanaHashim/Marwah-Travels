'use client'
import Image from 'next/image';
import useState from "react";
import Email from "@mui/icons-material/Email";
import Button from "./Button";
import CallIcon from '@mui/icons-material/Call';
import Space from "./Space";
import { WhatsApp } from "@mui/icons-material";
export default function FloatingComponents() {


    return (
        <div className="flex" >
            <div
                className="fixed sm:bottom-5 bottom-2 sm:right-5  right-0 shadow-lg z-40"

            >
                <Button
                    onClick={() => { window.location.href = "tel:+16463599313"; }}


                    type="button"

                    child={<CallIcon />}
                    variant="btn_blue"
                />
                <Space h={10} />

                <Button
                    type="button"
                    onClick={() => { window.location.href = "/#inquiry"; }}


                    child={<Email />}
                    variant="btn_dark_green"
                />
            </div>
            <div
                className="fixed sm:bottom-5 sm:left-5 left-2 bottom-3 shadow-lg z-40"

            >
                <Button
                    onClick={() => { window.location.href = "/#customPackage"; }}
                    type="button"
                    title="Create Custom Package"
                    variant="btn_green"
                   
                />

            </div>
            <div
                className="fixed sm:bottom-2/4 bottom-2/4 shadow-lg z-40"

            >
            <a className='w-40 hover:w-300'>
                <Image
                    src={'/images/truspilot.png'}
                    alt=""
                    width={200}
                    height={48}
                    quality={80}
                    // className={"transition-opacity opacity-0 duration-[2s]"}
                    // onLoadingComplete={(image)=>image.classList.remove("opacity-0")}
                />
            </a>
            </div>

            <div
                className="fixed sm:top-8 sm:right-5 top-4 right-0 shadow-sm z-40"

            >

                <Button
                    onClick={() => { window.location.href = "https://api.whatsapp.com/send?phone="+"+16463599313"+"&text=*Salam*!%0AI%20would%20like%20to%20know%20about%20umrah%20packages"; }}
                    type="button"
                    child={<WhatsApp/>}
                    variant="btn_white"
                />
            </div>
        </div>
    )

}