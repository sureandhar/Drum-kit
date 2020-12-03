
var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');
// console.log(nine)
document.body.addEventListener('keydown', function(e){
    // console.log(e.keyCode);
    var ksound= e.keyCode===65 ?"music/boom.wav":
            e.keyCode===83 ?"music/clap.wav":
            e.keyCode===68 ?"music/hihat.wav":
            e.keyCode===70 ?"music/kick.wav":
            e.keyCode===71 ?"music/openhat.wav":
            e.keyCode===72 ?"music/ride.wav":
            e.keyCode===74 ?"music/snare.wav":
            e.keyCode===75 ?"music/tink.wav":
            e.keyCode===76 ?"music/tom.wav": 0;

           
        //    console.log(border.style.border);
            // console.log(ksound);
            function music(file)
            {
                if(file==0)
                {
                    alert("Click Matching key**")
                }
                else{
                    var music=new Audio(file);
                    music.play();
                    // console.log(file);
                }
                
                function clr()
                {

                    one.style.boxShadow="none";
                    two.style.boxShadow="none";
                    three.style.boxShadow="none";
                    four.style.boxShadow="none";
                    five.style.boxShadow="none";
                    six.style.boxShadow="none";
                    seven.style.boxShadow="none";
                    eight.style.boxShadow="none";
                    nine.style.boxShadow="none";
                    
                    var kprees=e.keyCode===65 ? one.style.boxShadow = "0px 0px 7.5px rgba(233, 233, 233, 0.603)" :
                    e.keyCode===83 ? two.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)":
                    e.keyCode===68 ?three.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)":
                    e.keyCode===70 ?four.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)":
                    e.keyCode===71 ?five.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)":
                    e.keyCode===72 ?six.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)":
                    e.keyCode===74 ?seven.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)":
                    e.keyCode===75 ?eight.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)":
                    e.keyCode===76 ? nine.style.boxShadow="0px 0px 7.5px rgba(233, 233, 233, 0.603)": 0;
            
                    // console.log(kprees)
                    
                    setTimeout(function(){
                        one.style.boxShadow="none";
                        two.style.boxShadow="none";
                        three.style.boxShadow="none";
                        four.style.boxShadow="none";
                        five.style.boxShadow="none";
                        six.style.boxShadow="none";
                        seven.style.boxShadow="none";
                        eight.style.boxShadow="none";
                        nine.style.boxShadow="none";
                    },100);
                }
                clr();
            
            }

            
            
            music(ksound);
});






