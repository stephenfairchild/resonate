# Resonate

A simple Photo API that can store and retrieve a Photo from Cloudinary.

## Usage

### Upload a file

```sh
curl -X POST "https://<your-domain>/api/resonate" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: <your-key>" \
  -F 'photo=@<path-to-file>' 
  -d '{
    "destination": <path-to-destination-folder>
  }'
```

### Download a file

```sh
curl -X GET "https://<your-domain>/api/resonate" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: <your-key>" \
  -d '{
    "location": <destination-folder-in-cloud>
  }'
```

## TODO

- Allow sending multiple photos at once.
- Allow receiving single photos
