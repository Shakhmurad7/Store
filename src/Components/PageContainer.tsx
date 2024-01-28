import Header from "../layout/Header/header"
import Navbar from "../layout/Navbar/Navbar"


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