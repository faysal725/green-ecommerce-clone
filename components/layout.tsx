import Navbar from "./partials/navbar";

type LayoutProps = {
    children: React.ReactNode,
}
  
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main className="font-sans">{children}</main>
        </>
    )
}

export default Layout