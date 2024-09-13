import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MessagesAlert } from './components/MessagesAlert'
import Login from './components/Login'


import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon'

// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

import 'bootstrap-icons/font/bootstrap-icons.css';

import { Container, Link, Button } from './components/NotificationPage'
import MessageSending from './components/MessageSending'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [count, setCount] = useState(0)

  const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

  const notify = () => {
    toast("This is a custom notification!", {
      position: "bottom-right",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const  msg = ['I hope you a enjoy','Message From MRSYSTEM',
  'Invoice Not Found','Please Reveiw data','See You Soon','Tomorow may be not yourday'
,'Someone acknowledges only their self-require','To keep running  on although does not see the result'];

  const germessage = (msg) => {
    console.log(msg);
  }

  const [chatopen, setChatopen] = useState(false)
  const toggle = e => {
    setChatopen(!chatopen)
    if(msgopen === true){
      setMsgopen(false);
    }
  }

  const [msgopen, setMsgopen] = useState(false)
  const togglemsg = e => {
    setMsgopen(!msgopen)
    if(chatopen === true){
      setChatopen(false);
    }
  }

  const divStyle = {
    color: 'white',
    fontSize: '20px',
    textAlign: 'center'
  };

  const divButtonStyle = {
    color: 'white',
    fontSize: '30px',
    textAlign: 'center'
  };

  return (
    <>
     <div  className='flex-col justify-center flex-wrap w-full'>       
        <div className='flex justify-center p-5'>         
            <a  href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>     
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>   
        </div>
        <div className='p-5'>
          <button className="rounded-full bg-blue-600 p-4 text-white">MRSYSTEM FROM THESE HERE</button>         
        </div>
        <div className='p-5'>
          <input type='button' value="This a New Innovation for everyone in bestex I hope you enjoy in with this things, nothing good things from idle"/>
        </div>
        <div>
          <button onClick={notify}>Show Notification</button>
          <ToastContainer />
        </div>    

        <div className='p-5'>
            <button onClick={togglePop}>Login</button>
            {seen ? <Login toggle={togglePop} /> : null}
        </div>
        <div>
          <i class="bi bi-house-door-fill"></i>
          <span className="d-md-inline" >Stock Control</span>   
       </div>

       <div>
       <FontAwesomeSvgIcon icon={faEnvelope} />
       </div>

        <div>
          <i className="bi bi-inboxes-fill"></i>
        </div>   
       
      </div>
      <div>
        {msgopen && <MessageSending getMessage={''}/>}
      </div>
      <div>
        {chatopen && <MessagesAlert messages = {msg}/>}
      </div>
       <div className='flex-col  p-2'>
       <Container >
        <Link href="#"
            onClick={togglemsg} 
            tooltip="Create note link"
            className={msgopen?'fab-show':''}   
            iconStyles={msgopen?divStyle:null}         
            icon={msgopen?'fa fa-minus-square fa-fade':'fa fa-sticky-note'} />
        <Link href="#"
            onClick={toggle} 
            tooltip="Add user link"
            className={chatopen?'fab-show':''}
            icon={chatopen?'fa fa-bell-slash fa-fade':'fa fa-bell'} />           
        <Button
            iconStyles={divButtonStyle}    
            tooltip="The big plus button!"
            icon="fa fa-plus"
            rotate={true}
             />
       </Container>
      </div>
    </>
  )
}

export default App
