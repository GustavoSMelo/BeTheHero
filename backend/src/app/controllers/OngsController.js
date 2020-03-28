const crypto = require('crypto');
const connection = require('../../database/connection');

module.exports = {
    async store(req, res) {
        try {
            const { name, email, whatsapp, city, uf } = req.body;

            const id = crypto.randomBytes(4).toString('HEX');

            await connection('ONG').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });

            return res.json({ id });
        } catch (err) {
            return res.status(400).json({
                Error:
                    'Please, to continue, insert all the fields and try again',
            });
        }
    },

    async index(req, res) {
        const ongs = await connection('ONG').select('*');

        return res.json({ ongs });
    },

    async show(req, res) {
        const { authorization: id } = req.headers;

        const ong = await connection('ONG')
            .select('*')
            .where('id', id);

        return res.json(ong);
    },
};
