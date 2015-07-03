var status = db.cases.distinct("CaseCurrentStatus");
var types = db.cases.distinct("ServiceName");
var i;
var j;
for(i=0;i<types.length;i++) {
    var n = db.cases.count({ServiceName : types[i]});
    print(types[i]+":");
    for(j=0;j<status.length;j++) {
        var x = db.cases.count({ServiceName : types[i], CaseCurrentStatus : status[j]});
        print("Number of "+status[j]+" causes: "+(x*100/n)+"%");
    }
    print("-------------------------------------------");
}
