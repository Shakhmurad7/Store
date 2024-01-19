import Navbar from "../assets/layout/Navbar"
import Header from "../assets/layout/header"

function PageContainer(a:any) {
  return (
    <>
    <Header/>
    <Navbar/>
    <main>{a.children}</main>
    </>
  )
}

export default PageContainer