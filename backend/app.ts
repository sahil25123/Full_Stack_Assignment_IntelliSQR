import express from 'express';
const app = express();
import authRoutes from './src/Routes/auth';

const port = 9001;


app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

