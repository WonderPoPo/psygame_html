
var i_max_width =  $("#opponent_HP").width();
var i = document.getElementById('opponent_HP_value');  // assign hp
var i_width =  $("#opponent_HP_value").width();   // 計算hp

var j_max_width =  $("#player_HP").width();
var j = document.getElementById('player_HP_value');  // assign hp
var j_width =  $("#player_HP_value").width();   // 計算hp

var audioDom = document.getElementById("audio_BGM");
audioDom.volume = 0.15;
var audioDom1 = document.getElementById("audio_Attack");
audioDom1.volume = 0.65;
var audioDom2 = document.getElementById("audio_Win");
audioDom2.volume = 1.0; 

var audioDom3 = document.getElementById("audio_Attack1");
audioDom3.volume = 0.65;
var audioDom4 = document.getElementById("audio_Attack3");
audioDom4.volume = 0.65;
var audioDom5 = document.getElementById("audio_Attack2");
audioDom5.volume = 0.65;


var host_value = document.getElementById("company");
var name_value = document.getElementById("name");
var phone_value = document.getElementById("phonenum");
var score_counter = 0
var sel_game = 0

$( "*" ).on('click', function(){	
  

	audioDom.play();

});

function close_game() {
	send_score_api();
	$(".start_bg").fadeIn(500);
	$(".End_bg").fadeOut(500);
	$("#WIN").fadeOut(500);
	$("#LOSE").fadeOut(500);
	setTimeout(function(){reset_game()},500);
}

function reset_game(){
	i.style.width = i_max_width + "px"; 
	i_width =  $("#opponent_HP_value").width();
	i.style.backgroundColor='#4cc844';	
	j.style.width = j_max_width + "px"; 
	j_width =  $("#player_HP_value").width();
	j.style.backgroundColor='#4cc844';	
	$(".player1").fadeOut(0);
	$("#player_name1").fadeOut(0);
	$(".opponent1").fadeOut(0);
	$("#opponent_name1").fadeOut(0);
	$(".player2").fadeOut(0);
	$("#player_name2").fadeOut(0);
	$(".opponent2").fadeOut(0);
	$("#opponent_name2").fadeOut(0);
	$(".player3").fadeOut(0);
	$("#player_name3").fadeOut(0);
	$(".opponent3").fadeOut(0);
	$("#opponent_name3").fadeOut(0);
	
	$("#intro_empty").fadeOut(0);
	$("img.intro1_1").fadeOut(0);
	$("img.intro1_2").fadeOut(0);
	$("img.intro1_3").fadeOut(0);
	$("img.intro1_4").fadeOut(0);
	
	$("img.intro2_1").fadeOut(0);
	$("img.intro2_2").fadeOut(0);
	$("img.intro2_3").fadeOut(0);
	$("img.intro2_4").fadeOut(0);
	
	$("img.intro3_1").fadeOut(0);
	$("img.intro3_2").fadeOut(0);
	$("img.intro3_3").fadeOut(0);
	$("img.intro3_4").fadeOut(0);
	
	score_counter = 0;
	
	$(".skill1_1").fadeOut(500);	
	$(".skill1_2").fadeOut(500);	
	$(".skill1_3").fadeOut(500);	
	$(".skill1_4").fadeOut(500);	
	
	$(".skill2_1").fadeOut(500);	
	$(".skill2_2").fadeOut(500);	
	$(".skill2_3").fadeOut(500);	
	$(".skill2_4").fadeOut(500);
	
	$(".skill3_1").fadeOut(500);	
	$(".skill3_2").fadeOut(500);	
	$(".skill3_3").fadeOut(500);	
	$(".skill3_4").fadeOut(500);	
	
}

function game1() {
	sel_game = 1 ;
	$(".start_bg").fadeOut(500);
	$(".player1").fadeIn(500);
	$("#player_name1").fadeIn(500);
	$(".opponent1").fadeIn(500);
	$("#opponent_name1").fadeIn(500);
	//$("#player_HP_value").fadeIn(500);
	
	$(".skill1_1").fadeIn(500);	
	$(".skill1_2").fadeIn(500);	
	$(".skill1_3").fadeIn(500);	
	$(".skill1_4").fadeIn(500);	

}
function game2() {
	sel_game = 2 ;
	$(".start_bg").fadeOut(500);
	$(".player2").fadeIn(500);
	$("#player_name2").fadeIn(500);
	$(".opponent2").fadeIn(500);
	$("#opponent_name2").fadeIn(500);	
	
	$(".skill2_1").fadeIn(500);	
	$(".skill2_2").fadeIn(500);	
	$(".skill2_3").fadeIn(500);	
	$(".skill2_4").fadeIn(500);	
}
function game3() {
	sel_game = 3 ;
	$(".start_bg").fadeOut(500);
	$(".player3").fadeIn(500);
	$("#player_name3").fadeIn(500);
	$(".opponent3").fadeIn(500);
	$("#opponent_name3").fadeIn(500);	
	
	$(".skill3_1").fadeIn(500);	
	$(".skill3_2").fadeIn(500);	
	$(".skill3_3").fadeIn(500);	
	$(".skill3_4").fadeIn(500);	

}



function use_skill1()
{

    score_counter = score_counter + 400 ;
    $("#intro_empty").fadeIn(300);
	$("#intro_empty").fadeOut(600);
	player_attack();
	if ( sel_game == 1 ) {
		setTimeout(function(){audioDom3.play();},1000);
		setTimeout(function(){$("img.intro1_1").fadeIn(0);},220);
	}
	else if ( sel_game == 2 ) {
		setTimeout(function(){audioDom4.play();},100);
		setTimeout(function(){$("img.intro2_1").fadeIn(0);},220);
		
	}
	else if ( sel_game == 3 ) {
		setTimeout(function(){audioDom5.play();},800);
		setTimeout(function(){$("img.intro3_1").fadeIn(0);},220);	
	}
	
	 
    setTimeout(function(){skill_damage(0.1)},1150);

	var ammo = document.getElementById('img.ammo');
	var ammo_posi = getPosition(ammo);
	//$("img.ammo").animate({left: -28%} , 1000);
    $("img.attack").fadeIn(0);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
	$("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
    
	$("img.attack").fadeOut(300);
	
	var elem = document.querySelector('img.opponent');
    var position = getPosition(elem);


	setTimeout(function(){hit_opponent()},1150);
  
    $("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
}

function use_skill2()
{
	score_counter = score_counter + 300 ;
    $("#intro_empty").fadeIn(300);
	$("#intro_empty").fadeOut(600);
	player_attack();
	if ( sel_game == 1 ) {
		setTimeout(function(){audioDom3.play();},1000);
		setTimeout(function(){$("img.intro1_2").fadeIn(0);},220);
	}
	else if ( sel_game == 2 ) {
		setTimeout(function(){audioDom4.play();},100);
		setTimeout(function(){$("img.intro2_2").fadeIn(0);},220);
		
	}
	else if ( sel_game == 3 ) {
		setTimeout(function(){audioDom5.play();},800);
		setTimeout(function(){$("img.intro3_2").fadeIn(0);},220);	
	}
	 
    setTimeout(function(){skill_damage(0.2)},1150);

	var ammo = document.getElementById('img.ammo');
	var ammo_posi = getPosition(ammo);
	//$("img.ammo").animate({left: -28%} , 1000);
    $("img.attack").fadeIn(0);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
	$("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
    
	$("img.attack").fadeOut(300);
	
	var elem = document.querySelector('img.opponent');
    var position = getPosition(elem);


	setTimeout(function(){hit_opponent()},1150);
  
    $("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
}

function use_skill3()
{
	score_counter = score_counter + 200 ;
    $("#intro_empty").fadeIn(300);
	$("#intro_empty").fadeOut(600);
	player_attack();
	if ( sel_game == 1 ) {
		setTimeout(function(){audioDom3.play();},1000);
		setTimeout(function(){$("img.intro1_3").fadeIn(0);},220);
	}
	else if ( sel_game == 2 ) {
		setTimeout(function(){audioDom4.play();},100);
		setTimeout(function(){$("img.intro2_3").fadeIn(0);},220);
		
	}
	else if ( sel_game == 3 ) {
		setTimeout(function(){audioDom5.play();},800);
		setTimeout(function(){$("img.intro3_3").fadeIn(0);},220);	
	}
	 
    setTimeout(function(){skill_damage(0.3)},1150);

	var ammo = document.getElementById('img.ammo');
	var ammo_posi = getPosition(ammo);
	//$("img.ammo").animate({left: -28%} , 1000);
    $("img.attack").fadeIn(0);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
	$("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
    
	$("img.attack").fadeOut(300);
	
	var elem = document.querySelector('img.opponent');
    var position = getPosition(elem);


	setTimeout(function(){hit_opponent()},1150);
  
    $("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
}

function use_skill4()
{
	score_counter = score_counter + 100 ;
    $("#intro_empty").fadeIn(300);
	$("#intro_empty").fadeOut(600);
	player_attack();
	if ( sel_game == 1 ) {
		setTimeout(function(){audioDom3.play();},1000);
		setTimeout(function(){$("img.intro1_4").fadeIn(0);},220);
	}
	else if ( sel_game == 2 ) {
		setTimeout(function(){audioDom4.play();},100);
		setTimeout(function(){$("img.intro2_4").fadeIn(0);},220);
		
	}
	else if ( sel_game == 3 ) {
		setTimeout(function(){audioDom5.play();},800);
		setTimeout(function(){$("img.intro3_4").fadeIn(0);},220);	
	}
	 
    setTimeout(function(){skill_damage(0.4)},1150);

	var ammo = document.getElementById('img.ammo');
	var ammo_posi = getPosition(ammo);
	//$("img.ammo").animate({left: -28%} , 1000);
    $("img.attack").fadeIn(0);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
	$("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
	$("img.attack").animate({width:'70%',height:'90%',left:'14%' ,top:'-6%'},300);
    
	$("img.attack").fadeOut(300);
	
	var elem = document.querySelector('img.opponent');
    var position = getPosition(elem);


	setTimeout(function(){hit_opponent()},1150);
  
    $("img.attack").animate({width:'30%',height:'50%',left:'34%' ,top:'14%'},300);
}

function skill_damage( damage) {
	audioDom1.play();
	console.log(i_width);
	i_width = i_width - damage * i_max_width ;
	console.log(i_width);
	i.style.width = i_width+"px"; 
	opponent_hp_color(i_width);
	if ( i_width <= 0 ) {
		
		$(".End_bg").fadeIn(0);
		win_func();
		i.style.width = 0 + "px"; 
		setTimeout(function(){$("img.opponent1").fadeOut(300);},600);
		setTimeout(function(){$("img.opponent2").fadeOut(300);},600);
		setTimeout(function(){$("img.opponent3").fadeOut(300);},600);
		setTimeout(function(){audioDom2.play();},600);
		
		
		setTimeout(function(){$("#WIN").fadeIn(500);},1000);
		return ;
	}
	opponent_Attack(0.12);
}
function win_func(){
	var gg =  document.getElementById("name");
	console.log(gg.value)
	console.log(score_counter)
	send_score_api();
	
}

function lose_func(){
	send_score_api();
	
}

function opponent_Attack( damage) {
	console.log(i_width);
	j_width = j_width - damage * j_max_width ;
	console.log(i_width);
	j.style.width = j_width+"px"; 
	player_hp_color(j_width);
	if ( j_width <= 0 ) {
		$(".End_bg").fadeIn(0);
		j.style.width = 0 + "px"; 
		setTimeout(function(){$("img.player1").fadeOut(300);},600);
		setTimeout(function(){$("img.player2").fadeOut(300);},600);
		setTimeout(function(){$("img.player3").fadeOut(300);},600);
		
		setTimeout(function(){$("#LOSE").fadeIn(500);},1000);

	}
	
}

function opponent_hp_color( cur_hp ){
	if ( cur_hp / i_max_width <= 0.1 ) {
		i.style.backgroundColor='#ff3203';		
	}
	else if ( cur_hp / i_max_width <= 0.2 ) {
		i.style.backgroundColor='#fc542b';		
	}
	else if ( cur_hp / i_max_width <= 0.3 ) {
		i.style.backgroundColor='#ffa32b';		
	}
	else if ( cur_hp / i_max_width <= 0.4 ) {
		i.style.backgroundColor='#ffda55';		
	}
	else if ( cur_hp / i_max_width <= 0.5 ) {
		i.style.backgroundColor='#ffff55';		
	}
	else if ( cur_hp / i_max_width <= 0.6 ) {
		i.style.backgroundColor='#d5ed4d';		
	}
	else if ( cur_hp / i_max_width <= 0.7 ) {
		i.style.backgroundColor='#aedb44';		
	}
	else if ( cur_hp / i_max_width <= 0.8 ) {
		i.style.backgroundColor='#9cd023';		
	}
	else if ( cur_hp / i_max_width <= 0.9 ) {
		i.style.backgroundColor='#7cd148';		
	}
	else if ( cur_hp / i_max_width < 1 ) {
		i.style.backgroundColor='#4cc844';		
	}
}

function player_hp_color( cur_hp ){
	if ( cur_hp / i_max_width <= 0.1 ) {
		j.style.backgroundColor='#ff3203';		
	}
	else if ( cur_hp / i_max_width <= 0.2 ) {
		j.style.backgroundColor='#fc542b';		
	}
	else if ( cur_hp / i_max_width <= 0.3 ) {
		j.style.backgroundColor='#ffa32b';		
	}
	else if ( cur_hp / i_max_width <= 0.4 ) {
		j.style.backgroundColor='#ffda55';		
	}
	else if ( cur_hp / i_max_width <= 0.5 ) {
		j.style.backgroundColor='#ffff55';		
	}
	else if ( cur_hp / i_max_width <= 0.6 ) {
		j.style.backgroundColor='#d5ed4d';		
	}
	else if ( cur_hp / i_max_width <= 0.7 ) {
		j.style.backgroundColor='#aedb44';		
	}
	else if ( cur_hp / i_max_width <= 0.8 ) {
		j.style.backgroundColor='#9cd023';		
	}
	else if ( cur_hp / i_max_width <= 0.9 ) {
		j.style.backgroundColor='#7cd148';		
	}
	else if ( cur_hp / i_max_width < 1 ) {
		j.style.backgroundColor='#4cc844';		
	}
}


function player_attack () {
	if ( sel_game == 1 ){
		$("img.player1").animate({left:'12%'},100);
		//$("img.player1").animate({left:'8%'},100);
		setTimeout(function(){$("img.player1").animate({left:'9%'},100);},1400);
	}
	else if ( sel_game == 2 ){
		$("img.player2").animate({left:'13%'},100);
		//$("img.player2").animate({left:'9%'},100);
		setTimeout(function(){$("img.player2").animate({left:'10%'},100);	},1400);
			
	}
	else if ( sel_game == 3 ){
		$("img.player3").animate({left:'15%'},100);
		//$("img.player3").animate({left:'11%'},100);
		setTimeout(function(){$("img.player3").animate({left:'12%'},100);},1400);
				
	}
	
}

function hit_opponent () {
	if ( sel_game == 1 ){
		$("img.opponent1").animate({right:'10%'},100);
		$("img.opponent1").animate({right:'8%'},100);
		$("img.opponent1").animate({right:'9%'},100);	
	}
	else if ( sel_game == 2 ){
		$("img.opponent2").animate({right:'13%'},100);
		$("img.opponent2").animate({right:'11%'},100);
		$("img.opponent2").animate({right:'12%'},100);		
	}
	else if ( sel_game == 3 ){
		$("img.opponent3").animate({right:'13%'},100);
		$("img.opponent3").animate({right:'11%'},100);
		$("img.opponent3").animate({right:'12%'},100);		
	}
	
}

function next_intro(){

	$("#intro_empty").fadeOut(200);
	
}

function Endturn(){

	$("img.intro1_1").fadeOut(200);
	$("img.intro1_2").fadeOut(200);
	$("img.intro1_3").fadeOut(200);
	$("img.intro1_4").fadeOut(200);
	
	$("img.intro2_1").fadeOut(200);
	$("img.intro2_2").fadeOut(200);
	$("img.intro2_3").fadeOut(200);
	$("img.intro2_4").fadeOut(200);
	
	$("img.intro3_1").fadeOut(200);
	$("img.intro3_2").fadeOut(200);
	$("img.intro3_3").fadeOut(200);
	$("img.intro3_4").fadeOut(200);
	
}

async  function send_score_api(  )
{
	console.log(host_value.value) ;
	console.log(name_value.value) ;
	console.log(phone_value.value) ;
	console.log(score_counter);
	console.log(new Date());
    data = { 'name': String(name_value.value),
			  'timestamp': String(new Date()),
			  'score': parseInt(score_counter),
			  'phone_num': String(phone_value.value),
			  'host_name': String(host_value.value) } ;
    const url = 'https://11a1gc6r7c.execute-api.ap-southeast-1.amazonaws.com/DemoDay/59a10e6f61a586e069070e0efb803d77ce0e497f' ;
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'User-agent' : 'Mozilla/4.0 Custom User Agent',
            'Content-Type': 'application/json',
			'x-api-key' : 'CJzmxf3Qr476gb0BBVaZ74mO1hSp3f293IROQGMR'
        })
    }).then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

      // Examine the text in the response
        response.json().then( function(data){
			console.log( data );
            for( item of data )
                console.log( item );
        });

    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}



function getPosition (element) {
  var x = 0;
  var y = 0;
  // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
  while ( element ) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return { x: x, y: y };
}