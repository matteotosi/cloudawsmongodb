var SOURCE = db.cases;
var DEST = db.distinct;
DEST.drop();


map = function() {
	
	var key = this.CaseOpenDatetime.getDate()+"/"+this.CaseOpenDatetime.getMonth();
	var value = {
    	count: 1
    };
   	emit(key, value);
}

reduce = function(key, values) {

  	reducedVal = { count: 0};
	for (var idx = 0; idx < values.length; idx++) {
    	reducedVal.count += values[idx].count;
    }

    return reducedVal;
};
                    
//
// run map/reduce
//
res = SOURCE.mapReduce( map, reduce, 
    { 
    out: 'distinct',
    query: {CaseCurrentStatus:"open"},
    verbose: true
    }
    );

db.distinct.find({});