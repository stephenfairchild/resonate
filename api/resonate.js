export default async function handler(request, response) {
    console.log("Request received!");
    return response.status(200).json({ data: {foo: "bar"} });
}
