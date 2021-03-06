const { app } = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('get routes', () => {
    it('the art endpoint returns all art', async() => {
        const myData = [
            {
                id: 1,
                title: "Self-Portrait in a Velvet Dress",
                artist: "Frida Kahlo",
                img: 'http://www.kahlo.org/Self-Portrait%20in%20a%20Velvet%20Dress%20Frida%20Kahlo.jpg',
                century: '20th',
                painting: true,
                drawing: false
            },
            {
                id: 2,
                title: "Woman Bathing",
                artist: "Mary Cassatt",
                img: 'https://s3.amazonaws.com/assets.saam.media/files/styles/x_large/s3/files/images/1969/SAAM-1969.65.26A_1-000001.jpg',
                century: '19th',
                painting: true,
                drawing: false
            },
            {
                id: 3,
                title: "Two Women",
                artist: "Lois Mailou Jones",
                img: 'https://uploads8.wikiart.org/00327/images/lois-mailou-jones/1-1.jpg!Large.jpg',
                century: '20th',
                painting: true,
                drawing: false
            },
            {
                id: 4,
                title: "Portrait of a Girl",
                artist: "Guan Zilan",
                img: 'https://uploads3.wikiart.org/00116/images/guan-zilan/58831cb5edc2c97a049b0e65.jpg!Large.jpg',
                century: '20th',
                painting: true,
                drawing: false
            },
            {
                id: 5,
                title: "Thinking About Future",
                artist: "Nina Tokhtaman Valetova",
                img: 'https://uploads8.wikiart.org/00316/images/nina-tokhtaman-valetova/thinking-about-future-pencil-drawing-202-17-x-14-n-2.JPG!Large.JPG',
                century: '21st',
                painting: false,
                drawing: true
            }
        ];
        const response = await request.get('/art');

        expect(response.body).toEqual(myData);
    });

    it('given an id, the art endpoint returns the matching artwork', async() => {
        const myData = {
            id: 4,
            title: "Portrait of a Girl",
            artist: "Guan Zilan",
            img: 'https://uploads3.wikiart.org/00116/images/guan-zilan/58831cb5edc2c97a049b0e65.jpg!Large.jpg',
            century: '20th',
            painting: true,
            drawing: false
        };
        const response = await request.get('/art/4');

        expect(response.body).toEqual(myData);
    });
});