'use client'
import {Video } from "lucide-react";
import { useRouter } from "next/navigation";
import Container from "./Container";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";


const  NavBar= () => {
    const router = useRouter();
    const {userId} = useAuth();

    return ( <div className="sticky top-0 border border-b-primary/10">
        <Container>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 cursor-pointer"onClick={()=>{router.push("/")}}>
                    <Video/>
                    <div className="font-bold text-xl">VidChat</div>
                </div>
                <div className="flex items-center gap-3">
                    <UserButton/>
                    {!userId && <>
                    <Button onClick={()=>{router.push("/sign-up")}} size="sm" variant="outline">Sign Up</Button>
                    <Button onClick={()=>{router.push("/sign-in")}} size="sm">Sign In</Button>
                    </>}
                </div>
            </div>
        </Container>
    </div>);
}
export default NavBar;