import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            subject:'',
            message:''
        }
        this.handleSubjectChange=this.handleSubjectChange.bind(this);
        this.handleMessageChange=this.handleMessageChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubjectChange(event){
        this.setState({subject:event.target.value});
    }
    handleMessageChange(event){
        this.setState({message:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return(
            <div className="dark-theme">
                <div className="section-heading mt-5">
                    Contact
                </div>
                <h1>
                I am looking for new <br />
                and exciting challenges
                </h1>
                <div className="row">
                    <div className="col-1 col-m-4">
                        <div className="section-heading">
                            Find me on
                        </div>
                        <ul>
                            <li className=" py-5">
                                <a href="https://github.com/teslaLDead" target="_blank" rel="noopener noreferrer"  className="bold">Github</a>
                            </li>
                            <li className="my-5 py-5">
                                <a href="https://www.linkedin.com/in/paritosh-kumar-teslaldead/" target="_blank"  rel="noopener noreferrer" className="bold">LinkedIn</a>
                            </li>
                            <li className="my-5 py-5">
                                <a href="https://www.behance.net/teslaldead" target="_blank" rel="noopener  noreferrer" className="bold">Behance</a>
                            </li>
                            <li className="my-5 py-5">
                                <a href="https://www.facebook.com/paritosh.kumar.20" target="_blank" rel= "noopener noreferrer" className="bold">Facebook</a>
                            </li>
                            <li className="my-5 py-5">
                                <a href="https://codepen.io/teslaLdead" target="_blank" rel="noopener noreferrer"  className="bold">CodePen</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 col-m-4">
                        <div className="section-heading">
                            Start a Conversation
                        </div>
                        <ContactForm />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Contact;