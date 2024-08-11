import emailjs from "emailjs-com"
import "bootstrap/scss/bootstrap.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const sendEmail = (e) => {
    e.preventDefault(); 
    
    emailjs.sendForm("service_xe424eg", "template_08wz54f", e.target, "FF3iTvnxqEB9hNvOj")
      .then((result) => {
        if(result.status===200){
          toast.success("پیام شما با موفقیت ارسال شد" , {position:"top-right", closeOnClick:true})
        }
      }, (error) => {
        console.log(error); 
      });
  };

  return (
    <div className="container py-5">
      <div className="row py-5 justify-content-center">
        <div className="col-md-4 bg-white p-5 mt-5 ">
      <h2 className='pb-5 text-center' >ارسال به مدیریت</h2>
      <form onSubmit={sendEmail}>
      <div className="form-group">
        <input name='name' className='form-control p-3' type="text" placeholder='نام'/>
        </div>
        <div className="form-group">
        
        <input input name='email' className='form-control p-3' type="email" placeholder=' ایمیل ' />
        </div>
        <div className="form-group">
        <textarea className='form-control p-3' name="message" id="" cols="30" rows="10" placeholder='پیام شما'></textarea>
      </div>
      <div className="form-group">
        <input type='submit' className='btn btn-success w-100 p-2 mt-5' value="ارسال"  />
      </div>
      </form>

      </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
