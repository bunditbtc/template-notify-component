import React from 'react'
import './css/MSSD.css'
import reactLogo from '../assets/react.svg'



function MessageSending(props) {
   let textRef = React.createRef()

   const handleSend = e => {
    const get = props.getMessage
    get(textRef.current.value)
  }

  return (
    <div id='mssendCon'>
    <div className="chat-box" >
      <div className="header flex justify-center p-2">
        <img className="icon inline-block h-12 w-12 rounded-full ring-2 ring-white" src={reactLogo} />
        MRSYSTEM MESSAGE SENDING
      </div>
      <div className='msg-area'>
           <div className='paddingarea'>
             <input type="text"  ref={textRef} placeholder='writing message....' />
             <button onClick={handleSend}><i class="fa fa-paper-plane"></i></button>
           </div>            
        </div>     
    </div>   
    </div>
  )
}

export default MessageSending

