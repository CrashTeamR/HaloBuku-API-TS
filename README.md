# RESTAPI FOR HALOBUKU

This project is RestAPI for HaloBuku.

To start local environment run `yarn dev`

## Endpoint

### AUTH

#### register

> https://halobuku.ericprd.site/api/v1/register

- method: `POST`
- body:

```json
{
  "name": "John Doe",
  "email": "example@mail.com",
  "password": "Password123"
}
```

#### verify

> https://halobuku.ericprd.site/api/v1/verify

- method: `POST`
- body:

```json
{
  "email": "example@mail.com",
  "otp": 123456
}
```

#### Login

> https://halobuku.ericprd.site/api/v1/login

- method: `POST`
- body:

```json
{
  "email": "example@mail.com",
  "password": "Password123"
}
```

### Books

#### Add Book (Admin Auth)

> https://halobuku.ericprd.site/api/v1/books

- method: `POST`
- body:

```js
{
  _id: Number,
  title: String,
  author: String,
  publishedYear: Number,
  description: String,
  image: String,
  price: Number,
  quantity: Number,
  isAvailable: Boolean
}
```

#### Get Book by ID

> https://halobuku.ericprd.site/api/v1/books/:id

- method: `GET`
- body:

```js
{
  books: [
    {
      _id: Number,
      title: String,
      author: String,
      publishedYear: Number,
      description: String,
      image: String,
      price: Number,
      quantity: Number,
      isAvailable: Boolean,
    },
  ];
}
```

#### Get All Books

> https://halobuku.ericprd.site/api/v1/books

- method: `GET`
- body:

```js
{
  books: [
    {
      _id: Number,
      title: String,
      author: String,
      publishedYear: Number,
      description: String,
      image: String,
      price: Number,
      quantity: Number,
      isAvailable: Boolean,
    },
  ];
}
```

#### Delete Book by ID (Auth)

> https://halobuku.ericprd.site/api/v1/books/:id

- method: `DELETE`
- parameter is book's ID

### Cart

#### Get Cart

> https://halobuku.ericprd.site/api/v1/cart

- method: `GET`
- cart:

```js
{
  _id: String;
  cart: [
    {
      _id: Number,
      title: String,
      author: String,
      publishedYear: Number,
      description: String,
      image: String,
      price: Number,
      quantity: Number,
      isAvailable: Boolean,
    },
  ];
}
```

#### Add to Cart

> https://halobuku.ericprd.site/api/v1/cart/:id

- method: `POST`
- parameter is book's ID

#### Remove from Cart

> https://halobuku.ericprd.site/api/v1/cart/:id

- method: `DELETE`
- parameter is book's ID

`note: cart only can be accessed by auth user`
