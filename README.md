# Resonate

A simple Photo API that can store and retrieve photos from Cloudinary.

## Usage

You'll need to have the following environment variables defined:
cloud_name, api_key, api_secret

The app expects these to be in place, and you can get these credentials from Cloudinary.

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
