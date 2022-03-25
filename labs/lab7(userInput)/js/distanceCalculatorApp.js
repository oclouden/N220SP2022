//Owen Louden, Intro Media Apps, 3/24/22


//main function to Show the Distance
function ShowDistance()
//within this, we want to create 4 seperate variables, all with the value inputed from our text inputs
        {

        var x1, x2, y1, y2;
        //parseFloat to help turn this information into a string of values
            x1=parseFloat(document.getElementById('xOne').value);
            x2=parseFloat(document.getElementById('xTwo').value);
            y1=parseFloat(document.getElementById('yOne').value);
            y2=parseFloat(document.getElementById('yTwo').value);

//calculate the distance using the distance formula, the square root of { (x1-x2)^2 + (y1-y2)^2}
        var distance = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-
y2), 2) );

//output the information into this ID
            document.getElementById('outPut').innerHTML=
            //relabel previous distance points
                 'The distance bewtween (' + x1 + ',' + y1 + ') and (' 
+ x2 + ',' + y2 + ') is '+ distance ;
//submit the distance using the math solution
 return distance;
        }