const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid4');
var cors = require('cors');
const { Client } = require('pg');

const app = express();
app.use(cors());

app.use(bodyParser.json());

const getTransactions = async () => {
    try {
        const client = new Client("postgressURL");
        await client.connect();
        const result = await client.query('SELECT * FROM transactions');
        client.end();
        return result.rows;
    } catch (error) {
        console.log(error);
        console.log('Error fetching transactions.', error);
        return [];
    }
};

const createTransaction = async (data) => {
    try {
        const id = uuidv4();
        const createdAt = new Date().getMilliseconds();
        console.log(createdAt);
        const { amount, description, operator } = data;
        const client = new Client("postgresURL");
        await client.connect();
        await client.query(
            `INSERT INTO "transactions" ("amount", "id", "description", "createdAt", "operator")  
             VALUES ($1, $2, $3, $4, $5)`, [amount, id, description, createdAt, operator]);

        client.end();
    } catch (error) {
        console.log('Error inserting transaction.', error);
    }
}

app.get('/transactions', async (req, res) => {
    const result = await getTransactions();

    if (!result) {
        return res.status(500).json({ error: 'Error fetching transactions.' });
    }
    return res.json(result);
});

app.post('/transactions', async (req, res) => {
    const data = req.body;
    const { amount, description, operator } = data;
    if (!amount || !description || !operator) {
        return res.status(400).send({ error: 'Invalid input.' });
    }
    await createTransaction(data);
    return res.json({ success: true });
});

app.listen(3000, () => {
    console.log('app listening on port 3000');
})

