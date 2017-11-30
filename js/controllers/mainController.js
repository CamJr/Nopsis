      function mainController() {

        this.slider = [{
          img: "../../assets/img/beauval.jpg",
          title: "CamJr Blog - Zoo de Beauval.",
          text: "CamJr s'est baladé au zoo de Beauval muni de son appareil photo pour vous prendre quelques clichés",
          href: "https://camjrweb.wordpress.com/2017/07/11/zoo-de-beauval/",
          alt: "Toucan"
        }, {
          img: "../../assets/img/chateaudunNight.JPG",
          title: "CamJr Blog - Châteaudun by night",
          text: " CamJr est aller photographier Châteaudun de nuit..",
          href: "https://camjrweb.wordpress.com/2017/07/16/chateaudun-by-night/?frame-nonce=c44453bbb7",
          alt: "CamJr Blog"
        }, {
          img: "http://img.youtube.com/vi/Kkg28ru1_DY/maxresdefault.jpg",
          title: "Camjr WeklyVlog 6 ",
          text: " Nouveau Weekly Vlog de CamJr.",
          href: "https://www.youtube.com/watch?v=Kkg28ru1_DY",
          alt: "Camjr Vlog"
        // }, {
        //   img: "https://farm5.staticflickr.com/4263/34661178283_777a0d9782_k.jpg",
        //   title: "This is our big Tagline",
        //   text: " Here's our small slogan.",
        //   href: "https://farm5.staticflickr.com/4287/35340587631_e566c266b0_k.jpg",
        //   alt: "Fleur"
        }];


        this.carousel = [{
          textColor: "red-text",
          icon: "youtube-play",
          title: " YOUTUBE",

          img1: "../../assets/img/nopsisNetwork/nopsisNetwork.jpg",
          img1Text: "Nopsis Network",
          img1Href: "",

          img2: "../../assets/img/nopsisNews.jpg",
          img2Text: "Nopsis News",
          img2Href: "",


          img3: "../../assets/img/nopsisWrestling.jpg",
          img3Text: "Nopsis Wrestling",
          img3Href: "",


          img4: "../../assets/img/vlog.jpg",
          img4Text: "CamJr Blog",
          img4Href: "",


          img5: "../../assets/img/cdp.jpg",
          img5Text: "CDP",
          img5Href: "",

        }, {
          textColor: "blue-text",
          icon: "code",
          title: "WEB",

          img1: "../../assets/img/nopsisNetwork/nopsisNetwork.jpg",
          img1Text: "Nopsis",

          img2: "../../assets/img/camjr.jpg",
          img2Text: "Camjr",

          img3: "../../assets/img/cdp.jpg",
          img3Text: "CDP",

          img4: "../../assets/img/agriRescue.jpg",
          img4Text: "Agri-Rescue",

          img5: "../../assets/img/cdp.jpg",
          img5Text: "CDP",
        }, {


          textColor: "grey-text",
          icon: "book",
          title: " MAGASINES & LIVRES",

          img1: "../../assets/img/camjrBlog.jpg",
          img1Text: "CamJr BLOG",

          img2: "../../assets/img/nopsisNews.jpg",
          img2Text: "Nopsis News",

          img3: "../../assets/img/nopsisWrestling.jpg",
          img3Text: "Nopsis Wrestling",

          img4: "../../assets/img/repereage.jpg",
          img4Text: "REPERE-AGE",

          img5: "../../assets/img/cdp.jpg",
          img5Text: "CAMJR BLOG",
          // },{
          //
          //
          //   textColor : "blue-text",
          //   icon : "vimeo",
          //   title : "VIMEO",
          //
          //   img1 : "../../assets/img/nopsis.jpg",
          //   img1Text: "Nopsis",
          //
          //   img2 : "../../assets/img/camjr.jpg",
          //   img2Text: "Camjr",
          //
          //   img3 : "../../assets/img/cdp.jpg",
          //   img3Text: "CDP",
          //
          //   img4 : "../../assets/img/nopsis.jpg",
          //   img4Text: "Nopsis",
          //
          //   img5 : "../../assets/img/cdp.jpg",
          //   img5Text: "CDP",
          // },{
          //
          //   textColor : "orange-text",
          //   icon : "soundcloud",
          //   title : "SOUNDCLOUD",
          //
          //   img1 : "../../assets/img/nopsis.jpg",
          //   img1Text: "Nopsis",
          //
          //   img2 : "../../assets/img/camjr.jpg",
          //   img2Text: "Camjr",
          //
          //   img3 : "../../assets/img/cdp.jpg",
          //   img3Text: "CDP",
          //
          //   img4 : "../../assets/img/nopsis.jpg",
          //   img4Text: "Nopsis",
          //
          //   img5 : "../../assets/img/cdp.jpg",
          //   img5Text: "CDP",
        }];


        this.icon = [{
          logo: "pencil",
          text: "écriture"
        }, {
          logo: "book",
          text: "Publication"
        }, {
          logo: "paint-brush",
          text: "Graphisme"
        }, {
          logo: "camera-retro",
          text: "Photographie"
        }, {
          logo: "code",
          text: "Code"
        }, {
          logo: "mobile",
          text: "Application"
        }, {
          logo: "video-camera",
          text: "Clip Vidéo"
        }, {
          logo: "film",
          text: "Montage"
        }, {
          logo: "microphone",
          text: "Radio"
        }, {
          logo: "music",
          text: "Musique"
        }, {
          logo: "commenting-o",
          text: "Vidéo FAQ"
        }, {
          logo: "meetup",
          text: "Afterork"
        }];

        $(document).ready(function(){



          // BLOG
          $(function() {
            var $content = $('#jsonContent');
            var data = {
              rss_url: 'https://camjrweb.wordpress.com/category/photographie/feed/'
            };
            $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
              if (response.status == 'ok') {
                var output = '';
                $.each(response.items, function(k, item) {
                  var visibleSm;
                  if (k < 2) {
                    visibleSm = '';
                  } else {
                    visibleSm = ' visible-sm';
                  }
                  output += '<div class="col s12 col m12 col l4' + visibleSm + '">';
                  output += '<div class="blog-post center"><header>';
                  var tagIndex = item.content.indexOf('<img'); // Find where the img tag starts
                  var srcIndex = item.content.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
                  var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
                  var srcEnd = item.content.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
                  var src = item.content.substring(srcStart, srcEnd); // Extract just the URL
                  output += '<a href="' + item.link + '"  class="blog-element"><img class="responsive-img zoom" src="' + src + '" width="600" height="200"></a></header>';
                  output += '<div class="blog-content center"><h4><a href="' + item.link + '">' + item.title + '</a></h4>';
                  var yourString = item.content.replace(/<img[^>]*>/g, ""); //replace with your string.
                  var maxLength = 120 // maximum number of characters to extract
                  //trim the string to the maximum length
                  var trimmedString = yourString.substr(0, maxLength);
                  //re-trim if we are in the middle of a word
                  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                  // output += '<p>' + trimmedString + '</p>';
                  output += '</div></div></div>';
                  return k < 2;
                });
                $content.html(output);
              }
            });
          });




          // YOUTUBE

            $.ajax({
              url:'https://www.googleapis.com/youtube/v3/channels',
              type:'GET',
              dataType:'json',
              data: {
                'part':'contentDetails',
                'id': 'UC4xKeJLSjDLDAtW1dNfwwVw',
                'key': 'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0'
            },
              success: function(data){
                var uploads = data.items[0].contentDetails.relatedPlaylists.uploads;
                getVideos(uploads);
              }
            });

            function getVideos(uploads) {
            var limit = 3;
            $.ajax({
              url:'https://www.googleapis.com/youtube/v3/playlistItems',
              type:'GET',
              dataType:'json',
              data: {
                'part':'snippet',
                'playlistId': uploads,
                'chart': 'mostPopular',
                'maxResults': limit,
                'key': 'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0'
            },
              success: function(data){
                for(var i = 0; i<limit; i++){
                  var thumb = $("<img>").attr("src",data.items[i].snippet.thumbnails.medium.url);
                  var video_id = data.items[i].snippet.resourceId.videoId;
                  var video_embed = '<div><iframe width="600" height="300" src="//www.youtube.com/embed/' + video_id + '?html5=1" frameborder="0" allowfullscreen></iframe></div>';
                  var video_url = 'https://www.youtube.com/watch?v='+video_id;
                  var title = $("<a style='font-size: 2.28rem;' href="+ video_url +">").append(data.items[i].snippet.title);
                  var holder = $("<div class='col s12 col l4 '>").append(video_embed,title);
                  $("#youtube").append(holder);
                }
              }
          });
          }

        $('.slider').slider();
        $('.carousel').carousel({
             dist:0,
             shift:0,
             padding:30,
        });

        setInterval(function() {
          $('.carousel.youtube-play').carousel('next');
        }, 5700);

        setInterval(function() {
          $('.carousel.code').carousel('prev');
        }, 5500);

        setInterval(function() {
          $('.carousel.book').carousel('next');
        }, 5700);
         });


      }
