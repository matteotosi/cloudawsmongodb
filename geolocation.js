var pending = db.cases.find({location: {
	                                    $near: {
											$geometry:{
												type:"Point",
												coordinates:[-122.476543, 37.64869]
											},
											$maxDistance: 50000,
											$minDistance: 10000
										}
                                       }, CaseCurrentStatus : "pending"});
									   
var open = db.cases.find({location: {
	                                    $near: {
											$geometry:{
												type:"Point",
												coordinates:[-122.476543, 37.64869]
											},
											$maxDistance: 50000,
											$minDistance: 10000
										}
                                       }, CaseCurrentStatus : "open"});
									   
var closed = db.cases.find({location: {
	                                    $near: {
											$geometry:{
												type:"Point",
												coordinates:[-122.476543, 37.64869]
											},
											$maxDistance: 50000,
											$minDistance: 10000
										}
                                       }, CaseCurrentStatus : "closed"});
									  
var totalRangeCases = db.cases.find({location: {
	                                    $near: {
											$geometry:{
												type:"Point",
												coordinates:[-122.476543, 37.64869]
											},
											$maxDistance: 50000,
											$minDistance: 10000
										}}}).count();
										
var x = db.cases.find({location: {
	                                    $near: {
											$geometry:{
												type:"Point",
												coordinates:[-122.476543, 37.64869]
											},
											$maxDistance: 50000,
											$minDistance: 10000
										}}, CaseCurrentStatus : {$exists: false}});										
var numPending = pending.count();
var numClosed = closed.count();
var numOpen = open.count();
var n = x.count();
print(totalRangeCases);
print("Pending cases:\n");
print("Total pending cases: "+numPending);
print("Percentage of pending cases: "+(numPending*100/totalRangeCases)+"%");
print("----------------------");
print("Closed cases:\n");
print("Total closed cases: "+numClosed);
print("Percentage of closed cases: "+(numClosed*100/totalRangeCases)+"%");
print("----------------------");
print("Open cases:\n");
print("Total open cases: "+numOpen);
print("Percentage of open cases: "+(numOpen*100/totalRangeCases)+"%");
print("----------------------");
print("Unclassified cases: "+n);
print("Percentage of unclassified cases: "+(n*100/totalRangeCases)+"%");
print("----------------------");