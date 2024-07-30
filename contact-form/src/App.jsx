import { useState } from 'react'


function App() {
 

  return (
    <div className='container' >
      <div className="row">
        <div className="col">
      <h2>ارسال به مدیریت</h2>
      <form >
      <div className="form-group">
        <input name='name' type="text" />
        </div>
        <div className="form-group">
        
        <input name='email' type="email" />
        </div>
        <div className="form-group">
        <textarea name="textarea" id="" cols="30" rows="10"></textarea>
      </div>
      </form>

      </div>
      </div>
    </div>
  )
}

export default App
