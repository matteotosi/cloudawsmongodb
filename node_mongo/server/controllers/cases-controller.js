var Case = require('../models/case');

module.exports.searchCases = function (req, res) {
    var query = {};
    var stat = req.params.s;
    var city = req.params.c;
    var sname = req.params.n;

    var options = {
        "limit": 20
    }
    if(stat!="_") query["CaseCurrentStatus"]=stat;
    if(city!="_") query["CaseAddressString.city"]=city;
    if(sname!="_") query["ServiceName"]=sname;
    console.log(query);
    Case.find(query, function (err, results) {
        res.json(results);
    });
}
