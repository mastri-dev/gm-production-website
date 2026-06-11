export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!placeId || !apiKey) {
    return Response.json({ error: 'Missing env vars' }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,name&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  const reviews = data?.result?.reviews || [];

  return Response.json(reviews);
}