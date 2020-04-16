import React from "react";
import illustration from './404illustration.svg';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

function Page404(props) {
    return(
        <div className="dark-theme py-5 mb-5" style={{
            paddingTop:"50px"
        }}>
            <Helmet>
                    <title>404 - Page Not Found</title>
            </Helmet>
            
                <div className="section-heading ">
                    404
                </div>
                <div className="row py-5 my-5">
                <div className="col-2 col-m-4">
                    <h1>
                        Page Not Found
                    </h1>
                    <p>The page that your were looking for does'nt exist.</p>
                    <Link to="/"><b>Go Back To Home</b></Link>
                </div>
                <div className="text-center col-2 col-m-4">
                    <img src={illustration} alt="404" />
                </div>
                
            
            </div>
            
            
        </div>
    )
}

export default Page404;