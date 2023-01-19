import { Footer } from './footer/Footer'
import { Nav } from './nav/Nav'

function Layout(children) {
    return (
        <>
            <Nav></Nav>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout