import { NextBtn, PreviousBtn } from "./Arrows";

export const config = {
  headers: { "Content-Type": "application/json" },
};

export const Categories = [
  "Cheese",
  "For Kids",
  "Light",
  "Piquant",
  "Savory",
  "Sea food",
  "Sweet",
  "Veggie",
];

export const pizzaSize = ["regular", "medium", "large", "extralarge"];

export const sortingOptions = [
  "Price Low to High",
  "Price High to Low",
  "Name A to Z",
  "Name Z to A",
  "Newest first",
  "Oldest first",
  "Average Rating",
];

export const getDate = (createdAt) => {
  const date = new Date(createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};
