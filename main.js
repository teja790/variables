
function change(){
    document.getElementById("box").src="White-Iceberg-Schneewittchen-Roses.jpg";
}
function changeimg(){
    document.getElementById("box1").src="images.jpeg";
}
function varExample(){
    if(true){
        var teja="Teja";
        console.log(teja);
        teja="Teja d";
    }
    console.log(teja);
    
}
varExample();
function letExample(){
    if(true){
        let y="image";
        console.log(y);
        y="clickOnImage";
        console.log(y);
    }
}
letExample();

function constExample(){
    const x="print";
    console.log(x);
}
constExample();

    var a="teja";
    function varfunction(){
        if(true){
            a="kalyan";
            document.getElementById("output").textContent=a;
            
        }
    }
    varfunction();

    function letfunction(){
        if(true){
            let b="Teja d";
            document.getElementById("output1").textContent=b;
            
        }
    }
    letfunction();
    function constfunction(){
        if(true){
            const c="Teja dwarakacharla";
            document.getElementById("output2").textContent=c;
        }
    }
    constfunction();
    

