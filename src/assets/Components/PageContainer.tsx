import Header from "../layout/header"

function PageContainer(a:any) {
  return (
    <>
    <Header/>
    <main>{a.children}</main>
    </>
  )
}

export default PageContainer