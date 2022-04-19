//vocab words
var wordList =["attenuate", "abject", "acuity", "bastion", "belabor", "bucolic", "carping", "cavort", "charlatan", "decry", "demur", "diatribe", "enervate", "exhume", "encomium", "feckless", "fiat", "foible", "gambit", "garner", "germane", "hallow", "hackneyed", "hapless", "inane", "indubitable", "intransigent", "jettison", "jocular", "jaded", "knave", "kinetic", "kindle", "largesse", "lassitude", "laudable", "moot", "myopic", "mundane", "nettle", "nuance", "nascent", "overweening", "overt", "oscillate", "paltry", "pedantry", "pejorative", "quaff", "quagmire", "qualm", "raze", "rebuff", "redolent", "shambles", "sophistry", "sumptuous", "temporize", "tyro", "tantalizing", "undulate", "unremitting", "umbrage", "vacuous", "vagary", "valedictory", "waggish", "waif", "wanderlust", "xanthic", "xenas", "xenial", "yahoo", "yeoman", "yoke", "zany", "zephyr", "zeal"];

//vocab definitions
var definitionList =["(v.) to make thin or slender; to weaken or lessen in force, intensity, or value", "(adj.) degraded; base, contemptible; cringing, servile; complete and unrelieved", "(n.) sharpness (particularly of the mind or senses)", "(n.) a fortified place, stronghold", "(v.) to work on excessively; to thrash soundly", "(adj.) characteristic of the countryside, rural; relating to shepherds and cowherds, pastoral", "(adj.) tending to find fault, especially in a petty, nasty, or hairsplitting way; (n.) petty, nagging criticism", "(v.) to romp or prance around exuberantly; to make merry", "(n.) one who feigns knowledge or ability; a pretender, impostor, or quack", "(v.) to condemn, express strong disapproval; to officially depreciate", "(v.) to object or take exception to; (n.) an objection", "(n.) a bitter and prolonged verbal attack", "(v.) to weaken or lessen the mental, moral, or physical vigor of; enfeeble, hamstring", "(v.) to remove from a grave; to bring to light", "(n.) a formal expression of praise, a lavish tribute", "(adj.) lacking in spirit and strength; ineffective, weak; irresponsible, unreliable", "(n.) an arbitrary order or decree; a command or act of will or consciousness", "(n.) a weak point, failing, minor flaw", "(n.) in chess, an opening move that involves risk or sacrifice of a minor piece in order to gain a later advantage; any opening move of this type", "(v.) to acquire as the result of effort; to gather and store away, as for future use", "(adj.) relevant, appropriate, apropos, fitting", "(v.) to set apart as holy or sacred, sanctify, consecrate; to honor greatly, revere", "(adj.) repeated too often; overfamiliar through overuse", "(adj.) unfortunate and deserving pity", "(adj.) silly, empty of meaning or value", "(adj.) certain, not to be doubted or denied", "(adj.) refusing to compromise, irreconcilable", "(v.) to cast overboard, get rid of as unnecessary or burdensome", "(adj.) humorous, jesting, jolly, joking", "(adj.) bored or apathetic after experiencing too much of something", "(n.) a deceitful and unreliable scoundrel", "(adj.) characterized by motion", "(v.) cause to start burning", "(n.) generosity in giving; lavish or bountiful contributions", "(n.) weakness characterized by a lack of vitality or energy", "(adj.) worthy of high praise", "(adj.) open to discussion and debate, unresolved; (v.) to bring up for discussion; (n.) a hypothetical law case argued by students", "(adj.) nearsighted; lacking a broad, realistic view of a situation; lacking foresight or discernment", "(adj.) earthly, worldly, relating to practical and material affairs; concerned with what is ordinary", "(n.) a prickly or stinging plant; (v.) to arouse displeasure, impatience, or anger; to vex or irritate severely", "(n.) a subtle or slight variation (as in color, meaning, quality), delicate gradation or shade of difference", "(adj.) being born or beginning", "(adj.) conceited, presumptuous; excessive, immoderate", "(adj.) open, not hidden, expressed or revealed in a way that is easily recognized", "(v.) to swing back and forth with a steady rhythm; to fluctuate or waver", "(adj.) trifling, insignificant; mean, despicable; inferior, trashy", "(n.) a pretentious display of knowledge; overly rigid attention to rules and details", "(adj.) tending to make worse; expressing disapproval or disparagement, derogatory, deprecatory, belittling", "(v.) swallow hurriedly or greedily or in one draught", "(n.) a soft wet area of low-lying land that sinks underfoot", "(n.) uneasiness about the fitness of an action", "(v.) to tear down, destroy completely; to cut or scrape off or out", "(v.) to snub; to repel, drive away; (n.) a curt rejection, a check", "(adj.) fragrant, smelling strongly; tending to arouse memories or create an aura", "(n.) a slaughterhouse; a place of mass bloodshed; a state of complete disorder and confusion, mess", "(n.) reasoning that seems plausible but is actually unsound; a fallacy", "(adj.) costly, rich, magnificent", "(v.) to stall or act evasively in order to gain time, avoid a confrontation, or postpone a decision; to compromise", "(n.) a beginner, novice; one with little or no background or skill", "(adj.) arousing desire or expectation for something unattainable", "(v.) to move in waves or with a wavelike motion; to have a wavelike appearance or form", "(adj.) not stopping, maintained steadily, never letting up, relentless", "(n.) a feeling of anger caused by being offended", "(adj.) devoid of intelligence", "(n.) an unexpected and inexplicable change in something", "(adj.) of or relating to an occasion or expression of farewell", "(adj.) witty or joking", "(n.) a homeless child", "(n.) very strong or irresistible impulse to travel", "(adj.) having a yellow color", "(n.) confident, strong woman", "(adj.) constituting hospitality or relations between host and guest", "(n.) a person who is not intelligent or interested in culture", "(n.) a free man who cultivates his own land", "(v.) become joined or linked together", "(adj.) ludicris or foolish", "(n.) a slight wind", "(n.) a feeling of strong eagerness"]

//variables
var chosenLetter = "";
var chosenWords = [];
var chosenDefinitions=[];
var allWords=[];
var name;

//function to set the output to blank each time by clearning the list
function clear(){
  chosenWords.length = 0; 
}

//gets id of button clicked
//calls the clear function 
//calls the choseWords function
//calls the updateScreen function
//https://www.howtocodeschool.com/2021/03/get-id-of-clicked-element-using-javascript.html
//^website used to learn how to get the id of a clicked button pulled on March 25, 2022
function reply_click(clicked_id)
  {  
    chosenLetter = clicked_id;
    clear.call();
    choseWords.call();
    updateScreen.call();
  }

//traverses through the lists and grabs words and definitions based on the letter clicked
//returns a list with only all of the words clicked
//sets the output element to the list created with the words and defintions
function choseWords(){  
  for(var i = 0; i<wordList.length; i++){
    var word = wordList[i];
    if(word[0]== chosenLetter){
      chosenWords = chosenWords.concat(wordList[i] + "<br>" );
      allWords = allWords.concat(wordList[i]);
      chosenWords = chosenWords.concat(definitionList[i] + "  <br>");
    }
  }
  document.getElementById("output").innerHTML= chosenWords.join(''); 
  return allWords;
}

//creates a message that tells the user how many words they have learned
//gets rid of duplicates and displays the list length
//parameter: name- grabs the variable name that was set when the user pressed submit
//return: message- the message created
function createMessage(name){
  for(var j = 0; j<name.length; j++){
   var firstLetter = name[0];
   var rest = name.slice(1);
    if(firstLetter.toUpperCase() != firstLetter){
      var newName = firstLetter.toUpperCase() + rest;
    }
    else newName = name;
  }
  var filteredWords = [];
  for(var i = 0; i<allWords.length; i++){
    if(filteredWords.includes(allWords[i], 0)){
      filteredWords.splice(allWords[i], 1);
    }
    filteredWords = filteredWords.concat(allWords[i]); 
  } 
  var message = newName + ", you have learned " + filteredWords.length + " new words!";
  return message;
}

//gets the name in the first box on the first page
//called when user presses submit
//name is set to a global variable
function getName(){
  name = document.querySelector('input').value;
  return name;
}

//calls the createMessage function using the global variable name
//sets createMessage equal to the html h2 element
function updateScreen(){ 
  document.getElementById("Heading").innerHTML= createMessage(name);
}
