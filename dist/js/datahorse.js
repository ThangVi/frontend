function loadAjax(){$.ajax({url:"json/horses.json",dataType:"json",type:"GET",success:function(e){for(var a="",s=1,t=0;t<e.responseData.elements.length;t++)null!=e.responseData.elements[t].avatar&&"https://prism.horse/api/public/image/56423b7e4be340aea9d84a101d31e5cc.jpg"!=e.responseData.elements[t].avatar||(e.responseData.elements[t].avatar="https://prismhorse.s3.amazonaws.com/media/a6781a21dd374dc08de34b641e7cc7cd.png"),a+='<div class="horse-image" data-toggle="modal" data-target="#myModal'+t+'"><a href="#myModal'+t+'"><img src="'+e.responseData.elements[t].avatar+'"/></a><h3>'+e.responseData.elements[t].name+"</h3><p>"+e.responseData.elements[t].id+"</p></div>",(t+1)%4==0&&($("#horse-inner").append('<div class="carousel-item'+(1==s?" active":"")+'" id="horse-item'+s+'"></div>'),$("#horse-item"+s).html(a),a="",s++)}})}function loadNews(){$.ajax({url:"json/news.json",dataType:"json",type:"GET",success:function(e){for(var a="",s=1,t=0;t<e.responseData.stableNews.length;t++)null==e.responseData.stableNews[t].media.images[0].cdnSmall&&(e.responseData.stableNews[t].media.images[0].cdnSmall="https://prismhorse.s3.amazonaws.com/media/538c4868b4b34ad0943c399e837391b6_s.jpg"),a+='<div class="race"><a href="#"><img src="'+e.responseData.stableNews[t].media.images[0].cdnSmall+'"></a><div class="right-newletter"><a href="#"><h3>'+e.responseData.stableNews[t].title+"</h3></a><p>"+e.responseData.stableNews[t].publishedDate+"</p></div></div>",(t+1)%10==0&&(jQuery("#race-inner").append('<div class="carousel-item'+(1==s?" active":"")+'" id="race-new'+s+'">'),jQuery("#race-new"+s).html(a),a="",s++)}})}function loadPopup(){$.ajax({url:"json/horses.json",dataType:"json",type:"GET",success:function(e){for(var a="",s=0;s<e.responseData.elements.length;s++)null!=e.responseData.elements[s].avatar&&"https://prism.horse/api/public/image/56423b7e4be340aea9d84a101d31e5cc.jpg"!=e.responseData.elements[s].avatar||(e.responseData.elements[s].avatar="https://prismhorse.s3.amazonaws.com/media/a6781a21dd374dc08de34b641e7cc7cd.png"),a+='<div class="modal fade" id="myModal'+s+'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">'+e.responseData.elements[s].name+'</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body" style="width: 100%;"><img src="'+e.responseData.elements[s].avatar+'" style="object-fit: cover; width: 100%;" ><p>'+e.responseData.elements[s].id+'</p><p>Some text in the modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>',jQuery("#modal-inner").html(a)}})}function checkForm(){var e,a=0,s=document.formcontact.message.value,t=document.getElementById("name").value,n=document.getElementById("email").value;return t<=0?(e="Chua nhap ten",a++):e="",document.getElementById("error_name").innerHTML=e,n<=0?(e="Chua nhap email",a++):e="",document.getElementById("error_email").innerHTML=e,s<=0?(e="Chua nhap message",a++):e="",document.getElementById("message_email").innerHTML=e,!(0<a)}function token(e){var a={deviceToken:e,platformType:3,platformVersion:"1.0"};$.ajax({url:"https://test.prism.horse/api/login",contentType:"application/j-son; charset=UTF-8",type:"POST",headers:{CLIENT_ID:"6oj6rASYKQ2YlaxXLPAvErfiqzntRVao"},data:JSON.stringify(a),success:function(e){$(".giphy").hide(),$(".body-content").fadeIn(2e3)}})}$(document).ready(function(){$(".body-content").hide(),$(".giphy").show(),loadAjax(),loadNews(),loadPopup(),(new Fingerprint2).get(function(e,a){token(e)})});