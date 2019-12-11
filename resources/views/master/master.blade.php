<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title')</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!-- Fonts -->
            <link rel="dns-prefetch" href="//fonts.gstatic.com">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
            <!-- CUSTOM STYLES -->
     <style>
         @import "/css/app.css";
     </style>
     <!-- Github -->
     <link rel='stylesheet' id='all-css-0' href='https://github.blog/_static/??-eJydzEsOwjAMBNALkRoEtGwQZ2kSKzXNT7FT1NuTQnfs2I008wZeWVE0vlpkMMxgiQW0T2ZWnnQZywosq8cuUOza4ABNmBQFo4BMGJpzJFPVqin39dvRf2rBaFPZux8Zqsq+OooMT5Q8mvmD9rzNH+F+uvZDf74Nx8sbCHpRdw==' type='text/css' media='all' />
     <script type='text/javascript' src='https://github.blog/wp-content/themes/github-blog/dist/js/vendor/gascrolldepth.min.js?m=1567112606g'></script>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-8084820621762201",
            enable_page_level_ads: true
          });
        </script>
<style>
      body{color: #212121;
        font: 400 16px/24px Roboto,sans-serif;
        font-style: normal;
        font-variant-caps: normal;
        font-weight: 400;
        font-stretch: normal;
        font-size: 16px;
        line-height: 24px;
        font-family: Roboto, sans-serif;
        font-size-adjust: none;
        font-kerning: auto;
        font-variant-alternates: normal;
        font-variant-east-asian: normal;
        font-variant-ligatures: normal;
        font-variant-numeric: normal;
        font-variant-position: normal;
        font-language-override: normal;
        font-feature-settings: normal;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        margin: 0;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
}
        </style>

    </head>
    <body class="">

        @include('parts.nav')

          <main class="" role="main">
                @yield('content')
          </main>

        @include('parts.footer')

        <!-- bootstrap -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{ asset('vendor/unisharp/laravel-ckeditor/ckeditor.js') }}"></script>
        <script>
            CKEDITOR.replace( 'summary-ckeditor' );
        </script>
        <!-- GITHUB SCRIPTS -->

        <script type='text/javascript' src='https://github.blog/wp-content/mu-plugins/jetpack/_inc/build/photon/photon.min.js?m=1567716026g'></script>
        <script type='text/javascript' src='https://s0.wp.com/wp-content/js/devicepx-jetpack.js?ver=201937'></script>
        <script type='text/javascript' src='https://github.blog/_static/??-eJx9jUEOgzAMBD/U4FYV0EvVtzTEBEeOg7AB9fcFJK4cV7szC+vouiKGYmADZlSIZMPsnecS4auKppAUFpRQJtAlOtoANxb+9cRcJb3BtSSQ2q7op2MTqkxyYiQdzwGPiy1i9nj2n/x+1E3bPF/tvU5/IgE9iQ=='></script>
        <script type='text/javascript' src='https://stats.wp.com/e-201937.js' async='async' defer='defer'></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

    </body>
</html>
