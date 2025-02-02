
function Header(){
    return(
        <header>
            <nav className="nav">
                <ul className="d-flex flex-column list-unstyled">
                    <h1>Unga Bunga</h1>
                    <a className ="btn btn-success" href="#" role="button">Sign up</a>
                    <a className ="btn btn-success" href="#" role="button">Log in</a>
                    <a className ="btn btn-success" href="#" role="button">explore</a>
                    <a className ="btn btn-success" href="#" role="button">Service</a>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;