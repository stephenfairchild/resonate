# Resonate

A simple Photo API that can store and retrieve a Photo from Cloudinary.

## Usage

### Upload a file

```sh
curl -X POST "https://<your-domain>/api" \
  -H "x-app-id: <your-photo-subfolder>" \
  -F 'photo=@<path-to-file>' 
```

### Get a list of files

```sh
curl -X GET "https://<your-domain>/api" \
  -H "Content-Type: application/json" \
  -H "x-app-id: <your-photo-subfolder>"
```

#### Available filters

If you don't pass any query parameters, a limit of 100 photos will be returned. You can filter with the following parameters:

Identity: `/api?identity=<your-identity>`

## TODO

- Allow sending multiple photos at once.
