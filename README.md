# BFHL Array Processing API

## Objective
This project implements a **REST API** that processes an input array and returns a structured response including:

1. Status of operation (`is_success`)
2. User ID in the format `{full_name_ddmmyyyy}` (full name lowercase)
3. Email ID
4. College Roll Number
5. Array of **even numbers** (as strings)
6. Array of **odd numbers** (as strings)
7. Array of **alphabets**, converted to uppercase
8. Array of **special characters**
9. Sum of numeric elements (returned as a string)
10. Concatenation of all alphabetical characters in **reverse order with alternating caps**

The API is hosted and available for testing on the `/bfhl` route.

---

## Tech Stack
- Node.js
- Express.js
- dotenv (for environment variables)
- Hosting: [Render](https://render.com)

---

## Installation / Setup

1. Clone the repository:
```bash
git clone <your_repo_url>
cd <repo_folder>
Install dependencies:

bash
Copy code
npm install
Create a .env file (optional) to define your PORT:

ini
Copy code
PORT=3000
Start the server locally:

bash
Copy code
npm run dev
The server will run on:

arduino
Copy code
http://localhost:3000
API Routes
GET /verify
Purpose: Health check / verification

Response:

json
Copy code
{
  "is_success": true,
  "message": "API is running successfully",
  "timestamp": "2025-08-29T05:00:00.000Z"
}
POST /bfhl
Purpose: Process input array and return structured response

Request Body:
json
Copy code
{
  "full_name": "John Doe",
  "dob": "17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "data": ["a","1","334","4","R","$"]
}
Response Example (Example A):
json
Copy code
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
Notes:

All numbers are returned as strings.

Alphabets are uppercased in the alphabets array.

concat_string reverses all alphabetical characters and applies alternating caps.

Any non-alphanumeric characters are returned in special_characters.

Example Requests & Responses
Example B
Request:

json
Copy code
{
  "data": ["2","a","y","4","&","-","*","5","92","b"]
}
Response:

json
Copy code
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A","Y","B"],
  "special_characters": ["&","-","*"],
  "sum": "103",
  "concat_string": "ByA"
}
Example C
Request:

json
Copy code
{
  "data": ["A","ABcD","DOE"]
}
Response:

json
Copy code
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A","ABCD","DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
Hosted API
Method: POST

Route: /bfhl

Expected Status Code: 200

Render Hosted URL:

arduino
Copy code
https://your-bfhl-api.onrender.com/bfhl
