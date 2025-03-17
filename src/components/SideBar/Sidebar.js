import { faBars, faCircle, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const menuItems = [
    {
      text: (
        <Box>
          <FontAwesomeIcon icon={faCircle} style={{ marginRight: '8px' }} />
          Home
        </Box>
      ),
      key: 'Home',
    },
    {
      text: (
        <Box>
          <FontAwesomeIcon icon={faCircle} style={{ marginRight: '8px' }} />
          Introduction
        </Box>
      ),
      key: 'Introduction',
    },
    {
      text: (
        <Box>
          <FontAwesomeIcon icon={faCircle} style={{ marginRight: '8px' }} />
          AboutMe
        </Box>
      ),
      key: 'AboutMe'
    },
    {
      text: (
        <Box>
          <FontAwesomeIcon icon={faCircle} style={{ marginRight: '8px' }} />
          Projects
        </Box>
      ),
      key: 'Projects'
    },
    {
      text: (
        <Box>
          <FontAwesomeIcon icon={faCircle} style={{ marginRight: '8px' }} />
          Contact
        </Box>
      ),
      key: 'Contact'
    },
  ];

  const handleOnClick = (route) => {
    navigate(`/${route}`);
  };

  const handleItemClick = (key) => {
    setSelectedItem(key);
    if (key) handleOnClick(key);
  };

  return (
    <div className="absolute flex justify-end mt-5 top-6 right-6 md:right-20" >
      <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} fontSize={'30px'} color='#dddd' />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right"
       sx={{
        '& .MuiDrawer-paper': {
          width: '300px',
          background: 'linear-gradient(120deg, black, #1F2937)'
        }
      }}>
        <Box
          sx={{
            backgroundColor: '#3A3B3C',
            color: 'white',
            p: 2,
            height: '80px',
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            fontSize: '30px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, black, #1F2937, black)'
          }}
        >
          <FontAwesomeIcon icon={faPaperclip} style={{ marginRight: '8px' }} />
          Navigator
        </Box>
        <div className="h-[2px] bg-gradient-sidebar"></div>
        <div>
          <List>
            {menuItems.map((item) => (
              <div key={item.key}>
                <ListItem
                  sx={{
                    backgroundColor: selectedItem === item.key ? '#5a5a5a' : 'inherit',
                    borderLeft: selectedItem === item.key ? '4px solid #dcdcdc' : 'none',
                    color: selectedItem === item.key ? 'white' : 'gray',
                    '&:hover': {
                      backgroundColor: '#5a5a5a',
                      color: 'white',
                    },
                    height: '50px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleItemClick(item.key, item.text)}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              </div>
            ))}
          </List>
          <Button onClick={() => setOpen(false)} color="error" sx={{marginTop: '50px'}}>
            close
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
