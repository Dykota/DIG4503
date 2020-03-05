// Set the variable 'MongoClient' to the property MongoClient
//  of the object returned by the require() function
const MongoClient = require("mongodb").MongoClient;
// Connect to the system using the username and password as a URL
const URL = "mongodb+srv://dykotabaker:i8Puhipc68c9SE6p@cluster0-tc9sb.mongodb.net/";

// Define a new object, Database
// 
// It will have:
// Properties
// -- Connection object
// -- Collection object
//
// Functions:
// -- constructor()
// -- findTitle()
//
class Database {
    constructor() {

        // Define a value that will eventually be the collection "Movies"
        this.collection = null;
        // Define a value that will eventually be an object ('pipe') to the system
        this.connection = null;

        // Connect to the MongoDB system using the 'URL' and using a callback function
        MongoClient.connect(URL, (error, connection) => {

            // If there was an error...
            if(error) {
                // throw the error
                // (Throwing an error stops the code and "throws the error out" to the user.)
                throw error;
            }

            // Save the connection details passed to the callback function
            //  into something that can be accessed throughout the class
            this.connection = connection;
        
            // From the connection, select a database "DIG4503-78"
            let database = connection.db("DIG4503-78");

            // From the database, select a collection "Movies"
            // Save this object into something that can be accessed throughout the class
            this.collection = database.collection("Movies");
        
        });
    }

    findTitle(title) {

        // Is 'this.collection' null?
        // It might be if we called this function before the 
        //  callback function finished inside of MongoClient.connect()
        if(this.collection != null) {
            // Search for a single document
            // findOne() takes three arguments:
            // -- What to search for
            // -- (Optional) How to filter that search
            // -- (Optional) A callback function
            //
            // By default, it returns a Promise
            return this.collection.findOne({"title": title});
            
        } 
        
    }

    findYear(year) {

        // The request parameter will be a string.
        // We can use parseInt() to convert it into an Integer
        year = parseInt(year);

        // Is 'this.collection' null?
        // It might be if we called this function before the 
        //  callback function finished inside of MongoClient.connect()
        if(this.collection != null) {
            // Search for a single document
            // find() takes three arguments:
            // -- What to search for
            // -- (Optional) How to filter that search
            // -- (Optional) A callback function
            //
            // By default, it returns a Cursor.
            // 
            // Use limit() and only send back the first 100
            // 
            // Use toArray() to convert the result back into an array
            // (toArray() returns a Promise. This will resolve in the server code.)
            // 
            return this.collection.find({"year": year}).limit(100).toArray();
            
        } 
        
    }

}

// Export out the 'Database' class
module.exports = Database;
