function loadAjax(){
	$.ajax({
		url: 'json/horses.json',
		dataType: 'json',
		type : 'GET',
		success: function(data){
				var html = '';
				var j = 1;
				for(var i = 0; i < data.responseData.elements.length; i++){
					if(data.responseData.elements[i].avatar == null || data.responseData.elements[i].avatar == 'https://prism.horse/api/public/image/56423b7e4be340aea9d84a101d31e5cc.jpg'){
						data.responseData.elements[i].avatar = 'https://prismhorse.s3.amazonaws.com/media/a6781a21dd374dc08de34b641e7cc7cd.png';
					}
		  		html += '<div class="horse-image" data-toggle="modal" data-target="#myModal'+i+'"><a href="#myModal'+i+'"><img src="'+data.responseData.elements[i].avatar+'"/></a><h3>'+data.responseData.elements[i].name+'</h3><p>'+data.responseData.elements[i].id+'</p></div>';
					if ((i+1)%4 == 0){
						$('#horse-inner').append('<div class="carousel-item' + (j==1 ? ' active' : '') + '" id="horse-item'+j+'"></div>');
						$('#horse-item'+j).html(html);
						html = '';
						j++;
					}
				}
			}
	});
}

function loadNews(){
	$.ajax({
		url: 'json/news.json',
		dataType: 'json',
		type : 'GET',
		success: function(datanews){
			var html = '';
			var j = 1;
			for(var i = 0; i < datanews.responseData.stableNews.length; i++){
				if (datanews.responseData.stableNews[i].media.images[0].cdnSmall == null) {
					datanews.responseData.stableNews[i].media.images[0].cdnSmall = 'https://prismhorse.s3.amazonaws.com/media/538c4868b4b34ad0943c399e837391b6_s.jpg';
				}
	  		html += '<div class="race"><a href="#"><img src="'+datanews.responseData.stableNews[i].media.images[0].cdnSmall+'"></a><div class="right-newletter"><a href="#"><h3>'+datanews.responseData.stableNews[i].title+'</h3></a><p>'+datanews.responseData.stableNews[i].publishedDate+'</p></div></div>';
				if ((i+1)%10 == 0){
						jQuery('#race-inner').append('<div class="carousel-item' + (j==1 ? ' active' : '') + '" id="race-new'+j+'">');
						jQuery('#race-new'+j).html(html);
						html = '';
						j++;
				}
			}
		}
	});
}

function loadPopup(){
	$.ajax({
		url: 'json/horses.json',
		dataType: 'json',
		type: 'GET',
		success: function(datapopup){
			var html = '';
			var j = 1;
			for (var i = 0; i < datapopup.responseData.elements.length; i++) {
				if(datapopup.responseData.elements[i].avatar == null || datapopup.responseData.elements[i].avatar == 'https://prism.horse/api/public/image/56423b7e4be340aea9d84a101d31e5cc.jpg'){
						datapopup.responseData.elements[i].avatar = 'https://prismhorse.s3.amazonaws.com/media/a6781a21dd374dc08de34b641e7cc7cd.png';
					}
				html += '<div class="modal fade" id="myModal'+i+'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">'+datapopup.responseData.elements[i].name+'</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body" style="width: 100%;"><img src="'+datapopup.responseData.elements[i].avatar+'" style="object-fit: cover; width: 100%;" ><p>'+datapopup.responseData.elements[i].id+'</p><p>Some text in the modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
				jQuery('#modal-inner').html(html);
			}
		}
	});
}



function checkForm(){
	var validate = 0;
	var text;
	var txtarea = document.formcontact.message.value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	if(name <= 0){
		text = "Chua nhap ten";
		validate++;
	}
	else{
		text = "";
	}
	document.getElementById("error_name").innerHTML = text;

	if(email <=0){
		text = "Chua nhap email";
		validate++;
	}
	else{
		text = "";
	}
	document.getElementById("error_email").innerHTML = text;

	if(txtarea <= 0){
		text = "Chua nhap message";
		validate++;
	}
	else{
		text = "";
	}
	document.getElementById("message_email").innerHTML = text;

	if (validate > 0 ) {
		return false;
	}
	return true;

}


function token(result){

	var body = {
	   deviceToken : result,
	   platformType : 3,
	   platformVersion : "1.0",
	};
	$.ajax({
		url: 'https://test.prism.horse/api/login',
		contentType: 'application/j-son; charset=UTF-8',
		type: 'POST',
		headers: {
			'CLIENT_ID': '6oj6rASYKQ2YlaxXLPAvErfiqzntRVao'
		},
		data: JSON.stringify(body),
		success: function(data){
			$(".giphy").hide();
			$(".body-content").fadeIn(2000);
		}
	});
}
		
$(document).ready(function(){
	$(".body-content").hide();
	$(".giphy").show();
	loadAjax();
	loadNews();
	loadPopup();
	new Fingerprint2().get(function(result, components) {
		token(result);
	});
});
