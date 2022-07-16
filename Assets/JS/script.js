var currentDay = $('#currentDay')
var time = moment().format('MMMM Do YYYY');
var btn = $('button')
var container = $('.container')

$('#currentDay').text(time);


// create the time slots and add colors to textarea if they are in the past or future
for (var i = 0; i < 8; i++){
    var timeHour = i + 9 + "00 Hours"
    
    if (timeHour === "900 Hours"){
        timeHour = "0900 Hours"
    }

    var inputGroup = $('<div>')
    inputGroup.attr("class", "input-group input-group-md")
    
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
    textArea.addClass("bg-danger")

    inputGroup.append(textArea)
    
    var btn = $('<button>')
    btn.addClass('btn btn-primary')
    btn.attr('button')
    btn.text('Save')
    
    inputGroup.append(btn)

// current time conparison to change textarea color
    var currentHour = 11
    //  moment().format('h');
    
    console.log(currentHour)

    if (currentHour < i + 9){
        textArea.attr("class","form-control bg-success")
    } else if (currentHour > i + 9){
        textArea.attr("class","form-control bg-secondary")
    }



}
