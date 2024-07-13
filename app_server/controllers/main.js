/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'travelmate' });
    };
    module.exports = {
        index
        };