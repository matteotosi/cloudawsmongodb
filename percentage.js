var n = db.cases.find({}).count();
var types = db.cases.distinct("ServiceName");
for(i=0;i<types.length;i++) {
var tc = db.cases.count({ServiceName : types[i]});
print("Total case of "+types[i]+":"+(tc/n)*100+"%");
}
var noTypes = db.cases.find({ServiceName : {$exists : false}}).count();
print("Total case of unclassified cases: "+(noTypes/n)*100+"%");