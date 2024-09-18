import React, { useState } from 'react'
import './Popchat.css'
import reactLogo from '../assets/react.svg'

import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

export const PopChat = ( props ) => {
  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }
  let textRef = React.createRef()
  const {messages} = props

  const [chatopen, setChatopen] = useState(false)
  const toggle = e => {
    setChatopen(!chatopen)
  }

  const handleSend = e => {
    const get = props.getMessage
    get(textRef.current.value)
  }

  return (
    <div id='chatCon'>
        <div className="chat-box" >
          <div className="header flex justify-center p-2">
            <img className="icon inline-block h-12 w-12 rounded-full ring-2 ring-white" src={reactLogo} />
            MRSYSTEM NOTIFICATION
          </div>
          <div className="msg-area">
              <List
                  aria-labelledby="ellipsis-list-demo"
                  sx={{ '--ListItemDecorator-size': '56px' }}
                >
                {
                  messages.map((msg, i) => (
                    // i%2 ? (
                    // <p class="right"><span>{ msg }</span></p>
                    // ) : (
                    //   <p class="left"><span>{ msg }</span></p>
                    // )
                  <div key={i}>
                    <ListItem >
                    <ListItemDecorator >
                    <img className="icon inline-block h-10 w-10 rounded-full ring-2 ring-white" src={reactLogo} />
                    </ListItemDecorator>
                    {msg}
                    </ListItem>
                    <ListDivider inset={"startDecorator"} />
                  </div>
                  ))
                }
              </List>
          </div>
          {/* <div class="footer">
            <input type="text"  ref={textRef} />
            <button onClick={handleSend}><i class="fa fa-paper-plane"></i></button>
          </div> */}
        </div>
        {/* <div className="pop">
          <p><img onClick={toggle} src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg" alt="" /></p>     
        </div> */}
    </div>
  )
}

export default PopChat