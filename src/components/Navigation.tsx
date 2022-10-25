import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          JSON Forms React
        </Typography>
        <Button color='inherit' href='/dashboard'>
          Dashboard
        </Button>
        <Button color='inherit' href='/forms'>
          Forms
        </Button>
      </Toolbar>
    </AppBar>
  );
}
