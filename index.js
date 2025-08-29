require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// GET endpoint for verification
app.get('/verify', (req, res) => {
    res.json({
        is_success: true,
        message: "API is running successfully",
        timestamp: new Date().toISOString()
    });
});

// POST endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Missing or invalid 'data' field" });
        }

        const user_id = "atharv_bhavsar_28012004";
        const email = "atharv.bhavsar2801@gmail.com";
        const roll_number = "22BCY10049";

        const even_numbers = [];
        const odd_numbers = [];
        const alphabets = [];
        const special_characters = [];
        let sum = 0;
        let alpha_concat = '';

        data.forEach(item => {
            // Convert numeric strings to numbers if possible
            if (!isNaN(item)) {
                const num = Number(item);
                sum += num;
                if (num % 2 === 0) even_numbers.push(item);
                else odd_numbers.push(item);
            }
            else if (/^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                alpha_concat += item;
            } 
            else {
                special_characters.push(item);
            }
        });

        // Reverse and alternating caps
        let concat_string = '';
        alpha_concat.split('').reverse().forEach((char, idx) => {
            concat_string += idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        });

        const response = {
            is_success: true,
            user_id,
            email,
            roll_number,
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string
        };

        res.json(response);

    } 
    catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));