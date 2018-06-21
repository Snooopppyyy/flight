var navMain = document.querySelector('.theory__button');
var sidebar = document.querySelector('.sidebar');
var close = document.querySelector('.close');

navMain.addEventListener('click', function(){
	if(!sidebar.classList.contains('animated_down')){
		sidebar.classList.remove('animated_top');
		sidebar.classList.add('animated_down');
	}
});

close.addEventListener('click', function(){
	if(sidebar.classList.contains('animated_down')){
		sidebar.classList.add('animated_top');
		sidebar.classList.remove('animated_down');
	}
});


var airport = document.querySelector('.airport_link');
var portList = document.querySelector('.airport_info');

var namePort = document.querySelector('.table__name');
var moreInfo = document.querySelector('.info__table');

airport.addEventListener('click', function(){
	if(portList.classList.contains('active')){
		portList.classList.remove('active');
		// if(moreInfo.classList.contains('active')){
		// 	moreInfo.classList.remove('active');
		// }
	}
	else{
		portList.classList.add('active');
	}
});

 document.addEventListener('keydown', function(event){
    if (event.keyCode === 27 && sidebar.classList.contains('animated_down')) {
        sidebar.classList.add('animated_top');
		sidebar.classList.remove('animated_down');
    }
});

// namePort.addEventListener('click', function(){
// 	if(moreInfo.classList.contains('active')){
// 		moreInfo.classList.remove('active');
// 	}
// 	else{
// 		moreInfo.classList.add('active');
// 	}
// });

function level1()
{
	var shDegree = document.getElementById("shirota_degree");
	var shMinute = document.getElementById("shirota_minute");
	var shSeconds = document.getElementById("shirota_seconds");
	var shDir = document.getElementById("shirota_dir");

	var shLabel = document.querySelector('.accent-sh');
	var dolLabel = document.querySelector('.accent-dol');
	var vppLabel = document.querySelector('.accent-vpp');

	var dolDegree = document.getElementById("dolgota_degree");
	var dolMinute = document.getElementById("dolgota_minute");
	var dolSeconds = document.getElementById("dolgota_seconds");
	var dolDir = document.getElementById("dolgota_dir");

	var vpp = document.getElementById("vpp");

	var btnDisabled = document.getElementById('next-level');
	var flag = 0;

	var key = 0;
	var keyDolgota = 0;
	
	if(shDegree.value != 47){
		shDegree.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shDegree.style.borderColor="transparent";
		key++;
		flag++;
	}
	if(shMinute.value != 15){
		shMinute.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shMinute.style.borderColor="transparent";
		key++;
		flag++;
	}
	if(shSeconds.value != 29){
		shSeconds.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shSeconds.style.borderColor="transparent";
		key++;
		flag++;
	}
	if(shDir.value.toLowerCase() != 'n'){
		shDir.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shDir.style.borderColor="transparent";
		key++;
		flag++;
	}

	if(key > 3){
		shLabel.innerHTML = 'OK';
		shLabel.style.color="green";
	}else{
		shLabel.style.color = "rgb(244, 49, 49)";
	}

	if(dolDegree.value != 39){
		dolDegree.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolDegree.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}
	if(dolMinute.value != 49){
		dolMinute.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolMinute.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}
	if(dolSeconds.value != '05'){
		dolSeconds.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolSeconds.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}
	if(dolDir.value.toLowerCase() != 'e'){
		dolDir.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolDir.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}

	if(keyDolgota > 3){
		dolLabel.innerHTML = 'OK';
		dolLabel.style.color="green";
	}else{
		dolLabel.style.color = "rgb(244, 49, 49)";
	}

	if(vpp.value != 85){
		vpp.style.border="3px solid #f43131";
		vppLabel.innerHTML = 'Неправильная ВПП';
		vppLabel.style.color = "rgb(244, 49, 49)";
	}else{
		vpp.style.borderColor="transparent";
		vppLabel.innerHTML = 'OK';
		vppLabel.style.color="green";
		flag++;
	}

	if(flag > 8){
		if(!btnDisabled.classList.contains('btn-success')){
			btnDisabled.classList.add('btn-success');
			btnDisabled.classList.remove('disabled');
		}
	}else{
			btnDisabled.classList.add('disabled');
			btnDisabled.classList.remove('btn-success');
	}
}

function answer1(){

	setTimeout(answerDelay1, 1000);
	
}

function answerDelay1(){
	var shDegree = document.getElementById("shirota_degree");
	var shMinute = document.getElementById("shirota_minute");
	var shSeconds = document.getElementById("shirota_seconds");
	var shDir = document.getElementById("shirota_dir");

	var dolDegree = document.getElementById("dolgota_degree");
	var dolMinute = document.getElementById("dolgota_minute");
	var dolSeconds = document.getElementById("dolgota_seconds");
	var dolDir = document.getElementById("dolgota_dir");

	var vpp = document.getElementById("vpp");

	var shLabel = document.querySelector('.accent-sh');
	var dolLabel = document.querySelector('.accent-dol');
	var vppLabel = document.querySelector('.accent-vpp');

	shDegree.value = 47;
	shMinute.value = 15;
	shSeconds.value = 29;
	shDir.value = 'n';

	dolDegree.value = 39;
	dolMinute.value = 49;
	dolSeconds.value = '05';
	dolDir.value = 'e';

	vpp.value = 85;

	var btnDisabled = document.querySelector('.disabled');

	btnDisabled.classList.add('btn-success');
	btnDisabled.classList.remove('disabled');


	shDegree.style.borderColor="transparent";
	shMinute.style.borderColor="transparent";
	shSeconds.style.borderColor="transparent";
	shDir.style.borderColor="transparent";
	shLabel.innerHTML = 'OK';
	shLabel.style.color="green";

	dolDegree.style.borderColor="transparent";
	dolMinute.style.borderColor="transparent";
	dolSeconds.style.borderColor="transparent";
	dolDir.style.borderColor="transparent";

	dolLabel.innerHTML = 'OK';
	dolLabel.style.color="green";

	vpp.style.borderColor="transparent";
	vppLabel.innerHTML = 'OK';
	vppLabel.style.color="green";
}

function level2()
{
	var shDegree = document.getElementById("shirota_degree");
	var shMinute = document.getElementById("shirota_minute");
	var shSeconds = document.getElementById("shirota_seconds");
	var shDir = document.getElementById("shirota_dir");

	var dolDegree = document.getElementById("dolgota_degree");
	var dolMinute = document.getElementById("dolgota_minute");
	var dolSeconds = document.getElementById("dolgota_seconds");
	var dolDir = document.getElementById("dolgota_dir");

	var vpp = document.getElementById("vpp");
	var iso = document.getElementById("iso");
	var icao = document.getElementById("icao");
	var timeGMT = document.getElementById("timeGMT");

	var shLabel = document.querySelector('.accent-sh');
	var dolLabel = document.querySelector('.accent-dol');
	var vppLabel = document.querySelector('.accent-vpp');
	var isoLabel = document.querySelector('.accent-iso');
	var icaoLabel = document.querySelector('.accent-icao');
	var gmtLabel = document.querySelector('.accent-gmt');

	var btnDisabled = document.querySelector('#next-level');

	var flag = 0;

	var key = 0;
	var keyDolgota = 0;
	
	if(shDegree.value != 33){
		shDegree.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shDegree.style.borderColor="transparent";
		key++;
		flag++;
	}
	if(shMinute.value != 56){
		shMinute.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shMinute.style.borderColor="transparent";
		key++;
		flag++;
	}
	if(shSeconds.value != 33){
		shSeconds.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shSeconds.style.borderColor="transparent";
		key++;
		flag++;
	}
	if(shDir.value.toLowerCase() != 'n'){
		shDir.style.border="3px solid #f43131";
		shLabel.innerHTML = 'Неправильная широта';
	}else{
		shDir.style.borderColor="transparent";
		key++;
		flag++;
	}

	if(key > 3){
		shLabel.innerHTML = 'OK';
		shLabel.style.color="green";
	}else{
		shLabel.style.color = "rgb(244, 49, 49)";
	}

	if(dolDegree.value != 118){
		dolDegree.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolDegree.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}
	if(dolMinute.value != 24){
		dolMinute.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolMinute.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}
	if(dolSeconds.value != 25){
		dolSeconds.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolSeconds.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}
	if(dolDir.value.toLowerCase() != 'w'){
		dolDir.style.border="3px solid #f43131";
		dolLabel.innerHTML = 'Неправильная долгота';
	}else{
		dolDir.style.borderColor="transparent";
		keyDolgota++;
		flag++;
	}

	if(keyDolgota > 3){
		dolLabel.innerHTML = 'OK';
		dolLabel.style.color="green";
	}else{
		dolLabel.style.color = "rgb(244, 49, 49)";
	}

	if(vpp.value != 38){
		vpp.style.border="3px solid #f43131";
		vppLabel.innerHTML = 'Неправильная ВПП';
		vppLabel.style.color = "rgb(244, 49, 49)";
	}else{
		vpp.style.borderColor="transparent";
		vppLabel.innerHTML = 'OK';
		vppLabel.style.color="green";
		flag++;
	}

	if(iso.value.toLowerCase() != 'us'){
		iso.style.border="3px solid #f43131";
		isoLabel.innerHTML = 'Неправильный код страны';
		isoLabel.style.color = "rgb(244, 49, 49)";
	}else{
		iso.style.borderColor="transparent";
		isoLabel.innerHTML = 'OK';
		isoLabel.style.color="green";
		flag++;
	}

	if(icao.value.toLowerCase() != 'klax'){
		icao.style.border="3px solid #f43131";
		icaoLabel.innerHTML = 'Неправильный код аэропорта';
		icaoLabel.style.color = "rgb(244, 49, 49)";
	}else{
		icao.style.borderColor="transparent";
		icaoLabel.innerHTML = 'OK';
		icaoLabel.style.color="green";
		flag++;
	}

	if(timeGMT.value.toLowerCase() != '-8.0'){
		timeGMT.style.border="3px solid #f43131";
		gmtLabel.innerHTML = 'Неправильный ЧП';
		gmtLabel.style.color = "rgb(244, 49, 49)";
	}else{
		timeGMT.style.borderColor="transparent";
		gmtLabel.innerHTML = 'OK';
		gmtLabel.style.color="green";
		flag++;
	}

	if(flag > 11){
		if(!btnDisabled.classList.contains('btn-success')){
			btnDisabled.classList.add('btn-success');
			btnDisabled.classList.remove('disabled');
		}
	}else{
			btnDisabled.classList.add('disabled');
			btnDisabled.classList.remove('btn-success');
	}


}

function answer2(){

	setTimeout(answerDelay2, 1000);
	
}

function answerDelay2(){
	var shDegree = document.getElementById("shirota_degree");
	var shMinute = document.getElementById("shirota_minute");
	var shSeconds = document.getElementById("shirota_seconds");
	var shDir = document.getElementById("shirota_dir");

	var dolDegree = document.getElementById("dolgota_degree");
	var dolMinute = document.getElementById("dolgota_minute");
	var dolSeconds = document.getElementById("dolgota_seconds");
	var dolDir = document.getElementById("dolgota_dir");

	var vpp = document.getElementById("vpp");
	var iso = document.getElementById("iso");
	var icao = document.getElementById("icao");
	var timeGMT = document.getElementById("timeGMT");

	shDegree.value = 33;
	shMinute.value = 56;
	shSeconds.value = 33;
	shDir.value = 'n';

	dolDegree.value = 118;
	dolMinute.value = 24;
	dolSeconds.value = 25;
	dolDir.value = 'w';

	vpp.value = 38;
	iso.value = 'us';
	icao.value = 'klax';
	timeGMT.value = '-8.0';

	var btnDisabled = document.querySelector('#next-level');

	btnDisabled.classList.add('btn-success');
	btnDisabled.classList.remove('disabled');

	var shLabel = document.querySelector('.accent-sh');
	var dolLabel = document.querySelector('.accent-dol');
	var vppLabel = document.querySelector('.accent-vpp');
	var isoLabel = document.querySelector('.accent-iso');
	var icaoLabel = document.querySelector('.accent-icao');
	var gmtLabel = document.querySelector('.accent-gmt');


	shDegree.style.borderColor="transparent";
	shMinute.style.borderColor="transparent";
	shSeconds.style.borderColor="transparent";
	shDir.style.borderColor="transparent";
	shLabel.innerHTML = 'OK';
	shLabel.style.color="green";

	dolDegree.style.borderColor="transparent";
	dolMinute.style.borderColor="transparent";
	dolSeconds.style.borderColor="transparent";
	dolDir.style.borderColor="transparent";

	dolLabel.innerHTML = 'OK';
	dolLabel.style.color="green";

	vpp.style.borderColor="transparent";
	vppLabel.innerHTML = 'OK';
	vppLabel.style.color="green";

	iso.style.borderColor="transparent";
	isoLabel.innerHTML = 'OK';
	isoLabel.style.color="green";

	icao.style.borderColor="transparent";
	icaoLabel.innerHTML = 'OK';
	icaoLabel.style.color="green";

	timeGMT.style.borderColor="transparent";
	gmtLabel.innerHTML = 'OK';
	gmtLabel.style.color="green";
}

function level3()
{
	var airport1 = document.getElementById('airport1');
	var airport2 = document.getElementById('airport2');
	var airport3 = document.getElementById('airport3');

	var time1 = document.getElementById('time1');
	var time2 = document.getElementById('time2');
	var time3 = document.getElementById('time3');

	var wind1 = document.getElementById('wind1');
	var wind2 = document.getElementById('wind2');
	var wind3 = document.getElementById('wind3');

	var vision1 = document.getElementById('vision1');
	var vision2 = document.getElementById('vision2');
	var vision3 = document.getElementById('vision3');

	var firstLabel = document.querySelector('.accent-first');
	var secondLabel = document.querySelector('.accent-second');
	var thirdLabel = document.querySelector('.accent-third');

	var btnDisabled = document.querySelector('#next-level');

	var flag = 0;
	var flag1 = 0;
	var flag2 = 0;
	var flag3 = 0;

	if(airport1.value.toLowerCase() != 'lkpr'){
		airport1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не долетишь с такими данными!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		airport1.style.borderColor="transparent";
		flag1++;
	}
	if(time1.value.toLowerCase() != '270030z'){
		time1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не долетишь с такими данными!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		time1.style.borderColor="transparent";
		flag1++;
	}
	if(wind1.value.toLowerCase() != '24022kt'){
		wind1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не долетишь с такими данными!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		wind1.style.borderColor="transparent";
		flag1++;
	}
	if(vision1.value.toLowerCase() != '1200ne'){
		vision1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не долетишь с такими данными!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		vision1.style.borderColor="transparent";
		flag1++;
	}

	if(flag1 > 3){
		firstLabel.innerHTML = 'В добрый путь!';
		firstLabel.style.color="green";
		flag++;
	}

	if(airport2.value.toLowerCase() != 'uaaa'){
		airport2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не выпустят тебя с аэропорта!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		airport2.style.borderColor="transparent";
		flag2++;
	}
	if(time2.value.toLowerCase() != '221700z'){
		time2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не выпустят тебя с аэропорта!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		time2.style.borderColor="transparent";
		flag2++;
	}
	if(wind2.value.toLowerCase() != '16002mps'){
		wind2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не выпустят тебя с аэропорта!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		wind2.style.borderColor="transparent";
		flag2++;
	}
	if(vision2.value.toLowerCase() != '0500'){
		vision2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не выпустят тебя с аэропорта!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		vision2.style.borderColor="transparent";
		flag2++;
	}

	if(flag2 > 3){
		secondLabel.innerHTML = 'Полетелиииии!';
		secondLabel.style.color="green";
		flag++;
	}

	if(airport3.value.toLowerCase() != 'uuee'){
		airport3.style.border="3px solid #f43131";
		thirdLabel.innerHTML = 'Подумай еще!';
		thirdLabel.style.color = "rgb(244, 49, 49)";
	}else{
		airport3.style.borderColor="transparent";
		flag3++;
	}
	if(time3.value.toLowerCase() != '161500z'){
		time3.style.border="3px solid #f43131";
		thirdLabel.innerHTML = 'Подумай еще!';
		thirdLabel.style.color = "rgb(244, 49, 49)";
	}else{
		time3.style.borderColor="transparent";
		flag3++;
	}
	if(wind3.value.toLowerCase() != '07008kmh'){
		wind3.style.border="3px solid #f43131";
		thirdLabel.innerHTML = 'Подумай еще!';
		thirdLabel.style.color = "rgb(244, 49, 49)";
	}else{
		wind3.style.borderColor="transparent";
		flag3++;
	}
	if(vision3.value.toLowerCase() != '9999'){
		vision3.style.border="3px solid #f43131";
		thirdLabel.innerHTML = 'Подумай еще!';
		thirdLabel.style.color = "rgb(244, 49, 49)";
	}else{
		vision3.style.borderColor="transparent";
		flag3++;
	}

	if(flag3 > 3){
		thirdLabel.innerHTML = 'Москва встречай!';
		thirdLabel.style.color="green";
		flag++;
	}

	if(flag > 2){
		if(!btnDisabled.classList.contains('btn-success')){
			btnDisabled.classList.add('btn-success');
			btnDisabled.classList.remove('disabled');
		}
	}else{
			btnDisabled.classList.add('disabled');
			btnDisabled.classList.remove('btn-success');
	}
}

function answer3(){

	setTimeout(answerDelay3, 1000);
	
}

function answerDelay3(){
	var airport1 = document.getElementById('airport1');
	var airport2 = document.getElementById('airport2');
	var airport3 = document.getElementById('airport3');

	var time1 = document.getElementById('time1');
	var time2 = document.getElementById('time2');
	var time3 = document.getElementById('time3');

	var wind1 = document.getElementById('wind1');
	var wind2 = document.getElementById('wind2');
	var wind3 = document.getElementById('wind3');

	var vision1 = document.getElementById('vision1');
	var vision2 = document.getElementById('vision2');
	var vision3 = document.getElementById('vision3');

	airport1.value = 'lkpr';
	time1.value = '270030Z';
	wind1.value = '24022KT';
	vision1.value = '1200NE';
	
	airport2.value = 'uaaa';
	time2.value = '221700Z';
	wind2.value = '16002MPS';
	vision2.value = '0500';

	airport3.value = 'uuee';
	time3.value = '161500Z';
	wind3.value = '07008KMH';
	vision3.value = '9999';

	var firstLabel = document.querySelector('.accent-first');
	var secondLabel = document.querySelector('.accent-second');
	var thirdLabel = document.querySelector('.accent-third');

	airport1.style.borderColor="transparent";
	time1.style.borderColor="transparent";
	wind1.style.borderColor="transparent";
	vision1.style.borderColor="transparent";
	firstLabel.innerHTML = 'В добрый путь!';
	firstLabel.style.color="green";

	airport2.style.borderColor="transparent";
	time2.style.borderColor="transparent";
	wind2.style.borderColor="transparent";
	vision2.style.borderColor="transparent";
	secondLabel.innerHTML = 'Полетелиииии!';
	secondLabel.style.color="green";

	airport3.style.borderColor="transparent";
	time3.style.borderColor="transparent";
	wind3.style.borderColor="transparent";
	vision3.style.borderColor="transparent";
	thirdLabel.innerHTML = 'Москва встречай!';
	thirdLabel.style.color="green";


	var btnDisabled = document.querySelector('.disabled');

	btnDisabled.classList.add('btn-success');
	btnDisabled.classList.remove('disabled');
}

function level4()
{
	var temperature1 = document.getElementById('temperature1');
	var temperature2 = document.getElementById('temperature2');
	var temperature3 = document.getElementById('temperature3');

	var dot1 = document.getElementById('dot1');
	var dot2 = document.getElementById('dot2');
	var dot3 = document.getElementById('dot3');

	var weather1 = document.getElementById('weather1');
	var weather2 = document.getElementById('weather2');
	var weather3 = document.getElementById('weather3');

	var firstLabel = document.querySelector('.accent-first');
	var secondLabel = document.querySelector('.accent-second');
	var thirdLabel = document.querySelector('.accent-third');

	var btnDisabled = document.querySelector('#next-level');

	var flag = 0;
	var flag1 = 0;
	var flag2 = 0;
	var flag3 = 0;

	if(temperature1.value != 24){
		temperature1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не попал!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		temperature1.style.borderColor="transparent";
		flag1++;
	}

	if(dot1.value != 22){
		dot1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не попал!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		dot1.style.borderColor="transparent";
		flag1++;
	}

	if(weather1.value.toLowerCase() != '-shra'){
		weather1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не долетишь с такими данными!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		weather1.style.borderColor="transparent";
		flag1++;
	}

	if(flag1 > 2){
		firstLabel.innerHTML = 'В добрый путь!';
		firstLabel.style.color="green";
		flag++;
	}

	if(temperature2.value != '-10'){
		temperature2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		temperature2.style.borderColor="transparent";
		flag2++;
	}

	if(dot2.value != '-6'){
		dot2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		dot2.style.borderColor="transparent";
		flag2++;
	}

	if(weather2.value.toLowerCase() != 'bcgr'){
		weather2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Потеряешься по пути!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		weather2.style.borderColor="transparent";
		flag2++;
	}

	if(flag2 > 2){
		secondLabel.innerHTML = 'Удачи!';
		secondLabel.style.color="green";
		flag++;
	}

	if(temperature3.value != 30){
		temperature3.style.border="3px solid #f43131";
		thirdLabel.innerHTML = 'Мимо!';
		thirdLabel.style.color = "rgb(244, 49, 49)";
	}else{
		temperature3.style.borderColor="transparent";
		flag3++;
	}

	if(dot3.value != 29){
		dot3.style.border="3px solid #f43131";
		thirdLabel.innerHTML = 'Мимо!';
		thirdLabel.style.color = "rgb(244, 49, 49)";
	}else{
		dot3.style.borderColor="transparent";
		flag3++;
	}

	if(weather3.value.toLowerCase() != 'ss'){
		weather3.style.border="3px solid #f43131";
		thirdLabel.innerHTML = 'Не выпустили с аэропорта даже!';
		thirdLabel.style.color = "rgb(244, 49, 49)";
	}else{
		weather3.style.borderColor="transparent";
		flag3++;
	}

	if(flag3 > 2){
		thirdLabel.innerHTML = 'Взлетаем!';
		thirdLabel.style.color="green";
		flag++;
	}


	if(flag > 2){
		if(!btnDisabled.classList.contains('btn-success')){
			btnDisabled.classList.add('btn-success');
			btnDisabled.classList.remove('disabled');
		}
	}else{
			btnDisabled.classList.add('disabled');
			btnDisabled.classList.remove('btn-success');
	}
}

function answer4(){

	setTimeout(answerDelay4, 1000);
	
}

function answerDelay4(){
	var temperature1 = document.getElementById('temperature1');
	var temperature2 = document.getElementById('temperature2');
	var temperature3 = document.getElementById('temperature3');

	var dot1 = document.getElementById('dot1');
	var dot2 = document.getElementById('dot2');
	var dot3 = document.getElementById('dot3');

	var weather1 = document.getElementById('weather1');
	var weather2 = document.getElementById('weather2');
	var weather3 = document.getElementById('weather3');

	temperature1.value = 24;
	dot1.value = 22;
	weather1.value = '-shra';
	
	temperature2.value = '-10';
	dot2.value = '-6';
	weather2.value = 'bcgr';

	temperature3.value = 30;
	dot3.value = 29;
	weather3.value = 'ss';

	var firstLabel = document.querySelector('.accent-first');
	var secondLabel = document.querySelector('.accent-second');
	var thirdLabel = document.querySelector('.accent-third');

	temperature1.style.borderColor="transparent";
	dot1.style.borderColor="transparent";
	weather1.style.borderColor="transparent";
	firstLabel.innerHTML = 'В добрый путь!';
	firstLabel.style.color="green";

	temperature2.style.borderColor="transparent";
	dot2.style.borderColor="transparent";
	weather2.style.borderColor="transparent";
	secondLabel.innerHTML = 'Полетелиииии!';
	secondLabel.style.color="green";

	temperature3.style.borderColor="transparent";
	dot3.style.borderColor="transparent";
	weather3.style.borderColor="transparent";
	thirdLabel.innerHTML = 'Москва встречай!';
	thirdLabel.style.color="green";


	var btnDisabled = document.querySelector('.disabled');

	btnDisabled.classList.add('btn-success');
	btnDisabled.classList.remove('disabled');
}



function level5()
{
	var avb1 = document.getElementById('avb1');
	var avb2 = document.getElementById('avb2');

	var spare1 = document.getElementById('spare1');
	var spare2 = document.getElementById('spare2');

	var passager1 = document.getElementById('passager1');
	var passager2 = document.getElementById('passager2');

	var all1 = document.getElementById('all1');
	var all2 = document.getElementById('all2');

	var firstLabel = document.querySelector('.accent-first');
	var secondLabel = document.querySelector('.accent-second');

	var btnDisabled = document.querySelector('#next-level');

	var flag = 0;
	var flag1 = 0;
	var flag2 = 0;

	if(avb1.value < 3200 || avb1.value > 3400){
		avb1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не попал!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		avb1.style.borderColor="transparent";
		flag1++;
	}

	if(spare1.value < 1600 || spare1.value > 1750){
		spare1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не попал!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		spare1.style.borderColor="transparent";
		flag1++;
	}

	if(passager1.value < 3700 || passager1.value > 3850){
		passager1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не долетишь с такими данными!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		passager1.style.borderColor="transparent";
		flag1++;
	}

	if(all1.value < 11000 || all1.value < 12000){
		all1.style.border="3px solid #f43131";
		firstLabel.innerHTML = 'Не долетишь с такими данными!';
		firstLabel.style.color = "rgb(244, 49, 49)";
	}else{
		all1.style.borderColor="transparent";
		flag1++;
	}

	if(flag1 > 3){
		firstLabel.innerHTML = 'В добрый путь!';
		firstLabel.style.color="green";
		flag++;
	}

	if(avb2.value < 3600 || avb2.value > 3700){
		avb2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не попал!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		avb2.style.borderColor="transparent";
		flag2++;
	}

	if(spare2.value < 900 || spare2.value > 1000){
		spare2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не попал!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		spare2.style.borderColor="transparent";
		flag2++;
	}

	if(passager2.value < 2600 || passager2.value > 2700){
		passager2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не долетишь с такими данными!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		passager2.style.borderColor="transparent";
		flag2++;
	}

	if(all2.value < 7500 || all2.value > 8000){
		all2.style.border="3px solid #f43131";
		secondLabel.innerHTML = 'Не долетишь с такими данными!';
		secondLabel.style.color = "rgb(244, 49, 49)";
	}else{
		all2.style.borderColor="transparent";
		flag2++;
	}

	if(flag2 > 3){
		secondLabel.innerHTML = 'В добрый путь!';
		secondLabel.style.color="green";
		flag++;
	}


	if(flag > 1){
		if(!btnDisabled.classList.contains('btn-success')){
			btnDisabled.classList.add('btn-success');
			btnDisabled.classList.remove('disabled');
		}
	}else{
			btnDisabled.classList.add('disabled');
			btnDisabled.classList.remove('btn-success');
	}
}


function answer5(){
	setTimeout(answerDelay5, 1000);
}

function answerDelay5(){
	var avb1 = document.getElementById('avb1');
	var avb2 = document.getElementById('avb2');

	var spare1 = document.getElementById('spare1');
	var spare2 = document.getElementById('spare2');

	var passager1 = document.getElementById('passager1');
	var passager2 = document.getElementById('passager2');

	var all1 = document.getElementById('all1');
	var all2 = document.getElementById('all2');

	var flag = 0;
	var flag1 = 0;
	var flag2 = 0;

	avb1.value = 3300;
	spare1.value = 1650;
	passager1.value = 3796;
	all1.value = 11436;
	
	avb2.value = 3666;
	spare2.value = 916;
	passager2.value = 2621;
	all2.value = 7563;

	var firstLabel = document.querySelector('.accent-first');
	var secondLabel = document.querySelector('.accent-second');

	avb1.style.borderColor="transparent";
	spare1.style.borderColor="transparent";
	passager1.style.borderColor="transparent";
	all1.style.borderColor="transparent";
	firstLabel.innerHTML = 'В добрый путь!';
	firstLabel.style.color="green";

	avb2.style.borderColor="transparent";
	spare2.style.borderColor="transparent";
	passager2.style.borderColor="transparent";
	all2.style.borderColor="transparent";
	secondLabel.innerHTML = 'Полетелиииии!';
	secondLabel.style.color="green";

	var btnDisabled = document.querySelector('.disabled');

	btnDisabled.classList.add('btn-success');
	btnDisabled.classList.remove('disabled');
}