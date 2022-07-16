var currentDay = $('#currentDay');
var time = moment().format('MMMM Do YYYY');
var container = $('.container');

$('#currentDay').text(time);


// create the time slots and add colors to textarea if they are in the past or future
// ***It's in military time because idk moment enough to make it more extensible***
for (var i = 0; i < 8; i++){
    var timeHour = i + 9 + "00 Hours"
    

    // Hashtag "patch-work"
    if (timeHour === "900 Hours"){
        timeHour = "0900 Hours"
    }

    var inputGroup = $('<div>')
    inputGroup.attr("class", "input-group input-group-md")
    // ***ADDED A ID TO HELP LOCATE TIMEBLOCKS***
    inputGroup.attr("id", i)
    
    var inputGroupPrepend = $('<div>')
    inputGroupPrepend.addClass('input-group-prepend')
    
    var inputGroupText = $('<span>')
    inputGroupText.addClass("input-group-text")
    inputGroupText.text(timeHour)
    
    container.append(inputGroup)
    inputGroup.append(inputGroupPrepend)
    inputGroupPrepend.append(inputGroupText)
    
    var textArea = $('<textarea>')
    textArea.addClass('form-control')
    textArea.attr('aria-label', 'With textarea')
    textArea.addClass("present")

    inputGroup.append(textArea)
    
    var btn = $('<button>')
    btn.addClass('btn saveBtn')
    btn.attr('button')
    btn.text('Save')
    
    inputGroup.append(btn)

// current time conparison to change textarea color
// ***DOSE NOT WORK IN THE AFTERNOON***
    var currentHour = moment().format('h');
    
    console.log(currentHour)

    if (currentHour < i + 9){
        textArea.attr("class","form-control future")
    } else if (currentHour > i + 9){
        textArea.attr("class","form-control past")
    }

};

// ***no clue how to but the time blocks into the correct location***

// Save to local storeage
function storeTimeBlock (){
    localStorage.setItem("timeblock", JSON.stringify(textArea.val()));
    console.log(textArea.val())
};

// render timeblocks into the correct location
function renderTimeBlock (){

};

// This function is called below and will run when the page loads
function init(){
    var storedTimeBlocks = JSON.parse(localStorage.getItem("timeblock"))

    // if time block is not empty add the events into their correct location?
    if (storeTimeBlock !== null){
        
    }

    renderTimeBlock();
};

init();


// ***I think i need a event.target but idk how to impliment that***
var btn = $('button');

btn.on("click", storeTimeBlock);