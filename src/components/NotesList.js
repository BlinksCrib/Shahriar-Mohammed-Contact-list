import React from 'react'
import AddContact from './AddContact/AddContact'
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

import DeleteSharpIcon from '@mui/icons-material/DeleteSharp'

const NotesList = ({
  notes,
  handleAddNote,
  openEditModal,
  handleDeleteNote,
}) => {
  return (
    <div className='notes-list'>
      {notes?.map((note, i) => {
        const { name, number, id, date, time } = note
        return (
          <div className='list' key={i}>
            <CssBaseline />
            <Container className='mat'>
              <Box className='flown'>
                <Paper
                  className='profile flow'
                  style={{
                    background: 'transparent',
                  }}
                >
                  <List>
                    <ListItem
                      style={{
                        background: 'transparent',
                        color: '#FF7C9C',
                      }}
                      onClick={() => openEditModal(id)}
                    >
                      <ListItemAvatar>
                        <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant='h6'
                            style={{
                              color: 'rgba(0, 0, 0, 0.6)',
                              fontSize: '14px',
                            }}
                          >
                            {name}
                          </Typography>
                        }
                      />
                    </ListItem>
                    <IconButton
                      aria-label='share'
                      onClick={() => handleDeleteNote(id)}
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                      }}
                    >
                      <DeleteSharpIcon className='try' />
                    </IconButton>
                  </List>
                </Paper>
              </Box>
            </Container>
            {/* The rest of your application */}
            {/* <Note
              id={id}
              name={name}
              date={date}
              time={time}
              number={number}
              openEditModal={openEditModal}
              handleDeleteNote={handleDeleteNote}
            /> */}
          </div>
        )
      })}
      <div className='none' style={{ display: 'none' }}>
        <AddContact handleAddNote={handleAddNote} />
      </div>
    </div>
  )
}

export default NotesList
