const connection = require('../../database/connection');

module.exports = {
    async store(req, res) {
        try {
            const { title, description, value } = req.body;
            const { authorization: id_ong } = req.headers;

            const [id] = await connection('incident').insert({
                title,
                description,
                value,
                id_ong,
            });

            return res.json({ id });
        } catch (err) {
            return res.json({
                Error: ['Insert all the fields to continue and try again', err],
            });
        }
    },

    async index(req, res) {
        const { page = 1 } = req.query;

        const count = await connection('incident').select('*');

        const incidents = await connection('incident')
            .select('*')
            .offset((page - 1) * 5)
            .limit(5);

        res.header('totalcount', count.length);

        return res.json({ incidents });
    },

    async destroy(req, res) {
        try {
            const { id, authorization: id_ong } = req.headers;

            await connection('incident')
                .where('id', id)
                .where('id_ong', id_ong)
                .delete()
                .limit(1);

            return res.json({ message: 'Incident deleted with success ' });
        } catch (err) {
            return res.status(400).json({
                Error: [
                    'This incident doenst exists \nOr you are trying to delete a incident of another ong',
                    err,
                ],
            });
        }
    },

    async show(req, res) {
        const { authorization: id_ong } = req.headers;

        const incidents = await connection('incident')
            .select('*')
            .where('id_ong', id_ong);

        return res.json({ incidents });
    },
};
