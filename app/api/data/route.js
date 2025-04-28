export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return new Response(JSON.stringify(res));
}
export async function POST(request) {
  console.log("POST request!!!!!!!!!!!!  " + JSON.stringify(request));
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + request.body.userID
  ).then((response) => response.json());
  return new Response(JSON.stringify(res));
}
