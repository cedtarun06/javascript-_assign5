function myfunc(){
    a = document.getElementById('age').value
    n = document.getElementById('name').value
    w = document.getElementById('weight').value
    validate(a,n,w)
}

function validate(a,n,w){ 
   
    if(a =="" ){
        document.getElementById('com').innerHTML = "Fill your age and weight"
    }
    else {
        condition(a,n,w)
    }

}
function condition(a,n,w){
    if (a>=5 && a<=7){
        if( w>=15 && w<=20){
            dis = "Hello "+n +" Your weight!!! is perfect"
            display(dis)
        }
        else if(w>20){
            dis = "Hello "+n +" Your weight!!! is greater than recomended value "+w + " at an age of "+a
            display(dis)

        }
        else if(w<15){
            dis = "Hello "+n +" Your weight!!! is less than recomended value "+w + " at an age of "+a
            display(dis)

        }
        
    }
    else if (a>=8 && a<=10){
        if( w>=21 && w<=25){
            dis = "Hello "+n +" Your weight!!! is perfect"
            display(dis)
        }
        else if(w>25){
            dis = "Hello "+n +" Your weight!!! is greater than recomended value "+w + " at an age of "+a
            display(dis)

        }
        else if(w<21){
            dis = "Hello "+n +" Your weight!!! is less than recomended value "+w + " at an age of "+a
            display(dis)

        }
    }
    else if (a>=11 && a<=15){
        if( w>=26 && w<=30){
            dis = "Hello "+n +" Your weight!!! is perfect"
            display(dis)
        }
        else if(w>30){
            dis = "Hello "+n +" Your weight!!! is greater than recomended value "+w + " at an age of "+a
            display(dis)

        }
        else if(w<26){
            dis = "Hello "+n +" Your weight!!! is less than recomended value "+w + " at an age of "+a
            display(dis)

        }
    }
    else if (a>=16 && a<=20){
        if( w>=31 && w<=40){
            dis = "Hello "+n +" Your weight!!! is perfect"
            display(dis)
        }
        else if(w>40){
            dis = "Hello "+n +" Your weight!!! is greater than recomended value "+w + " at an age of "+a
            display(dis)

        }
        else if(w<31){
            dis = "Hello "+n +" Your weight!!! is less than recomended value "+w + " at an age of "+a
            display(dis)

        }
    
    }
    else if(a>20){
        dis ="Your age is too much we can't guess"
        display(dis)
    }
    


}
function display(dis){
    document.getElementById('com').innerHTML = dis
}