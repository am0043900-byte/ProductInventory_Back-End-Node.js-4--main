# Product Inventory API 📦

A RESTful API for managing product inventory with Node.js, Express, and MongoDB.

## Features ✨

-  Create products with validation
-  Retrieve all products with filtering capabilities
-  Update product details
-  Delete products from inventory
-  MongoDB integration for data persistence
-  Error handling and HTTP status codes
-  Environment variable configuration

## Tech Stack 🛠️

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Dotenv** - Environment variable management

## Prerequisites 📋

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

## Installation 🚀

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/task4-Product-Inventory.git
cd task4-Product-Inventory
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env` file in the root directory:
```
PORT=8000
MONGODB_URL=mongodb://127.0.0.1:27017/product-inventory
```

4. **Start the server**
```bash
npm start
```

The server will run on `http://localhost:8000`

## API Endpoints 📡

### Create Product
```http
POST /api/products
Content-Type: application/json

{
  "name": "Laptop",
  "category": "Electronics",
  "price": 999.99,
  "email": "user@example.com"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Laptop",
    "category": "Electronics",
    "price": 999.99,
    "email": "user@example.com",
    "createdAt": "2026-02-13T..."
  }
}
```

### Get All Products
```http
GET /api/products
```

**Optional Query Parameters:**
- `name` - Filter by product name
- `category` - Filter by category
- `price` - Filter by price

**Example:**
```
GET /api/products?category=Electronics&price=999.99
```

**Response:** `200 OK`
```json
{
  "success": true,
  "count": 1,
  "data": [...]
}
```

### Delete Product
```http
DELETE /api/products/:id
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

## Project Structure 📁

```
task4-Product-Inventory/
├── server.js              # Main application file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
├── models/
│   └── Product.js        # Mongoose schema
└── routes/
    └── productRoutes.js  # API routes
```

## Database Schema 🗄️

### Product Model
```javascript
{
  name: String (required),
  category: String (required),
  price: Number (required),
  email: String (unique, optional),
  createdAt: Date (default: Date.now)
}
```

## Error Handling ⚠️

- **400** - Bad Request (duplicate email, validation error)
- **404** - Not Found (product not found)
- **500** - Internal Server Error

## Usage Example with Postman 📬

1. Open Postman
2. Create a new request
3. Set method to **POST**
4. URL: `http://localhost:8000/api/products`
5. Headers: `Content-Type: application/json`
6. Body (raw JSON):
```json
{
  "name": "iPhone 15",
  "category": "Smartphones",
  "price": 999.99
}
```
7. Click Send

## Scripts 📜

```bash
# Start the server
npm start

# Run with nodemon (auto-restart on changes)
npm run dev
```

## Contributing 🤝

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License 📄

This project is open source and available under the ISC License.

## Author ✍️

Created as part of code-zone-courses backend development tasks.

---

**Need Help?** 
- Check your `.env` file configuration
- Ensure MongoDB is running
- Verify the correct port is configured
