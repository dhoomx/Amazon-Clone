import React from "react";
import { Grid } from "@material-ui/core";

import Prodcut from "./Prodcut/Prodcut";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes.",
//     price: "$129",
//     image:
//       "https://i.pinimg.com/564x/5d/e0/6f/5de06ff050f8e113906faa06d5c8af8d.jpg",
//   },
//   {
//     id: 2,
//     name: "Bag",
//     description: "Nice Bag.",
//     price: "$119",
//     image:
//       "https://i.pinimg.com/564x/59/e8/40/59e8403426a64229b0ab93e9b8b7660a.jpg",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Prodcut product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
