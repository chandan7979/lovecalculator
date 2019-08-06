// alert("Created by Chandan Kushwaha")
$(document).ready(function() {
    $(".b1").click(function(){
        var her=$("#a").val();
        var his=$("#b").val();
        var comm=[];
        var sum=0;
        var name1 = her + his;
        var count=1;
        var arr=[];
        $(".res").css('visibility','visible');
        if(her=="" || his==""){
            $("#p").text("Enter Valid Name");
        }
        else{
            for(var i=0; i<name1.length-1; i++){
                if(name1.charAt(i)=="a" || name1.charAt(i)=="e" || name1.charAt(i)=="o" || name1.charAt(i)=="u")
                {
                    comm.push(6);
                }
                else
                if(name1.charAt(i)=="x" || name1.charAt(i)=="w" || name1.charAt(i)=="z")
                {
                    comm.push(10);
                }
                else{
                    comm.push(3);
                }
            }
            for(var j=0; j<comm.length; j++){
                sum += comm[j];
            }
            if(sum > 100)
            {
                sum = 100;
            }
            if(sum < 25)
            {
                $("#p").text(sum + "%");
                $("#q").text("😟 Your realtion might work out but the chance are very few. but don`t stop working on your relation 😟");
            }
            else if (sum < 50)
            {
                $("#p").text(sum+"%");
                $("#q").text(" To be brave is to love unconditionally without expecting anything in return. You guys need to put a little effort in your relation. The nature will conspire, then!! ");
            }
            else if(sum < 75)
            {
                $("#p").text(sum+"%");
                $("#q").text("😉 I know I am in love with you because my reality is finally better than my dreams. 😉");
            }
            else if(sum < 95)
            {
                $("#p").text(sum+"%");
                $("#q").text("😍 You have very good chance of being successful. You are Flawless together 😍");
            }
            else
            {
                $("#p").text(sum+"%");
                $("#q").text(" 😘 You are Perfect couple. You seem to be made for each other 😘 If I know what love is, it is because of you.");
            }
        }
    });
});