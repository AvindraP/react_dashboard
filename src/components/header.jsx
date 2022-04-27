import React, {useState} from "react";

const Header = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000);

    let date = new Date().toDateString();

    return (
        <>
            {/* Navbar */}

            <nav
                className="navbar navbar-static-top"
                style={{backgroundColor: "#282727e3", paddingTop: "0px", paddingBottom: "0px"}}
            >
                {/* Left navbar links */}
                <ul className="navbar-nav ml-auto">
                    <a className="brand-link">
                        < img
                            style={{width: "65px", maxHeight: "63px"}}
                            src="dist/img/Islogo.jpg"
                            alt="AdminLTE Logo"
                            className="brand-image img-circle "
                        />
                        <span className="brand-text-font-weight-bold text-lg">
                        <h3 style={{color: "#FFF", marginTop: "11px"}}>
                        &nbsp; I&nbsp;S&nbsp;
                            &nbsp;D&nbsp;I&nbsp;S&nbsp;T&nbsp;R&nbsp;I&nbsp;B&nbsp;U&nbsp;T&nbsp;O&nbsp;R&nbsp;S&nbsp;&nbsp;(PVT)&nbsp;&nbsp;L&nbsp;T&nbsp;D
                        </h3>
                        </span>
                    </a>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}

                    {/* Messages Dropdown Menu */}
                </ul>
                <ul className="list-group">
                    <li className="list-group item font-weight-bold text-lg"
                        style={{marginRight: "2rem", marginLeft: "-2rem"}}>
                        <a style={{color: "#FFF", fontSize: "15px"}}>{date} </a>
                        <a style={{color: "#FFF"}}>{ctime} </a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
        </>
    );
};

export default Header;
