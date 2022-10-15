# RESTAPI FOR HALOBUKU

This project is RestAPI for HaloBuku.

To start local environment run `yarn dev`

## Endpoint

### AUTH

#### register

- > https://halobuku.ericprd.site/api/v1/register

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

- body:

```json
{
  "email": "example@mail.com",
  "otp": 123456
}
```

### Login

> https://halobuku.ericprd.site/api/v1/login

- body:

```json
{
  "email": "example@mail.com",
  "password": "Password123"
}
```
