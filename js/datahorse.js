
		// $(document).ready(function(){
		//     // $("button").click(function(){
		// 				$.getJSON("json/horses.json", function(data){
		// 					var html = '';
		// 					var j = 1;
		// 					for(var i = 0; i < data.responseData.elements.length; i++){
		// 			  		html += '<div class="horse-image"><a href="#"><img src="'+data.responseData.elements[i].avatar+'"/></a><h3>'+data.responseData.elements[i].name+'</h2><p>'+data.responseData.elements[i].id+'</p></div>';
		// 						if ((i+1)%4 == 0){
		// 							jQuery('#carousel-item'+j).html(html);
		// 							html = '';
		// 							j++;
		// 						}
		// 					}
		// 					// jQuery('#carousel-item'+j).html(html);
		// 					// jQuery('#carousel-item').html(html);
		// 					// console.log(data);
		// 					// $('#carousel-item').append('<p>name : ' + data.responseData.elements[0].name+ '</p>');
		// 					// $('#carousel-item').append('<p>id : ' + data.responseData.elements[0].id+ '</p>');
		// 					// $('#carousel-item').append('<p>avarta : ' + data.responseData.elements[1].avatar+ '</p>');
		//             // $.each(result, function(data){
		//             //     $("#carousel-item").append(data.name + data.id + data.avarta);
		//             // });
		//         });
		//     // });
		// });
		// $el.addClass(className); --Add class moi
		// $el.removeClass(className); --Xoa class
		// $('#carousel-inner').append('<div class="carousel-item" id="carousel-item'+j+'"></div>'); ---add them the div co id #carousel-item[j]

		function loadAjax(){
			jQuery.ajax({
				url: 'json/horses.json',
				dataType: 'json',
				type : 'GET',
				success: function(data){
						var html = '';
						var j = 1;
							for(var i = 0; i < data.responseData.elements.length; i++){
					  		html += '<div class="horse-image"><a href="#"><img src="'+data.responseData.elements[i].avatar+'"/></a><h3>'+data.responseData.elements[i].name+'</h2><p>'+data.responseData.elements[i].id+'</p></div>';
								if ((i+1)%4 == 0){
									if ((i+1)/4 ==1){
										$('#horse-inner').append('<div class="carousel-item active" id="horse-item'+j+'"></div>');
										$('#horse-item'+j).html(html);
										html = '';
										j++;
									}
									else{
										$('#horse-inner').append('<div class="carousel-item" id="horse-item'+j+'"></div>');
										$('#horse-item'+j).html(html);
										html = '';
										j++;
									}
								}
							}
							// console.log(data);
					}
			});
			loadNews();
		}

		function loadNews(){
			jQuery.ajax({
				url: 'json/news.json',
				dataType: 'json',
				type : 'GET',
				success: function(datanews){
						var html = '';
						var j = 1;
							for(var i = 0; i < datanews.responseData.stableNews.length; i++){
								console.log(datanews.responseData.stableNews[i].media.images[6]);
						  		html += '<div class="race"><a href="#"><img src="'+datanews.responseData.stableNews[i].media.images[6]+'"></a><div class="right-newletter"><a href="#"><h3>'+datanews.responseData.stableNews[i].title+'</h3></a><p>'+datanews.responseData.stableNews[i].publishedDate+'</p></div></div>';
									if ((i+1)%10 == 0){
										if ((i+1)/10 == 1) {
											jQuery('#race-inner').append('<div class="carousel-item active" id="race-new'+j+'">');
											jQuery('#race-new'+j).html(html);
											html = '';
											j++;
										}else{
											jQuery('#race-inner').append('<div class="carousel-item" id="race-new'+j+'">');
											jQuery('#race-new'+j).html(html);
											html = '';
											j++;
										}
									}
							}
							// console.log(datanews);
					}
			});
		}
		