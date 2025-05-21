import React from "react"; //mh aparaithto to import react meta thn ekdosh 19
import Header from "./Header";
import Footer from "./Footer";


interface LayoutProps{
    children:React.ReactNode;
}

const Layout = ({children}:LayoutProps) =>{
    return(
        <>
            <Header/>
            <div className="container mx-auto min-h-[95vh] pt-24">
                {children}
            </div>
            <Footer/>
        </>
    )
}
export default Layout;