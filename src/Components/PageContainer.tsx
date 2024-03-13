import Header from "../layout/Header/header"
function PageContainer(a:any) {
  return (
    <>
    <Header/>
    <main>{a.children}</main>
    </>
  )
}

export default PageContainer