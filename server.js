const express = require ('express');

const app = express();

app.get('/api/collaborators', (req, res) => {
    const collaborators = [
        {id: 1, firstName: 'Paul', lastName: 'LaBounty'},
        {id: 2, firstName: 'Kobe', lastName: 'Hill'},
        {id: 3, firstName: 'Julian', lastName: 'Hunynh'}
    ];

    res.json(collaborators);
});

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));