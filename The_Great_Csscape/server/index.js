const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(express.json());

// Example route for handling pincode input
app.get('/pincode/:code', (req, res) => {
    const pincode = req.params.code;

    // Example response
    const data = [
        { place: 'Chikkayadachi', state: 'Karnataka' },
        { place: 'Doddagubbi', state: 'Karnataka' }
    ];
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
