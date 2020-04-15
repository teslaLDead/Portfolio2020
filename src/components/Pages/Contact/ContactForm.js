import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import nextButton from './next button.svg';

class ContactForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            formNav:0,
            name:'',
            contactID:'',
            subject:'',
            message:'',
            displayMessage:[
                `
                Hi! <b>Lets start with a name.</b><br/>
                Your organization's name or yours.
    
                `,
                `
                <b>Something to contact you with.</b><br/>
                Your <b>email id</b> or your <b>phone number</b> with international code,
    
                `,
                `
                <b>Subject</b> of your message. <br/>
                Just write a simple Hi if you want to!
    
                `,
                `
                <b>Now lets get into details!</b><br/>
                Tell me about the job, the idea or your message.
    
                `,
                `
                Just a CAPTCHA to test if you're a bot or not.
    
                `,
                `
                <b>All done.</b>
    
                `,
            ]
        };
        
    }
    
    componentDidMount=()=>{
        document.addEventListener('keypress', (e)=> {
            
            if (e.key==='Enter' && e.shiftKey) this.prevFormElement()

            else if (e.key==='Enter') this.nextFormElement()
            

            
        })
    }
    
    nextFormElement=()=>{

        if(this.state.formNav<5)
        this.setState((state,props)=>({
            formNav:(state.formNav+1)
        }));
    }

    prevFormElement=()=>{

        if (this.state.formNav>0)
        this.setState((state,props)=>({
            formNav:state.formNav-1
        }))
    }

    handleNameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleContactIdChange=(event)=>{
        this.setState({
            contactID:event.target.value
        })
    }

    handleSubjectChange=(event)=>{
        this.setState({
            subject:event.target.value
        })
    }

    handleMessageChange=(event)=>{
        this.setState({
            message:event.target.value
        })
    }

    handleReCaptcha=(value)=> {
        console.log("Captcha value:", value);
      }

    handleFormSubmit=(event)=>{
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        const inputForms=[
            (
                <input type="text" className="contact-form-input" value={this.state.name} onChange={this.handleNameChange} placeholder="Name"/>
            ),(
                <input type="text" className="contact-form-input" value={this.state.contactID} onChange={this.handleContactIdChange} placeholder="Contact ID"/>
            ),
            (
                <input type="text" className="contact-form-input" value={this.state.subject} onChange={this.handleSubjectChange} placeholder="Subject"/>
            ),
            (
                <input type="text" className="contact-form-input" value={this.state.message} onChange={this.handleMessageChange} placeholder="Message"/>
            ),
            (
                <div>

               
                <ReCAPTCHA
                    sitekey="6LfPzukUAAAAAG9odfhGVML7VRos5SEiFaZp0d1e"
                    onChange={this.handleReCaptcha}
                />
                 </div>
            )
        ];
        return (
             <div id="contact-form-container">
                 <p className="my-5" dangerouslySetInnerHTML={{__html:this.state.displayMessage[this.state.formNav]}}>
                    
                </p>
                 <form onSubmit={this.handleFormSubmit} className="my-5">
 
                     <div className="d-flex contact-form flex-column position-relative">

                         {inputForms[this.state.formNav]}
                         <img id="contact-form-next-button" src={nextButton} alt="next form element" className="pointer" onClick={this.nextFormElement}/>
                     </div>
                     <div className="d-flex justify-content-space-between">
                     <p className="contact-form-instructions ">
                 Press <span>ENTER</span> for NEXT | <span>ENTER+SHIFT</span> for PREV
                 </p>
                 <p className="contact-form-instructions">
                     {this.state.formNav+1}/5
                 </p>
                     </div>
                     
                 </form>
                
             </div>
        );
    }

}

export default ContactForm;