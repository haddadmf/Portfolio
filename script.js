console.log('It works!');

window.addEventListener("load", function()
{
    var items_container = document.getElementById("items_container");
    var thumbtimer, ti = 0, dir = "item_images/";
    var obj1 = {name: "Lake_Photos", pics:["boatGlasses.jpg", "mattChair.jpg", "mattSurf.jpg", "twoDucks.jpg"]}
    var obj2 = {name: "Lake_Photos", pics:["boatGlasses.jpg", "mattChair.jpg", "mattSurf.jpg", "twoDucks.jpg"]}
    var obj3 = {name: "Lake_Photos", pics:["boatGlasses.jpg", "mattChair.jpg", "mattSurf.jpg", "twoDucks.jpg"]}
    var ary = [obj1, obj2, obj3];

    for (var i = 0; i < ary.length; i++)
    {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var span = document.createElement("span");
        div.className = "item";
        img.oi = i;
        
        //
        img.src = dir + ary[i].pics[0];

        // take the name of the object 
        span.innerHTML = ary[i].name;

        // take the div we just created dynamically and put it 
        // into the items_container that we created in our html file
        items_container.appendChild(div);

        div.appendChild(img);
        div.appendChild(span);

        // when the user's mouse hovers over the image,
        // we want to start cycling
        img.addEventListener("mouseover", function(event)
            {
                thumbtimer = setInterval(function()
                {
                    ti++;
                    if (ti == ary[event.target.oi].pics.length)
                    {
                        ti = 0;
                    }
                    event.target.src = dir + ary[event.target.oi].pics[ti];
                },1000);     
            });

        // when the user's mouse moves off of the image,
        // we want to stop cycling
        img.addEventListener("mouseout", function(event)
            {
                clearInterval(thumbtimer);
                ti = 0;
                event.target.src = dir + ary[event.target.oi].pics[ti];
            });
    }

})