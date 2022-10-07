import avt1 from "../../assets/images/avt1.jpeg";
import avt2 from "../../assets/images/avt2.jpeg";
import avt3 from "../../assets/images/avt3.jpeg";

import Image1 from "../../assets/images/image1.jpeg";
import Image2 from "../../assets/images/image2.jpeg";
import Image3 from "../../assets/images/image3.jpeg";
import Image4 from "../../assets/images/image4.jpeg";
import Image5 from "../../assets/images/image5.jpeg";

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
    user : {
      name: "Kelvin Tang",
      avatar: avt1,
    },
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
    user : {
      name: "Kelvin Tang",
      avatar: avt2,
    },
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
    user : {
      name: "Kelvin Tang",
      avatar: avt3,
    },
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
    user : {
      name: "Kelvin Tang",
      avatar: avt1,
    },
  },
];
