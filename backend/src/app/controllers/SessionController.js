const connection = require('../../database/connection');

module.exports = {
    async store(req, res) {
        const { id } = req.body;

        const ong = await connection('ONG')
            .select('name')
            .where('id', id)
            .limit(1)
            .first();

        if (!ong || ong.length <= 0) {
            return res.status(404).json({ Error: 'this ong doesnt exist ' });
        }

        return res.json({ ong, id });
    },
};
