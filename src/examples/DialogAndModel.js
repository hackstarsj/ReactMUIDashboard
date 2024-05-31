import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, IconButton, Grid, Box, Typography, Modal, Paper
} from '@mui/material';
import { Close as CloseIcon, Info as InfoIcon } from '@mui/icons-material';

// Custom styled modal box
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DialogExamples = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);
  const [openDialog3, setOpenDialog3] = React.useState(false);
  const [openDialog4, setOpenDialog4] = React.useState(false);
  const [openDialog5, setOpenDialog5] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);
  const [openModal5, setOpenModal5] = React.useState(false);
  
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogOpen2 = () => {
    setOpenDialog2(true);
  };
  const handleDialogOpen3 = () => {
    setOpenDialog3(true);
  };
  const handleDialogOpen4 = () => {
    setOpenDialog4(true);
  };
  const handleDialogOpen5 = () => {
    setOpenDialog5(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleDialogClose2 = () => {
    setOpenDialog2(false);
  };
  const handleDialogClose3 = () => {
    setOpenDialog3(false);
  };
  const handleDialogClose4 = () => {
    setOpenDialog4(false);
  };
  const handleDialogClose5 = () => {
    setOpenDialog5(false);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalOpen2 = () => {
    setOpenModal2(true);
  };

  const handleModalClose2 = () => {
    setOpenModal2(false);
  };

  const handleModalOpen3 = () => {
    setOpenModal3(true);
  };

  const handleModalClose3 = () => {
    setOpenModal3(false);
  };

  const handleModalOpen4 = () => {
    setOpenModal4(true);
  };

  const handleModalClose4 = () => {
    setOpenModal4(false);
  };

  const handleModalOpen5 = () => {
    setOpenModal5(true);
  };

  const handleModalClose5 = () => {
    setOpenModal5(false);
  };

  return (
    <Grid container spacing={4} p={2}>
      {/* Basic Dialog */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleDialogOpen}>Open Basic Dialog</Button>
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Basic Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a basic dialog example. It can be used to display important information to the user.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">Cancel</Button>
            <Button onClick={handleDialogClose} color="primary">Agree</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      {/* Dialog with Close Button */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleDialogOpen2}>Open Dialog with Close Button</Button>
        <Dialog open={openDialog2} onClose={handleDialogClose2}>
          <DialogTitle>
            Dialog with Close Button
            <IconButton
              aria-label="close"
              onClick={handleDialogClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog contains a close button on the top-right corner.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose2} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      {/* Scrollable Dialog */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleDialogOpen3}>Open Scrollable Dialog</Button>
        <Dialog open={openDialog3} onClose={handleDialogClose3} scroll="paper">
          <DialogTitle>Scrollable Dialog</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `This is a scrollable dialog. `.repeat(10)
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose3} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      {/* Full-Screen Dialog */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleDialogOpen4}>Open Full-Screen Dialog</Button>
        <Dialog fullScreen open={openDialog4} onClose={handleDialogClose4}>
          <DialogTitle>
            Full-Screen Dialog
            <IconButton
              aria-label="close"
              onClick={handleDialogClose4}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a full-screen dialog. It covers the entire screen.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose4} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      {/* Basic Modal */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleModalOpen}>Open Basic Modal</Button>
        <Modal
          open={openModal}
          onClose={handleModalClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
              Basic Modal
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This is a basic modal example. It can be used to display important information to the user.
            </Typography>
            <Button onClick={handleModalClose} sx={{ mt: 2 }}>Close</Button>
          </Box>
        </Modal>
      </Grid>

      {/* Modal with Close Button */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleModalOpen2}>Open Modal with Close Button</Button>
        <Modal
          open={openModal2}
          onClose={handleModalClose2}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
              Modal with Close Button
              <IconButton
                aria-label="close"
                onClick={handleModalClose2}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This modal contains a close button on the top-right corner.
            </Typography>
            <Button onClick={handleModalClose2} sx={{ mt: 2 }}>Close</Button>
          </Box>
        </Modal>
      </Grid>
      
      {/* Scrollable Modal */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleModalOpen3}>Open Scrollable Modal</Button>
        <Modal
          open={openModal3}
          onClose={handleModalClose3}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{ ...style, height: '80%', overflow: 'auto' }}>
            <Typography id="modal-title" variant="h6" component="h2">
              Scrollable Modal
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {[...new Array(50)]
                .map(
                  () => `This is a scrollable modal. `.repeat(10)
                )
                .join('\n')}
            </Typography>
            <Button onClick={handleModalClose3} sx={{ mt: 2 }}>Close</Button>
          </Box>
        </Modal>
      </Grid>

      {/* Full-Screen Modal */}
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleModalOpen4}>Open Full-Screen Modal</Button>
        <Modal
          open={openModal4}
          onClose={handleModalClose4}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              ...style,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              m: 0,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Full-Screen Modal
              <IconButton
                aria-label="close"
                onClick={handleModalClose4}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This is a full-screen modal. It covers the entire screen.
            </Typography>
            <Button onClick={handleModalClose4} sx={{ mt: 2 }}>Close</Button>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};
export default DialogExamples;