<template>
    <div>
        <div class="nav-area fixed-top">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light  w-100">
                    <a class="navbar-brand" href="#">Divinector</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                        </span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div class="slider-area">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class="slider-text">
                            <h1>Welcome Divinector</h1>
                            <h2>Bootstrap 4 website</h2>
                            <p>
                                <a href="#contact">Contact Us</a>
                                <a href="#">More Info</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="about" class="about-area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 text-center">
                        <div class="section-header">
                            <h2>Who we area</h2>
                            <p>
                                Info acerca de la compañia Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cumque esse unde temporibus! Commodi modi tempora dicta numquam ab voluptatem, dignissimos officiis nulla, eum laboriosam, architecto inventore aperiam minima! Quidem!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-lg-6">
                        <div class="about-img">
                            <img src="~/assets/img/laptop.png" alt="Información">
                        </div>
                    </div>
                    <div class="col-xs-12 col-lg-6">
                        <div class="item-text">
                            <h4>Multinational Company</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum id amet facere saepe similique ratione voluptatum possimus! Neque veniam saepe deleniti, eaque voluptates iure ut blanditiis dolor esse, dignissimos fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui, iure reiciendis debitis dolore numquam cupiditate tenetur eos soluta facere minus voluptatum sunt excepturi at aut. Quam nam nesciunt eum?
                            Praesentium nobis id ullam ipsa qui veniam illo facilis obcaecati? In, aut. Eum, ullam, voluptatem eos dicta quis atque saepe temporibus reiciendis odit eligendi autem veritatis aliquid quaerat, perferendis consequuntur?
                            
                            Doloribus quo nostrum vitae sint rerum nihil perferendis consequuntur repudiandae! Adipisci deleniti ipsam consequatur, saepe odit, in neque omnis, fugiat sint modi tempore enim error facilis quibusdam nisi quam. Enim?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="stats-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="single-stats">
                            <fa-icon class="img-custom" :icon="['fas', 'users']" size="6x" :style="{ color: 'white' }"/>
                            <i class="fa fa-users"></i>
                            <h2>32</h2>
                            <p>Happy customers</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="single-stats">
                            <fa-icon class="img-custom" :icon="['fas', 'user-plus']" size="6x" :style="{ color: 'white' }"/>
                            <h2>85</h2>
                            <p>Customer Served</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="single-stats">
                            <fa-icon class="img-custom" :icon="['fas', 'mug-hot']" size="6x" :style="{ color: '#5597BE' }"/>
                            <h2>168</h2>
                            <p>Cups of coffee</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="single-stats">
                            <fa-icon class="img-custom" :icon="['fas', 'medal']" size="6x" :style="{ color: '#5597BE' }"/>
                            <h2>65</h2>
                            <p>Awards won</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="services" class="services-area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-12 text-center">
                        <div class="section-header">
                            <h2>What we Do</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore, enim repellendus blanditiis dolor laborum officiis debitis officia quidem eligendi. Saepe amet exercitationem facere doloremque! Exercitationem beatae voluptates molestias <laborum class="lorem"></laborum></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        head() {
            return {
            script: [
                // { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'},
                { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'},
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'},
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'}
            ],
            // ,
            link: [

                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' },
                // { rel: 'stylesheet', href: '/Landing_Page/css/bootstrap.min.css' },
                // { rel: 'stylesheet', href: '/Landing_Page/css/animate.min.css' },
                // { rel: 'stylesheet', href: '/Landing_Page/font-awesome/css/font-awesome.min.css' },
                // { rel: 'stylesheet', href: '/Landing_Page/css/stilo.css' },
            ]
            };
        },
        components: {
        },
        mounted() {
            console.log("Prueba");
            // new WOW().init();
        },
    }
</script>

<style lang="css" scoped>
    html{
        scroll-behavior: smooth;
    }

    /* **************************************************************************************************** */
    /* Parte I - Inicio */
    .slider-area{
        background-image: url("~@/assets/img/header_two.jpg");
        -webkit-background-composite: content-box;
        background-size: cover;
        height: 100vh;
        color: #fff;
        position: relative;
    }

    .slider-area:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(360deg, #000, transparent)
    }

    .slider-text h1{
        font-size: 45px;
        font-weight: bold;
    }

    .slider-text a{
        padding: 10px 15px;
        background-color: #2980b9;
        color: #fff;
        display: inline;
        /* margin-top: 25px; */
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
    }

    .slider-text{
        text-align: center;
        padding-top: 20%;
    }
    /* **************************************************************************************************** */
    
    /* **************************************************************************************************** */
    /* Parte II - About */
    .about-img img{
        width: 450px;
        height: 450px;
    }
    .item-text{ 
        padding-left: 15px;
    }
    .item-text{ 
        padding-left: 15px;
    }
    /* **************************************************************************************************** */

    /* **************************************************************************************************** */
    /* Parte III - Stats */
    .stats-area {
        background-image: url("~@/assets/img/header_one.jpg");
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
        position: relative;
        z-index: 1;
    }

    .stats-tarea::before{
        content: '';
        position: absolute;
        widows: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, #000, transparent);
        z-index: -1;
    }

    .single-stats{
        color: #fff;
        text-align: center;
    } 

    .single-stats .img-custom{
        margin: 20px;
    }

    .single-stats h2{
        font-weight: bold;
        font-size: 50px;
    }

    .single-stats p{
        font-family: 'Audiowide', cursive;
    }
</style>