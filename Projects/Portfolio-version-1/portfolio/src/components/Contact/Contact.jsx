import Heading from "../../common/Heading/Heading"
import styles from "./Contact.module.css"
import Alert from "../../common/Alert/Alert";
import { useState } from "react"

export default function Contact()
{
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [msg, setMsg] = useState("");

    // const HandleOnName = (event) =>
    // {
    //     setName(event.target.value)
    // }

    // const HandleOnEmail = (event) =>
    // {
    //     setEmail(event.target.value)
    // }

    // const HandleOnMsg = (event) =>
    // {
    //     setMsg(event.target.value)
    // }

    // const HandleOnSubmit = (event) =>
    // {
    //     event.preventDefault();
    //     console.log(event.target);

    // }

    // Using External
    const [result, setResult] = useState("");

    const HandleOnSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "da96122a-ae25-480e-bfcc-a87266d0ecdc");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Form Submitted Successfully");
          event.target.reset();
        } 
        else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    //   


    return <div>
        <Heading headingname={"Contact"} />
        <div className={styles['form-container']} >
            {/* <form onSubmit={HandleOnSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Enter Your Name"  value={name} onChange={HandleOnName} />
                
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter Your email" value={email} onChange={HandleOnEmail} />
                
                <label htmlFor="msg">Message</label>
                <textarea id="msg" placeholder="Enter here" value={msg} onChange={HandleOnMsg}></textarea>

                <button type="submit" >submit</button>
            </form> */}

                <form className={styles.form} onSubmit={HandleOnSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Enter Your Name" name="name" autoComplete="off" required/>

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email"  placeholder="Enter Your email" name="email" autoComplete="off" required/>

                    <label htmlFor="msg">Message</label>
                    <textarea id="msg" placeholder="Enter here" name="message" autoComplete="off" required></textarea>

                    <button type="submit">Submit</button>

                </form>

            </div>

    </div>
}