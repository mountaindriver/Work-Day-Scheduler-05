var currentDay = $('#currentDay');
var time = moment().format('MMMM Do YYYY');
var container = $('.container');

$('#currentDay').text(time);


// create the time slots and add colors to textarea if they are in the past or future
for (var i = 0; i < 8; i++){
    var timeTiltles = [
        "9:00 am",
        "10:00 am",
        "11:00 am",
        "12:00 pm",
        "1:00 pm",
        "2:00 pm",
        "3:00 pm",
        "4:00 pm",
    ]

    var inputGroup = $('<div>')
    inputGroup.attr("class", "input-group input-group-md")
    // ***ADDED A ID TO HELP LOCATE TIMEBLOCKS***
    inputGroup.attr("id", i)
    
    var inputGroupPrepend = $('<div>')
    inputGroupPrepend.addClass('input-group-prepend')
    
    var inputGroupText = $('<span>')
    inputGroupText.addClass("input-group-text")
    inputGroupText.text(timeTiltles[i])
    
    container.append(inputGroup)
    inputGroup.append(inputGroupPrepend)
    inputGroupPrepend.append(inputGroupText)
    
    var textArea = $('<textarea>')
    textArea.addClass('form-control')
    textArea.attr('aria-label', 'With textarea')
    textArea.attr('id', i+"-timeSlot")
    textArea.addClass("present")

    inputGroup.append(textArea)
    
    var btn = $('<button>')
    btn.addClass('btn saveBtn')
    btn.attr('button')
    btn.attr('id', i+"-btn")
    btn.text('Save')
    
    inputGroup.append(btn)


    // COLOR CHANGER
    var currentHour = moment().format('h');

    // if hours are from 9-12 this runs
    if(currentHour >= 8){
    if (currentHour < i + 9){
        textArea.attr("class","form-control future")
    } else if (currentHour > i + 9){
        textArea.attr("class","form-control past")
    }} else {
     // if hours are 1pm and after
    if (currentHour < i - 3){
        textArea.attr("class", "form-control future")
    } else if (currentHour > i - 3){
        textArea.attr("class", "form-control past")
    }}

};




// run through and take textevent from storage and 
// put them into their corrisponing time slots
function rendertextEvents(){
    for (var i = 0; i < 8; i++){
        var timeSlotList = [
            "0-timeSlot",
            "1-timeSlot",
            "2-timeSlot",
            "3-timeSlot",
            "4-timeSlot",
            "5-timeSlot",
            "6-timeSlot",
            "7-timeSlot",
        ]
        var c = timeSlotList[i]
        var e = "#"+c
       var d = localStorage.getItem(c)
        console.log(c)
        console.log(d)

        $(e).text(JSON.parse(localStorage.getItem(c)))
    }
}


rendertextEvents()



// Click event buttons for each save button
$('#0-btn').on("click", function (){
    var textEvent = $('#0-timeSlot').val().trim()
    var timeSlot = "0-timeSlot"

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})

$('#1-btn').on("click", function (){
    var textEvent = $('#1-timeSlot').val().trim()
    var timeSlot = "1-timeSlot"

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})

$('#2-btn').on("click", function (){
    var textEvent = $('#2-timeSlot').val().trim()
    var timeSlot = "2-timeSlot"

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})

$('#3-btn').on("click", function (){
    var textEvent = $('#3-timeSlot').val().trim()
    var timeSlot = '3-timeSlot'

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})

$('#4-btn').on("click", function (){
    var textEvent = $('#4-timeSlot').val().trim()
    var timeSlot = '4-timeSlot'

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})

$('#5-btn').on("click", function (){
    var textEvent = $('#5-timeSlot').val().trim()
    var timeSlot = '5-timeSlot'

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})

$('#6-btn').on("click", function (){
    var textEvent = $('#6-timeSlot').val().trim()
    var timeSlot = '6-timeSlot'

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})

$('#7-btn').on("click", function (){
    var textEvent = $('#7-timeSlot').val().trim()
    var timeSlot = '7-timeSlot'

    console.log(timeSlot, textEvent)
    localStorage.setItem(timeSlot, JSON.stringify(textEvent))
})