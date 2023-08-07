import notesRouter from './routes/notes.routes';

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/notes', notesRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});