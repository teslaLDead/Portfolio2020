import React from "react";
import {Link} from "react-router-dom";


function Footer(){
    return(
        <div>
            <div className="section-heading">
                Contact
            </div>
            <div className="row">
                <div className="col-3 col-m-4">
                    <h2>
                    I am looking for new <br/>
                    and exciting challenges.
                    </h2>
                    <a href="mailto:kumar.paritosh20@gmail.com?subject=Like%20to%20connect" ><b>kumar.paritosh20@gmail.com</b></a>
                </div>
                <div >
                    <div className="d-flex flex-column">
                        <Link className="my-5">
                            <b>About</b>
                        </Link>

                        <Link className="my-5">
                            <b>Work</b>
                        </Link>

                        <Link className="my-5">
                            <b>Blog</b>
                        </Link>

                        <Link className="my-5">
                            <b>Resume</b>
                        </Link>

                    </div>
                </div>
            </div>
            <div>
                <a href="https://github.com/teslaLDead">Github</a>
                <a href="https://www.linkedin.com/in/paritosh-kumar-teslaldead/">LinkedIn</a>
                <a href="https://www.behance.net/teslaldead">Behance</a>
                <a href="https://www.facebook.com/paritosh.kumar.20">Facebook</a>
            </div>
            <div>
                <p>Made with &#60;&#92;&#62; by Paritosh Kumar. Circa 2020.</p>
            </div>

        </div>
    )
}

export default Footer;