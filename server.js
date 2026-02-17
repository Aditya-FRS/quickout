const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve your HTML file
app.use(express.static(__dirname));

// Example secure route (for GitHub token usage)
app.get("/api/data", (req, res) => {
    const secret = process.env.MY_SECRET;
    res.json({ message: "Secret is safe on server", secretExists: !!secret });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
