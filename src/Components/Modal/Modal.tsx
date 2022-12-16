import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { ReactNode } from "react";

type IModal = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};

const ModalConatiner = (props: IModal) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { md: "55%", lg: "45%", sm: "70%" },
              bgcolor: "background.paper",
              borderRaduis: "1rem",
              boxShadow: 24,
              p: 4,
              borderRadius: "1rem",
            }}
          >
            {props.children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalConatiner;
