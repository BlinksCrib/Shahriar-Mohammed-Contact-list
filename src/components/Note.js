import React from "react";
import { Box } from '@mui/system'
import {
  List,
  Paper,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Avatar,
  CssBaseline,
  Container,
  Typography,
} from '@mui/material'

import { Drawer } from 'antd'
import { useState } from 'react'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp'
// import CssBaseline from '@mui/material/CssBaseline'

const Note = ({ id, text, number, date, time, handleDeleteNote, showDrawer}) => {
//   // Drawer
//   // Drawer
//   const [open, setOpen] = useState(false)
//   const [placement] = useState('bottom')
//   const showDrawer = () => {
//     setOpen(true)
//     console.log('why')
//   }
//   const onClose = () => {
//     setOpen(false)
//   }
//   // Drawer
//   // Drawer

  return (
    // <div className='note'>
    //   <span>{text}</span>
    //   <span>{number}</span>
    //   <div className='note-footer'>
    //     <small>{date}</small>
    //     <small>{time}</small>
    //     <MdDeleteForever
    //       onClick={() => handleDeleteNote(id)}
    //       className='delete-icon'
    //       size='1.3rem'
    //     />
    //   </div>
    <React.Fragment>
      <CssBaseline />
      <Container className='mat'>
        <Box className='flown'>
          <Paper
            className='profile flow'
            style={{
              //   borderTop: '1px solid #fff',
              background: 'transparent',
            }}
          >
            <List>
              <ListItem
                style={{
                  //   borderTop: '1px solid #fff',
                  background: 'transparent',
                  color: '#FF7C9C',
                }}
              >
                <ListItemAvatar>
                  <Avatar>{text.charAt(0).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant='h6' style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: "14px" }}>
                      {text}
                    </Typography>
                  }
                  //   secondary={
                  //     <p
                  //       variant='h6'
                  //       style={{
                  //         color: '#FF7C9C',
                  //       }}
                  //     >
                  //       {number}
                  //     </p>
                  //   }
                />{' '}
                <IconButton
                  aria-label='share'
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                  }}
                >
                  <DeleteSharpIcon
                    className='try'
                    onClick={() => handleDeleteNote(id)}
                  />
                </IconButton>
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Container>
      {/* The rest of your application */}
      {/* <div>
        <Drawer
          title='Basic Drawer'
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div> */}
    </React.Fragment>
  )
};

export default Note;
