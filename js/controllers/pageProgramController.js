function pageProgramController($routeParams, $location) {

  this.$location = $location;
  this.$routeParams = $routeParams;

  console.log(this.$location.path());
  console.log(this.$routeParams);
  console.log(this.$routeParams.id);

  this.index = this.$routeParams.id-1;
  console.log(this.index);

  this.program = [{
    id: 1,
    img: "../../assets/img/nopsisNetwork.jpg",
    imgText: "Nopsis Network",
    imgHref: "pageProgram:id",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
  }, {
    id: 2,
    img: "../../assets/img/nopsisNews.jpg",
    imgText: "Nopsis News",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
  }, {
    id: 3,
    img: "../../assets/img/nopsisWrestling.jpg",
    imgText: "Nopsis Wrestling",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
  }, {
    id: 4,
    img: "../../assets/img/vlog.jpg",
    imgText: "CamJr Blog",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
  }, {
    id: 5,
    img: "../../assets/img/cdp.jpg",
    imgText: "CDP",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",

  }, {
    id: 6,
    img: "../../assets/img/agriRescue.jpg",
    imgText: "Agri-Rescue",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",

  }, {
    id: 7,
    img: "../../assets/img/camjrBlog.jpg",
    imgText: "CamJr Blog",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
  }, {
    id: 8,
    img: "../../assets/img/repereage.jpg",
    imgText: "REPERE-AGE",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
  }, {
    id: 9,
    img: "../../assets/img/camjr.jpg",
    imgText: "CAMJR BLOG",
    imgHref: "",
    imgBio: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
  }];

  this.pageProgram = this.program[this.index];
  console.log(this.pageProgram);

}
