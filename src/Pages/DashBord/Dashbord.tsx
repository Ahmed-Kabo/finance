import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { getTickets } from "../../Redux/Slice/Tickets/TicketsSlics";
import BG from "../../Assets/wave.svg";
import { Link } from "react-router-dom";

const Dashbord = () => {
  const dispatch = useAppDispatch();
  const { tickets } = useAppSelector((status) => status.tickets);
  const Data = tickets?.data;

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {Data?.map((item: any) => (
            <Grid key={item.id} item md={6}>
              <Card
                sx={{
                  borderRadius: "1rem",
                  padding: ".8rem",
                  background: `url(${BG}) center bottom  no-repeat`,
                  backgroundSize: "content",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item?.financial}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.service}
                  </Typography>

                  <Typography variant="h4" color="#4e8fba">
                    ${Math.ceil(item.cost)}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.address}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Link to={`${item.ticket_id}`}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashbord;
