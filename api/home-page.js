// api/home-page.js
export default async function handler(req, res) {
  if (req.method === "GET") {
    // Fetch data from your backend or other data source
    try {
      const response = await fetch(
        "https://your-backend-url.com/api/home-page"
      );
      const data = await response.json();

      // Send the fetched data as a response
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
