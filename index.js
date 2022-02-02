const express = require("express");

const app = express();

const PORT = 3000;

app.get('/', (request, response) => {
    response.send({
        'firstName': 'Marianna',
        'lastName': 'Alves',
        'city': 'Recife',
    });
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

