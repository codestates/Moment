const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookie_parser = require('cookie-parser');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(
	cors({
		origin: true,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
	}),
);
app.use(cookie_parser());
app.use(express.json());

app.get('/', (_, res) => res.send('Hello World?'));

app.listen(PORT, () => console.log(`Server is Running ${PORT}`));
