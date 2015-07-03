import java.util.Iterator;

import org.bson.Document;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;


public class causesDB {

	public static void main(String[] args) {
		// ricerca di informazioni cause chiuse per abbandono di rifiuti
		MongoClient client = new MongoClient("localhost",27017);
		MongoDatabase database = client.getDatabase("test");
		MongoCollection<Document> collection = database.getCollection("cases");
		
		FindIterable<Document> docs = collection.find(new Document("ServiceName", "Uncollected Garbage").append("CaseCurrentStatus", "closed"));
		
		Iterator iterator = docs.iterator();
		Document curr = null;
		
		while(iterator.hasNext()) {
			curr = (Document) iterator.next();
			System.out.println("CaseId: "+curr.getString("CaseId"));
			System.out.println("Case open date: "+curr.get("CaseOpenDatetime"));
			System.out.println("case begin date: "+curr.get("CaseBeginDatetime"));
			System.out.println(curr.getString("RequestorFirstName")+" "+curr.getString("RequestorLastName"));
			System.out.println("age: "+curr.getInteger("age"));
			System.out.println("Address: "+curr.getString("CaseAddressString"));
			System.out.println("------------------------------");
		}
				
	}

}