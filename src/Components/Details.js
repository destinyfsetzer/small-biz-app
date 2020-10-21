import React from "react";
import { Container, Typography } from "@material-ui/core";
import Map from "./Map";

const Details = (props) => {
  const id = props.match.params.id;
  const bizz = props.bizzes.find((bizz) => bizz.id == id);
  console.log(id);
  return (
    <Container maxWidth="sm" className="car-container">
      <Typography className="car-paper">
        <h2>{bizz.name}</h2>
        <h4>{bizz.address}</h4>
        <h4>{bizz.hours}</h4>
        <h5>{bizz.description}</h5>
      </Typography>
      <Map width={500} height={400} address={bizz.address} />
    </Container>
  );
};

export default Details;
