import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div>
                <h1>
                I am looking for new <br />
                and exciting challenges
                </h1>
                <div>
                    <div>
                        <h2>
                            Find me on
                        </h2>
                        <ul>
                            <li>
                                <a href="" >LinkedIn</a>
                            </li>
                            <li>
                                <a href="" >Github</a>
                            </li>
                            <li>
                                <a href="" >Behance</a>
                            </li>
                            <li>
                                <a href="" >Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="section-heading">
                            Write to me
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <label>
                                    Subject
                                </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>
                                    Message
                                </label>
                                <input type="paragraph" />
                            </div>
                            <div>
                                <button>Send</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;