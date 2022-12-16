import { Box, Button, Input, TextField, Typography } from "@mui/material";

const TimeLine = () => {
  return (
    <>
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          Site survey{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            Ahmed kaboo
          </Typography>
          <Typography variant="subtitle1" component="h5">
            17/11/202
          </Typography>
          <Typography variant="subtitle1" component="h5">
            2 hour
          </Typography>
          <Typography variant="subtitle1" component="h5">
            image button
          </Typography>
        </Box>
        <Typography
          sx={{
            py: 2,
            width: {
              lg: "60%",
              md: "80%",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#777",
            },
          }}
        >
          Notes: <br />
          Your Project Manager will confirm this time works from our end. We
          will message you a confirmation or new requested time.
        </Typography>
        <Box py={2}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            1. Do you have any animals outside the property?
          </Typography>
          <Box>yes or no</Box>
        </Box>
        <Box py={2}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            2. Would you prefer to be on site during survey?
          </Typography>
          <Box>yes or no</Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            3. Confirm survey time works?
          </Typography>
          <Box>yes or no</Box>
        </Box>
      </Box>

      {/* design */}
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          Design
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            plan set
          </Typography>
          <Typography variant="subtitle1" component="h5">
            Structual calculations
          </Typography>
          <Typography variant="subtitle1" component="h5">
            Layout approval Approve/ Deny
          </Typography>
        </Box>
      </Box>

      {/* Permit submittal */}
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          Permit submittal
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            date
          </Typography>
          <Typography variant="subtitle1" component="h5">
            city/county office
          </Typography>
        </Box>
      </Box>

      {/* Product purchase */}
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          Product purchase
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            landing date
          </Typography>
          <Typography variant="subtitle1" component="h5">
            estimated time
          </Typography>
        </Box>

        <Box py={1} mt={3}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            1. Do we have access to your driveway?
          </Typography>
          <Box>text</Box>
        </Box>
        <Box py={1}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            2. Will you be at home to sign off for the product from our delivery
            driver?
          </Typography>
          <Box>yes or no</Box>
        </Box>
        <Box py={1}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            3. Is it ok with you to leave the product
          </Typography>
          <Box>yes or no</Box>
        </Box>
      </Box>

      {/* Installation */}
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          Installation
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            (date / time frame)
          </Typography>
          <Typography variant="subtitle1" component="h5">
            installation pictures
          </Typography>
        </Box>

        <Box py={1} mt={3}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            1. Will you be home during installation?
          </Typography>
          <Box>text</Box>
        </Box>
        <Box py={2}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            2. Do you have any animals outside the property?
          </Typography>
          <Box>yes or no</Box>
        </Box>
        <Box
          sx={{
            fontSize: "1.1rem",
            fontWeight: "600",
            color: "#6c6c6c",
            my: 3,
          }}
        >
          It isn’t necessary as our team is reliable, accountable and
          experienced. If you have any notes you’d like to share with our
          install team regarding your install please notate here
          <Box sx={{ display: "flex", py: 2 }}>
            <Box sx={{ flex: "3" }}>
              <Input fullWidth placeholder="Add Your Notes.." />
            </Box>
            <Button variant="outlined" sx={{ mx: 2 }}>
              Add Note
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Final inspection */}
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          Final inspection
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            (date / time frame)
          </Typography>
          <Typography variant="subtitle1" component="h5">
            Picture of final job card
          </Typography>
        </Box>
      </Box>

      {/* PTO */}
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          PTO
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            date of approval
          </Typography>
          <Typography variant="subtitle1" component="h5">
            Interconnection approval letter
          </Typography>
        </Box>
      </Box>

      {/* Monitor your system */}
      <Box
        sx={{
          my: 3,
          position: "relative",
          "&::after  ": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "-50px",
            width: "35px",
            height: "35px",
            background: "#2c6fda",
            borderRadius: "50%",
            padding: "1rem",
            border: "4px solid #77a6f39f",
          },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            background: "#e5e5e5",
            py: 1,
            px: 2,
            borderRadius: ".5rem .5rem 0 0 ",
            fontWeight: "600",
          }}
        >
          Monitor your system
        </Typography>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            justifyContent: "space-between",
            background: "#e3e1e1",
            borderRadius: " 0 0 .5rem .5rem  ",
          }}
        >
          <Typography variant="subtitle1" component="h5">
            Instructions How to set up on your phone or computer.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TimeLine;
