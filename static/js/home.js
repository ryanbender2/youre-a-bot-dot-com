/* globals */
var pictures = [
    'pic-1.png',
    'pic-2.jpg',
    'pic-3.jpg',
    'pic-4.jpg',
    'pic-5.jpg',
    'pic-6.jpg',
    'pic-7.png',
    'pic-8.jpg'
]

function getRandomPicture() {
    var numOfPictures = pictures.length
    var randChoice = Math.floor(Math.random() * numOfPictures)
    return `static/images/${pictures[randChoice]}`
}

function loadPictures() {
  var grid = $(".grid-container");
  for (var i = 1; i <= 9; i++) {
    var fill = $('<div></div>').attr({
      id: `img-${i}`,
      class: "grid-item fill",
      onclick: `updatePicture("img-${i}")`
    })

    var newImage = $("<img></img>").attr({
      src: getRandomPicture(),
      alt: `Capcha Image ${i}`,
      title: "Do you think you're a bot? Because you are."
    })

    fill.append(newImage)
    grid.append(fill)
  }
}

$(document).ready(() => {
  loadPictures()
});

function updatePicture(picture) {
    var pic = $(`#${picture} img`)
    pic.fadeOut(1000, () => {
        $(pic).attr('src', getRandomPicture())
        $(pic).fadeIn(1000)
    })
}

function handleClick() {
    var footer = $('#footer')
    var no = $('<span>NO</span>').attr({
        class: "footer-message-no"
    })
    footer.prepend(no)

    $(no).animate({
        opacity: 1,
        left: "60%",
    }, 1500, () => {
        $(no).remove()
    })
}
