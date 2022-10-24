import avt1 from "../../assets/images/avt1.jpeg";
import avt2 from "../../assets/images/avt2.jpeg";
import avt3 from "../../assets/images/avt3.jpeg";

import Image from "../../assets/images/item.jpg";

import Image1 from "../../assets/images/image1.jpeg";
import Image2 from "../../assets/images/image2.jpeg";
import Image3 from "../../assets/images/image3.jpeg";
import Image4 from "../../assets/images/image4.jpeg";
import Image5 from "../../assets/images/image5.jpeg";

import type1 from "../../assets/images/Dishtype/type1.png";
import type2 from "../../assets/images/Dishtype/type2.png";
import type3 from "../../assets/images/Dishtype/type3.png";
import type4 from "../../assets/images/Dishtype/type4.png";
import type5 from "../../assets/images/Dishtype/type5.png";
import type6 from "../../assets/images/Dishtype/type6.png";
import type7 from "../../assets/images/Dishtype/type7.png";
import type8 from "../../assets/images/Dishtype/type8.png";
import type9 from "../../assets/images/Dishtype/type9.png";
import type10 from "../../assets/images/Dishtype/type10.png";
import type11 from "../../assets/images/Dishtype/type11.png";
import type12 from "../../assets/images/Dishtype/type12.png";
import type13 from "../../assets/images/Dishtype/type13.png";
import type14 from "../../assets/images/Dishtype/type14.png";
import type15 from "../../assets/images/Dishtype/type15.png";
import type16 from "../../assets/images/Dishtype/type16.png";
import type17 from "../../assets/images/Dishtype/type17.png";
import type18 from "../../assets/images/Dishtype/type18.png";
import type19 from "../../assets/images/Dishtype/type19.png";
import type20 from "../../assets/images/Dishtype/type20.png";

import flag1 from "../../assets/images/Countries/flag1.png";
import flag2 from "../../assets/images/Countries/flag2.png";
import flag3 from "../../assets/images/Countries/flag3.png";
import flag4 from "../../assets/images/Countries/flag4.png";
import flag5 from "../../assets/images/Countries/flag5.png";
import flag6 from "../../assets/images/Countries/flag6.png";
import flag7 from "../../assets/images/Countries/flag7.png";
import flag8 from "../../assets/images/Countries/flag8.png";
import flag9 from "../../assets/images/Countries/flag9.png";
import flag10 from "../../assets/images/Countries/flag10.png";
import flag11 from "../../assets/images/Countries/flag11.png";
import flag12 from "../../assets/images/Countries/flag12.png";
import flag13 from "../../assets/images/Countries/flag13.png";
import flag14 from "../../assets/images/Countries/flag14.png";

export const Items = [
  {
    id: 1,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 3.5,
    image: Image,
  },
  {
    id: 2,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 3,
    image: Image,
  },
  {
    id: 3,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 1,
    image: Image,
  },
  {
    id: 4,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 0,
    image: Image,
  },
  {
    id: 5,
    collection: "china",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 5,
    image: Image,
  },
  {
    id: 6,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 4.5,
    image: Image,
  },
  {
    id: 7,
    collection: "america",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 2.5,
    image: Image,
  },
  {
    id: 8,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 1.5,
    image: Image,
  },
];

export const Reviews = [
  {
    name: "Andy Doe",
    avatar: avt1,
    rate: 5,
    date: "12/12/2020",
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptate, quod, quia, voluptatum quae voluptates quibusdam
      consequuntur quidem voluptatem quas nesciunt. Quisquam, quae
      voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
      `,
    replies: [
      {
        name: "Mary Louis",
        avatar: avt2,
        rate: 4,
        date: "12/12/2020",
        content: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quia, voluptatum quae voluptates quibusdam
          consequuntur quidem voluptatem quas nesciunt. Quisquam, quae
          voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          `,
      },
    ],
  },
  {
    name: "Kelvin Tang",
    avatar: avt3,
    rate: 2,
    date: "12/12/2020",
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptate, quod, quia, voluptatum quae voluptates quibusdam
      consequuntur quidem voluptatem quas nesciunt. Quisquam, quae
      voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
      `,
    replies: [],
  },
];

export const Recipes = {
  ingredients: [
    {
      id: 1,
      title: "Ingredient 1",
      ingredient: [
        {
          id: 1,
          name: "400g chicken breast",
        },
        {
          id: 2,
          name: "1 tbsp olive oil",
        },
      ],
    },
    {
      id: 2,
      title: "Ingredient 2",
      ingredient: [
        {
          id: 1,
          name: "200g marshmallow",
        },
        {
          id: 2,
          name: "175g mushrooms",
        },
        {
          id: 3,
          name: "300g marinara sauce",
        },
        {
          id: 4,
          name: "250ml water",
        },
        {
          id: 5,
          name: "3tbsp tomato paste",
        },
        {
          id: 6,
          name: "5drops tabasco sauce",
        },
        {
          id: 7,
          name: "3drops worcestershire sauce",
        },
      ],
    },
  ],
  steps: [
    {
      step: "1",
      content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "2",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "3",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "4",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "5",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "6",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "7",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "8",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
    {
      step: "9",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptatum quae voluptates quibusdam
        consequuntur quidem voluptatem quas nesciunt. Quisquam, quae`,
    },
  ],
  nutrients: [
    {
      nutrition: "Calories",
      value: "300",
    },
    {
      nutrition: "Total Fat",
      value: "10g",
    },
    {
      nutrition: "Saturated Fat",
      value: "2g",
    },
    {
      nutrition: "Total Carbohydrates",
      value: "20g",
    },
    {
      nutrition: "Sodium",
      value: "300mg",
    },
    {
      nutrition: "Potassium",
      value: "300mg",
    },
    {
      nutrition: "Sugars",
      value: "5g",
    },
    {
      nutrition: "Protein",
      value: "10g",
    },
  ],
};

export const Blogs = [
  {
    id: 1,
    title: "Traditional Spaghetti",
    timeless: "60 minutes",
    rate: 3.5,
    review: 3,
    description:
      "Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!",
    image: Image1,
    user: {
      name: "Kelvin Tang",
      avatar: avt1,
    },
    approved: true
  },
  {
    id: 2,
    title: "Traditional Spaghetti",
    timeless: "60 minutes",
    rate: 3.5,
    review: 3,
    description:
      "Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!",
    image: Image2,
    user: {
      name: "Kelvin Tang",
      avatar: avt2,
    },
    approved: true
  },
  {
    id: 3,
    title: "Traditional Spaghetti",
    timeless: "60 minutes",
    rate: 3.5,
    review: 3,
    description:
      "Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!",
    image: Image3,
    user: {
      name: "Kelvin Tang",
      avatar: avt3,
    },
    approved: true
  },
  {
    id: 4,
    title: "Traditional Spaghetti",
    timeless: "60 minutes",
    rate: 3.5,
    review: 3,
    description:
      "Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!",
    image: Image4,
    user: {
      name: "Kelvin Tang",
      avatar: avt1,
    },
    approved: true
  },
];

export const Categories = [
  {
    id: 1,
    title: "Meat",
    image: type1,
    published: true,
  },
  {
    id: 2,
    title: "Soup",
    image: type2,
    published: true,
  },
  {
    id: 3,
    title: "Pancakes",
    image: type3,
    published: true,
  },
  {
    id: 4,
    title: "Seafood",
    image: type4,
    published: true,
  },
  {
    id: 5,
    title: "Pizza",
    image: type5,
    published: true,
  },
  {
    id: 6,
    title: "Pasta",
    image: type6,
    published: true,
  },
  {
    id: 7,
    title: "Less than 30 mins",
    image: type7,
    published: true,
  },
  {
    id: 8,
    title: "Chicken",
    image: type8,
    published: true,
  },
  {
    id: 9,
    title: "Dips",
    image: type9,
    published: true,
  },
  {
    id: 10,
    title: "Ramen",
    image: type10,
    published: true,
  },
  {
    id: 11,
    title: "Waffles",
    image: type11,
    published: true,
  },
  {
    id: 12,
    title: "Pastries",
    image: type12,
    published: true,
  },
  {
    id: 13,
    title: "Burger",
    image: type13,
    published: true,
  },
  {
    id: 14,
    title: "Vegan",
    image: type14,
    published: true,
  },
  {
    id: 15,
    title: "Dessert",
    image: type15,
    published: true,
  },
  {
    id: 16,
    title: "Smoothies",
    image: type16,
    published: true,
  },
  {
    id: 17,
    title: "Breakfast",
    image: type17,
    published: true,
  },
  {
    id: 18,
    title: "Salad",
    image: type18,
    published: true,
  },
  {
    id: 19,
    title: "Cake",
    image: type19,
    published: true,
  },
  {
    id: 20,
    title: "Sandwich",
    image: type20,
    published: true,
  },
];

export const Countries = [
  {
    id: 21,
    title: "Australia",
    image: flag1,
    published: true,
  },
  {
    id: 22,
    title: "Canada",
    image: flag2,
    published: true,
  },
  {
    id: 23,
    title: "England",
    image: flag3,
    published: true,
  },
  {
    id: 24,
    title: "France",
    image: flag4,
    published: true,
  },
  {
    id: 25,
    title: "Germany",
    image: flag5,
    published: true,
  },
  {
    id: 26,
    title: "India",
    image: flag6,
    published: true,
  },
  {
    id: 27,
    title: "Italy",
    image: flag7,
    published: true,
  },
  {
    id: 28,
    title: "Japan",
    image: flag8,
    published: true,
  },
  {
    id: 29,
    title: "Korea",
    image: flag9,
    published: true,
  },
  {
    id: 30,
    title: "Singapore",
    image: flag10,
    published: true,
  },
  {
    id: 31,
    title: "Spain",
    image: flag11,
    published: true,
  },
  {
    id: 32,
    title: "USA",
    image: flag12,
    published: true,
  },
  {
    id: 33,
    title: "Vietnam",
    image: flag13,
    published: true,
  },
  {
    id: 34,
    title: "Thailand",
    image: flag14,
    published: true,
  },
];

export const Orders = [
  {
    id: 1,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Pending",
  },
  {
    id: 2,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Pending",
  },
  {
    id: 3,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Pending",
  },
  {
    id: 4,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Processing",
  },
  {
    id: 5,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Pending",
  },
  {
    id: 6,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Pending",
  },
  {
    id: 7,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Pending",
  },
  {
    id: 8,
    date: "Oct 20, 2022",
    address: "1234 Main St, New York, NY 10001",
    phone: "(123) 456-7890",
    method: "COD",
    total: "$75.00",
    status: "Delivered",
  },
];

export const Products = [
  {
    id: 1,
    title: "Burger",
    image: Image1,
    categories: [{ id: 1, category: "Burger" }],
    cuisine: "USA",
    price: "$10.00",
    status: "selling",
    discount: "",
    published: true,
  },
  {
    id: 2,
    title: "Pizza",
    image: Image2,
    categories: [{ id: 5, category: "Pizza" }],
    cuisine: "Italy",
    price: "$10.00",
    status: "selling",
    discount: "",
    published: true,
  },
  {
    id: 3,
    title: "Pasta",
    image: Image3,
    categories: [{ id: 1, category: "Pasta" }],
    cuisine: "Italy",
    price: "$10.00",
    status: "selling",
    discount: "",
    published: true,
  },
  {
    id: 4,
    title: "Salad",
    image: Image4,
    categories: [
      { id: 18, category: "Salad" },
      { id: 3, category: "Vegan" },
    ],
    cuisine: "USA",
    price: "$10.00",
    status: "selling",
    discount: "",
    published: true,
  },
  {
    id: 5,
    title: "Sandwich",
    image: Image5,
    categories: [
      { id: 20, category: "Sandwich" },
      { id: 1, category: "Burger" },
    ],
    cuisine: "USA",
    price: "$10.00",
    status: "sold out",
    discount: "",
    published: false,
  },
  {
    id: 6,
    title: "Cake",
    image: Image5,
    categories: [
      { id: 19, category: "Cake" },
      { id: 2, category: "Dessert" },
    ],
    cuisine: "USA",
    price: "$10.00",
    status: "selling",
    discount: "",
    published: true,
  },
  {
    id: 7,
    title: "Burger",
    image: Image1,
    categories: [{ id: 1, category: "Burger" }],
    cuisine: "USA",
    price: "$10.00",
    status: "sold out",
    discount: "",
    published: true,
  },
  {
    id: 8,
    title: "Pizza",
    image: Image2,
    categories: [{ id: 5, category: "Pizza" }],
    cuisine: "Italy",
    price: "$10.00",
    status: "selling",
    discount: "17%",
    published: true,
  },
];
