import Navbar from "../layout/Navbar"
import Header from "../layout/header"

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