// just to test that the javascript file is linked properly
console.log('It works!');

// adds an event listener to the entire window
window.addEventListener("load", function()
{
    // finds the hmtl element called "items_container" and 
    // assigns it to the variable "items_container"
    var items_container = document.getElementById("items_container");

    // declares a thumbtimer variable that will be used later to
    // store the reference to the timer controlling the image cycling
    var thumbtimer, ti = 0, dir = "item_images/";   // ti keeps track of the image being displayed

    // these objects represent different photo collections
    var obj1 = {name: "Lake Photos", pics:["boatGlasses.jpg", "mattChair.jpg", "mattSurf.jpg", "twoDucks.jpg"]}
    var obj2 = {name: "Food Photos", pics:["squarePizza.jpg", "tacosLos.jpg", "chickenSandwich.jpg", "beefRibs.jpg"]}
    var obj3 = {name: "Car Photos", pics:["lambo.jpg", "ferrari.jpg", "corvette.jpg", "supra.jpg"]}
    var obj4 = {name: "View Photos", pics:["snowboarding.jpg", "beachSunset.jpg", "lakeInSequoia.jpg", "lebanon.jpg"]}
   
    // this array holds all the different photo collections
    var ary = [obj1, obj2, obj3, obj4];

    // loops through the "ary" array to create and insert html elements
    for (var i = 0; i < ary.length; i++)
    {
        // crates a "div" element that holds an image and its caption
        var div = document.createElement("div");
        var img = document.createElement("img");    // image
        var span = document.createElement("span");  // caption

        // sets the class name to "item"
        div.className = "item";

        // the image object is assigned an attribute called "oi"
        // which stands for "object index". and gives it the value i
        img.oi = i;

        // the src attribute is set to the first image in the array for the current object
        img.src = dir + ary[i].pics[0];

        // take the name of the object 
        span.innerHTML = ary[i].name;

        // take the div we just created dynamically and put it 
        // into the items_container that we created in our html file
        items_container.appendChild(div);

        // appends the image and span elements to the 'div' element
        div.appendChild(img);
        div.appendChild(span);

        // when the user's mouse hovers over the image,
        // we want to start cycling
        img.addEventListener("mouseover", function(event)
            {
                // starts a timer and sets it to 1000 milliseconds,
                // changes the image after the set time
                thumbtimer = setInterval(function()
                {
                    // increments the image index after the timer
                    ti++;

                    // resets ti if the end of the array is reached,
                    // allowing the cycling to restart
                    if (ti == ary[event.target.oi].pics.length)
                    {
                        ti = 0;
                    }
                    // changes the image's src attribute to the next image in the array
                    event.target.src = dir + ary[event.target.oi].pics[ti];
                },1000);     
            });

        // when the user's mouse moves off of the image,
        // we want to stop cycling
        img.addEventListener("mouseout", function(event)
            {
                // stops image cycling
                clearInterval(thumbtimer);

                // resets the image index to 0
                ti = 0;

                // resets the image back to the first one in the array
                event.target.src = dir + ary[event.target.oi].pics[ti];
            });
    }
})

// triggers the toggle to switch the class on the body element
let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=>
    {
        document.body.classList.toggle('dark');
    });



const cursor = document.querySelector(".cursor");
var timeout;
    
// follows the cursor when the mouse moves
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    
    //cursor effects when the mouse is stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
});
    
// cursor effects when mouse 'out'
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});