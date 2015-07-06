var SOURCE = db.cases;
var DEST = db.distinct;
DEST.drop();

map = function() {
	
	var opn = 0;
	var cls = 0;
	var pen = 0;
	var unf = 0;
	
	var key = this.CaseAddressString[0].city;
    var value = { status : this.CaseCurrentStatus };
   	emit(key, value);
}

reduce = function(key, values) {

  	reducedVal = { OpenCases: 0 , ClosedCases: 0, PendingCases: 0, Undefined: 0, Total: 0};
    
    for (var idx = 0; idx < values.length; idx++) {
    	if(values[idx].status == "open") reducedVal.OpenCases += 1;
		else if(values[idx].status == "closed") reducedVal.ClosedCases += 1;
		else if(values[idx].status == "pending") reducedVal.PendingCases += 1;
		else reducedVal.Undefined += 1;
		reducedVal.Total +=1;
    }

    return reducedVal;
};
                    
//
// run map/reduce
//
res = SOURCE.mapReduce( map, reduce, 
    { 
    out: 'distinct',
    verbose: true
    }
    );

db.distinct.find({}).sort( { "value.Total": -1 } );