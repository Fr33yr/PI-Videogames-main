import Footer from './footer/Footer'
import Nav from './nav/Nav'

export default function Layout(props) {
    const { children } = props
    return (
        <>
            <Nav></Nav>
            {children}
            <Footer></Footer>
        </>
    )
}
