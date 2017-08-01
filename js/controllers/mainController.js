      function mainController($routeParams, $location) {

        this.$location = $location;
        this.$routeParams = $routeParams;

        this.query = $routeParams.query;
        this.newSearch = (query) => {
          if (query != '') {
            $location.path("/program/" + query);
          }
        };

        this.newSearch = (query) => {
          if (query != '') {
            $location.path("/program/" + query);
          }
        };

this.youtube = [{
  textColor : "red-text",
  icon : "youtube-play",
  title : " YOUTUBE",
  img1 : "../../assets/img/nopsisNetwork.jpg",
  img1Text: "Nopsis Network",
  img1Href: "",
  img1Bio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",

  img2 : "../../assets/img/nopsisNews.jpg",
  img2Text: "Nopsis News",
  img2Href: "",
  img2Bio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",


  img3 : "../../assets/img/nopsisWrestling.jpg",
  img3Text: "Nopsis Wrestling",
  img3Href: "",
  img3Bio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",


  img4 : "../../assets/img/vlog.jpg",
  img4Text: "CamJr Blog",
  img4Href: "",
  img4Bio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",


  img5 : "../../assets/img/cdp.jpg",
  img5Text: "CDP",
  img5Href: "",
  img5Bio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",

},{
  textColor : "blue-text",
  icon : "code",
  title : "WEB",
  img1 : "../../assets/img/nopsisNetwork.jpg",
  img1Text: "Nopsis",
  img2 : "../../assets/img/camjr.jpg",
  img2Text: "Camjr",
  img3 : "../../assets/img/cdp.jpg",
  img3Text: "CDP",
  img4 : "../../assets/img/agriRescue.jpg",
  img4Text: "Agri-Rescue",
  img5 : "../../assets/img/cdp.jpg",
  img5Text: "CDP",
},{
  textColor : "grey-text",
  icon : "book",
  title : " MAGASINES & LIVRES",
  img1 : "../../assets/img/camjrBlog.jpg",
  img1Text: "CamJr BLOG",
  img2 : "../../assets/img/nopsisNews.jpg",
  img2Text: "Nopsis News",
  img3 : "../../assets/img/nopsisWrestling.jpg",
  img3Text: "Nopsis Wrestling",
  img4 : "../../assets/img/repereage.jpg",
  img4Text: "REPERE-AGE",
  img5 : "../../assets/img/cdp.jpg",
  img5Text: "CAMJR BLOG",
// },{
//   textColor : "blue-text",
//   icon : "vimeo",
//   title : "VIMEO",
//   img1 : "../../assets/img/nopsis.jpg",
//   img1Text: "Nopsis",
//   img2 : "../../assets/img/camjr.jpg",
//   img2Text: "Camjr",
//   img3 : "../../assets/img/cdp.jpg",
//   img3Text: "CDP",
//   img4 : "../../assets/img/nopsis.jpg",
//   img4Text: "Nopsis",
//   img5 : "../../assets/img/cdp.jpg",
//   img5Text: "CDP",
// },{
//   textColor : "orange-text",
//   icon : "soundcloud",
//   img1 : "../../assets/img/nopsis.jpg",
//   img1Text: "Nopsis",
//   img2 : "../../assets/img/camjr.jpg",
//   img2Text: "Camjr",
//   img3 : "../../assets/img/cdp.jpg",
//   img3Text: "CDP",
//   img4 : "../../assets/img/nopsis.jpg",
//   img4Text: "Nopsis",
//   img5 : "../../assets/img/cdp.jpg",
//   img5Text: "CDP",
}];


this.team = [{
  link: 'https://fr.linkedin.com/in/camfontaine',
  photo: 'camilleAntoine',
  title: "Camille Antoine 'CamJr'",
  job: "test"
},{
link: 'https://fr.linkedin.com/in/camfontaine',
photo: 'camilleAntoine',
title: "test",
job: "test"
},{
link: 'https://fr.linkedin.com/in/camfontaine',
photo: 'camilleAntoine',
title: "test",
job: "test"
}];



  this.icon = [{
    logo : "pencil",
    text : "écriture"
  },{
    logo : "book",
    text : "Publication"
  },{
    logo : "paint-brush",
    text : "Graphisme"
  },{
    logo : "camera-retro",
    text : "Photographie"
  },{
    logo : "code",
    text : "Code"
  },{
    logo : "mobile",
    text : "Application"
  },{
    logo : "video-camera",
    text : "Clip Vidéo"
  },{
    logo : "film",
    text : "Montage"
  },{
    logo : "microphone",
    text : "Radio"
  },{
    logo : "music",
    text : "Musique"
  },{
    logo : "commenting-o",
    text : "Vidéo FAQ"
  },{
    logo : "meetup",
    text : "Afterork"
  }];

    this.image = [{
    title: 'camjr',
    link: 'https://camjr.github.io/',
    img: '../assets/img/camjr.jpg',
  }, {
    title: 'Nopsis',
    link: 'https://nopsisblog.wordpress.com/',
    img: '../assets/img/nopsis.jpg',
  }, {
    title: 'Nopsis Wrestling',
    link: 'https://nopsisblog.wordpress.com/',
    img: '../assets/img/nopsis.jpg',
  }, {
    title: 'Afterwork',
    link: 'https://www.facebook.com/events/1905798189700043',
    img: '../assets/img/cdp.jpg',
  }, {
    title: 'Repère-âge',
    link: 'https://flic.kr/s/aHskBXxZtA',
    img: '../assets/img/repereage.jpg',
  }, {
    title: 'CamJr Blog',
    link: 'https://camjrweb.wordpress.com',
    img: '../assets/img/camjrBlog.jpg',
  }, {
    title: 'CamJr Vlog',
    link: 'https://flic.kr/s/aHskBXxZtA',
    img: '../assets/img/vlog.jpg',
  }, {
    title: 'Slack',
    link: 'https://champsdupossible.slack.com/messages',
    img: '../assets/img/afterwork.jpg',
  }, {
    title: 'Slack',
    link: 'https://champsdupossible.slack.com/messages',
    img: '../assets/img/slack.jpg',
  }];


  this.banner = [{
    img: '../assets/img/banner1.jpg',
    link: 'https://www.facebook.com/events/1905798189700043',
    desc: 'Afterwork',
  },{
    img: '../assets/img/banner1.jpg',
    link: 'https://camjrweb.wordpress.com',
    desc: 'Blog lifestyle',
  },{
    img: '../assets/img/banner1.jpg',
    link: 'https://camjrweb.wordpress.com',
    desc: 'Vlog lifestyle',
  }];

  this.info = [{
    link: 'https://fr.linkedin.com/in/camfontaine',
    logo: 'linkedin',
  }, {
    link: 'https://fr.linkedin.com/in/camfontaine',
    logo: 'github',
  }, {
    link: 'https://fr.linkedin.com/in/camfontaine',
    logo: 'instagram',
  }, {
    link: 'https://fr.linkedin.com/in/camfontaine',
    logo: 'facebook',
  }];


}
