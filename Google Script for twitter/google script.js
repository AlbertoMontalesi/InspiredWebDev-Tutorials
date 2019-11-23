function sendDailyTweet() {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var startRowNumber = 1;
	var endRowNumber = sheet.getLastRow();
	var twitterKeys = {
		TWITTER_CONSUMER_KEY: "[your_key_here]",
		TWITTER_CONSUMER_SECRET: "[your_key_here]",
		TWITTER_ACCESS_TOKEN: "[your_key_here]",
		TWITTER_ACCESS_SECRET: "[your_key_here]",
	}
	var props = PropertiesService.getScriptProperties();
	props.setProperties(twitterKeys);
	var params = new Array(0);
	var service = new Twitter.OAuth(props);

	var vietnameseWord;
	var englishWord;
	var sentenceExample;
	var identifier;

	for (var currentRowNumber = startRowNumber; currentRowNumber <= endRowNumber; currentRowNumber++) {
		var row = sheet.getRange(currentRowNumber + ":" + currentRowNumber)
			.getValues();
		// check that the fourth column (Date) is equal to today
		if (isToday(row[0][3])) {
			vietnameseWord = row[0][0];
			englishWord = row[0][1];
			sentenceExample = row[0][2];
			identifier = currentRowNumber - 1;
			// also add a number to the tweet: Word of the day #60:
			console.log("the word of the day is " + vietnameseWord + ", the sentence of the day is " + sentenceExample);
			break;
		}
	}

	if (!service.hasAccess()) {
		console.log("Authentication Failed");
	} else {
		console.log("Authentication Successful");
		var status = "Vietnamese Word #" + identifier + "\n\n" + vietnameseWord + " - " + englishWord + "\n\n" + "E.g: " + sentenceExample + "\n\n" +
			"Comment with your sentence. Learn more @ elingos.com" + "\n\n" + "#wordoftheday #languagelearning #learnvietnamese #vietnameselanguage #elingosvietnamese";
		try {
			console.log(status);
			var response = service.sendTweet(status, params);
			console.log(response);
		} catch (e) {
			console.log(e)
		}
	}



}

function isToday(date) {
	var today = new Date();
	var dateFromRow = new Date(date);
	return dateFromRow.getDate() == today.getDate() &&
		dateFromRow.getMonth() == today.getMonth() &&
		dateFromRow.getFullYear() == today.getFullYear()
}