import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
const Home = () => {
  const Item = styled(Paper)(() => ({
    textAlign: "center",
  }));
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            {/* <Card sx={{ color: "red" }}> */}
            <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ backgroundColor: "red" }}></CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ backgroundColor: "blue" }}></CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ backgroundColor: "green" }}></CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ backgroundColor: "orange" }}></CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;