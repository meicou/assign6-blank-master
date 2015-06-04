//Parse.initialize
Parse.initialize("wFqBvpAWTEjLJFMs3W1nvTfRznAg32NIiOKzxyMG", "fBSrFs7FCfHkULKYQdWFgKmsLo6qdVy4VQRjtlrC");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo:"bar"},{
	success: function(object){
		$(".success").show();
	},
	error: function(model,error){
		$(".error").show();
	}
});