function start() {
    var node = document.createElement("div")
    node.style.height = '100%'
    node.style.width = '100%'
    node.style.display = 'flex'
    node.style.flexDirection = 'row'
    node.style.alignItems = 'center'
    node.style.justifyContent = 'center'
    node.style.backgroundColor = 'transparent'

    var picture = document.createElement('img')
    picture.style.height = "450px"
    picture.style.width = "450px"
    picture.src = "pikachu.png"
    picture.backgroundColor = "white"
    picture.style.border = "10px solid"
    picture.style.borderColor = "#4E9C89"
    picture.style.margin = "50px"
    picture.style.borderRadius = "50%"

    var text = document.createElement('div')
    text.style.height = "70%"
    text.style.width = "50%"
    text.display = "flex"
    text.flexDirection = "column"
    text.style.backgroundColor = "#FAF3DD"

    var greeting = document.createElement("h2")
    greeting.textContent = "Hi! The name's Rhei"
    greeting.style.backgroundColor = "transparent"
    greeting.style.fontFamily = "Trebuchet MS, sans-serif"

    var content = document.createElement("p")
    content.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet placerat rhoncus. Nam ac porttitor est. Nulla vulputate nunc sem, sodales maximus libero maximus a. Donec nisi velit, faucibus vel ultricies at, tincidunt at arcu. Phasellus congue dapibus erat, quis pulvinar nisi euismod ac. Vestibulum consectetur purus sed rhoncus ultrices. Aenean pharetra quis metus nec dapibus. In laoreet tempus ullamcorper. Donec ut lorem aliquam, ullamcorper mi vitae, congue mauris."
    content.style.backgroundColor = "transparent"
    content.style.fontFamily = "Trebuchet MS, sans-serif"

    var line = document.createElement("br")
    text.append(greeting)
    text.append(line)
    text.append(content)
    node.appendChild(picture)
    node.appendChild(text)

    document.getElementById("space").appendChild(node);
}

$('#profile').on('click', function() {
    console.log("Profile clicked")
})

$('#skills').on('click', function() {
    console.log("Skills clicked")
})

$('#projects').on('click', function() {
    console.log("Projects clicked")
})