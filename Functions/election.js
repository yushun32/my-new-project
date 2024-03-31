function process() {

	
	let numberFrom1 = parseInt(document.getElementById("nf1").value.substring(2,7));
	let numberFrom2 = parseInt(document.getElementById("nf2").value.substring(2,7));
	let numberTo1 = parseInt(document.getElementById("nt1").value.substring(2,7));
	let numberTo2 = parseInt(document.getElementById("nt2").value.substring(2,7));
	
	let numberOfBallotGiven1 = parseInt(document.getElementById("nobg1").value);
	let numberOfBallotGiven2 = parseInt(document.getElementById("nobg2").value);
	
	let numberOfVotes1 = parseInt(document.getElementById("nov1").value);
	let numberOfVotes2 = parseInt(document.getElementById("nov2").value);
	
	let numberOfBallotReceived1 = numberTo1 - numberFrom1 + 1;
	let numberOfBallotReceived2 = numberTo2 - numberFrom2 + 1;
	
	
	//display output
	document.getElementById("nobr1").value = numberOfBallotReceived1;
	document.getElementById("nobr2").value = numberOfBallotReceived2;
	document.getElementById("tbr").value = numberOfBallotReceived1 + numberOfBallotReceived2;
	
	document.getElementById("tbg").value = numberOfBallotGiven1 + numberOfBallotGiven2;
	
	document.getElementById("tbibb").value = numberOfBallotGiven1 + numberOfBallotGiven2;
	
	document.getElementById("tnov").value = numberOfVotes1 + numberOfVotes2;
	
	document.getElementById("trb").value = (numberOfBallotGiven1 + numberOfBallotGiven2) - (numberOfVotes1 + numberOfVotes2);
	
	
	
	if(numberOfVotes1 > numberOfVotes2) {
		document.getElementById("demo").innerHTML = ("The candidate selected: <b>NIK HAKIMIE BIN NIK MUSTAPA FADZI</b>");
	} else {
		document.getElementById("demo").innerHTML = ("The candidate selected: <b>AHMAD ZHAFRAN FARUQI BIN ZAINAL ABIDIN</b>");
	}
	
}











