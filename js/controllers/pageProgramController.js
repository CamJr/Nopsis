function pageProgramController($routeParams, $location) {

  this.$location = $location;
  this.$routeParams = $routeParams;

  console.log(this.$location.path());
  console.log(this.$routeParams);
  console.log(this.$routeParams.id);

  this.index = this.$routeParams.id - 1;
  console.log(this.index);

    this.program = [{
      id: 1,
      img: "../../assets/img/nopsisNetwork/nopsisNetwork.jpg",
      title: "Nopsis Network",
      tag: "Web",
      imgBio: "Nopsis Network est une société de production OpenSource, Nous produisons tout type de contenue (Code, photographie, livres, vidéo...)",

      img1: "../../assets/img/nopsisNetwork/code.jpg",
      img2: "../../assets/img/nopsisNetwork/pen.jpg",
      img3: "../../assets/img/nopsisNetwork/book.jpg",
      img4: "../../assets/img/nopsisNetwork/camera.jpg",
      img5: "../../assets/img/nopsisNetwork/microphone.jpg",
    }, {
      id: 2,
      img: "../../assets/img/vlog.jpg",
      title: "CamJr Vlog",
      tag: "Vidéo",
      href: "https://www.youtube.com/channel/UCHEvYXLMVdUWmEM_4hrGm4A/featured",
      imgBio: "CamJr filmes ses journées en vidéo et vous les partages, retrouver dès à présent ses vidéo en intégralité sur YOUTUBE !   I require little markup to use effectively.",

      img1: "http://img.youtube.com/vi/Kkg28ru1_DY/maxresdefault.jpg",
      img2: "http://img.youtube.com/vi/6hulS-uyf_E/maxresdefault.jpg",
      img3: "http://img.youtube.com/vi/IqGpTisnj94/maxresdefault.jpg",
      img4: "http://img.youtube.com/vi/TvRu5c84CLg/maxresdefault.jpg",
      img5: "http://img.youtube.com/vi/fZ0TG8HvKWc/maxresdefault.jpg",
    }, {
      id: 3,
      img: "../../assets/img/camjrBlog.jpg",
      title: "CamJr Blog",
      tag: "Blog",
      imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",

      img1: "https://camjrweb.files.wordpress.com/2017/07/img_2611.jpg",
      img2: "https://camjrweb.files.wordpress.com/2017/07/couv1.jpg",
      img3: "https://camjrweb.files.wordpress.com/2017/05/vlog1.jpg",
      img4: "https://camjrweb.files.wordpress.com/2016/07/vlog-miniature.jpg",
      img5: "https://camjrweb.files.wordpress.com/2016/07/maxresdefault1.jpg",
    }, {
      id: 4,
      img: "../../assets/img/agriRescue.jpg",
      title: "Agri-Rescue",
      tag: "Web",
      imgBio: "Située au coeur de la Beauce, Agri-Rescue est une jeune entreprise qui souhaite répondre aux problématiques liées à l'agriculture et à l'environnement.",

      img1: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/19477617_305747406502447_7834893363959129319_o.jpg?oh=86f782c01c05e5dff1ca35b5cb6203d5&oe=59EC3FD3",
      img2: "../../assets/img/agriRescue.jpg",
      img3: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-0/s480x480/19511065_233384043836464_5045509530478755888_n.jpg?oh=353402817584a3922eefae3434c69b54&oe=59F66C11",
      img4: "https://pbs.twimg.com/media/DDQrOx_WsAEqazg.jpg",
      img5: "../../assets/img/cdp.jpg",
    }, {
      id: 5,
      img: "../../assets/img/nopsisNews.jpg",
      title: "Nopsis News",
      tag: "Blog",
      imgBio: "Nopsis News est un magazine de pop culture",

      img1: "https://nopsisblog.files.wordpress.com/2017/07/hq720.jpg?w=1462",
      img2: "https://nopsisblog.files.wordpress.com/2017/07/hollywood-bg.jpg?quality=80&strip=info&w=800",
      img3: "https://nopsisblog.files.wordpress.com/2017/05/super-mario-run-jeu-mobile.jpg?quality=80&strip=info&w=800",
      img4: "https://nopsisblog.files.wordpress.com/2017/04/fast-and-furious-8-poster-imax-700x367-1489076062.jpg?quality=80&strip=info&w=800",
      img5: "https://nopsisblog.files.wordpress.com/2017/04/motorsport-manager.jpg?quality=80&strip=info&w=800",
    }, {
      id: 6,
      img: "../../assets/img/nopsisWrestling.jpg",
      title: "Nopsis Wrestling",
      tag: "Blog",
      imgBio: "Nopsis Wrestling est un journal de culture sur le catch indépendant. Retrouvez les résumer et résultat de vos match préférer ! ",

      img1: "",
      img2: "",
      img3: "https://nopsiswrestling.files.wordpress.com/2017/07/g1climax.jpg?w=1462",
      img4: "https://nopsiswrestling.files.wordpress.com/2017/07/pwgbola.jpg?quality=80&strip=info&w=800",
      img5: "https://nopsiswrestling.files.wordpress.com/2017/07/roh-wrestling-episode-304_id2kqkr_480x480.jpg?quality=80&strip=info&w=800",
    }, {
      id: 7,
      img: "../../assets/img/cdp.jpg",
      title: "Meetup au Champs du Possible",
      tag: "Meetup",
      imgBio: "Retrouvez tout les mois, un Meetup au Champs du possible sur la technologies, l'agriculture, l'ergonomie...",

      imgContributor: "../../assets/img/camilleAntoine.jpg",
      nameContributor: "CamJr",

      img1: "../../assets/img/meetup/afterwork.jpg",
      img2: "../../assets/img/meetup/afterwork1.jpg",
      img3: "../../assets/img/meetup/afterwork2.jpg",
      img4: "../../assets/img/meetup/afterwork3.jpg",
      img5: "../../assets/img/meetup/afterwork4.jpg",
    }, {
      id: 8,
      img: "../../assets/img/repereage.jpg",
      title: "REPERE-AGE",
      tag: "Album Photo",
      imgBio: "Une Ville située en Eure-Et-Loir où j'ai passé mon enfance. C'est ici que commence mon aventure... Chaque ville a son identité qui lui est propre, voici celle de Châteaudun.",


      img1: "https://farm8.staticflickr.com/7408/27591026995_e6b6db390f_h.jpg",
      img2: "https://farm8.staticflickr.com/7769/27517963591_1008520f5b_h.jpg",
      img3: "https://farm8.staticflickr.com/7364/26980784404_9abf54453e_h.jpg",
      img4: "https://farm8.staticflickr.com/7312/27556781336_c6a9fc94a6_h.jpg",
      img5: "https://farm8.staticflickr.com/7504/27557419256_f695b08853_h.jpg",
    }, {
      id: 9,
      img: "../../assets/img/camJrInstaStories.jpg",
      title: "CAMJr instagram Stories",
      tag: "Vlog",
      imgBio: "Retrouvez tous les deux jours, les vidéos enregistrées depuis le smartphone de CamJr.",

      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    }, {
      id: 10,
      img: "../../assets/img/skarld.jpg",
      title: "Skarld Moto Stories [BIENTOT]",
      tag: "Vidéo",
      imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",

      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    }, {
      id: 11,
      img: "../../assets/img/agriVideo.jpg",
      title: "AgriVideo",
      tag: "Web",
      imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.   I require little markup to use effectively.",

      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    }, {
      id: 12,
      img: "../../assets/img/travis.jpg",
      title: "Travis",
      tag: "Web",
      imgBio: "Mélange entre Travail, trajet et Services, Travis est l'une plateforme numérique communautaire proposant des offres d’emploi combinées à des services de proximité ",

      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    }, {
      id: 13,
      img: "../../assets/img/camjr.jpg",
      title: "CAMJr Portfolio",
      tag: "Web",
      imgBio: "Site Web Portfolio pour CamJr",

      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    }];

  this.pageProgram = this.program[this.index];
  console.log(this.pageProgram);



  $(document).ready(function() {
    $('.slider').slider();
    $('.carousel').carousel({
      dist: 0,
      shift: 0,
      padding: 20,
      indicators: true,
    });

  });

}
