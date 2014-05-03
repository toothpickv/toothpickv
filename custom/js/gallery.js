( function( $ ) {
	$.fn.setGallery = function(items) {
		// [
		//   {
		//     "type": "video/mp4",
		//     "title": "《易经的智慧》69 无心之感 （曾仕强）",
		//     "href": "http://v.youku.com/player/getRealM3U8/vid/XNDQ4NDA5MDA4/type/mp4/v.m3u8",
		//     "poster": "http://g1.ykimg.com/1100641F46504C2468AECB04B3E3262A5C39B4-E6AA-1FFE-E74F-C8A17AF691AB"
		//   },
		//   {
		//     "type": "video/mp4",
		//     "title": "《易经的智慧》70 心心相印 （曾仕强）",
		//     "href": "http://v.youku.com/player/getRealM3U8/vid/XNDQ5MjIyMDAw/type/mp4/v.m3u8",
		//     "poster": "http://g3.ykimg.com/1100641F46504EFD8E85BB04B3E326EA22A4DE-36E0-CA95-A203-75B959390F1E"
		//   }
		// ]
		var self = this;
		self.html("加载中...");
		seajs.use(['/custom/Gallery/css/blueimp-gallery.min.css',
		'/custom/Gallery/css/blueimp-gallery-indicator.css',
		'/custom/Gallery/css/blueimp-gallery-video.css',
		'/custom/Gallery/js/blueimp-helper.js','/custom/Gallery/js/blueimp-gallery.min.js',
		'/custom/Gallery/js/blueimp-gallery.min.js',
		'/custom/Gallery/js/blueimp-gallery-fullscreen.js',
		'/custom/Gallery/js/blueimp-gallery-indicator.js',
		'/custom/Gallery/js/blueimp-gallery-video.js',
		'/custom/Gallery/js/jquery.blueimp-gallery.min.js'], function() {
			var galleryHtml = '<div id="blueimp-video-carousel" class="blueimp-gallery blueimp-gallery-controls blueimp-gallery-carousel">'+
   '<div class="slides"></div>'+
   '<h3 class="title"></h3>'+
   '<a class="prev">‹</a>'+
   '<a class="next">›</a>'+
   '<a class="play-pause"></a>'
+'</div>';
			self.html(galleryHtml);
			blueimp.Gallery(items, {
			    container: '#blueimp-video-carousel',
			    carousel: true
			});
		});
	}
}( jQuery ) );
