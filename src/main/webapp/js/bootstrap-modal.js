


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap/js/bootstrap-modal.js at master · twitter/bootstrap</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/modules/logos_page/Octocat.png">
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="517352" name="octolytics-actor-id" /><meta content="giri4it" name="octolytics-actor-login" /><meta content="05d660994643288c88e2c54b6ff436aefb72af1fe52eef0df35c1bc552ef61f1" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="uNBPgQLQq3AIN5OT/hTU4vnLUy5i1cQf3JHJ7tFKAGQ=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-3cd5474511c95dff221d37e940ad18715f0749d1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-c8fae3a887e5e0e51b7fe06f228ba7b53cc45e53.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-1f72571b966545f4e27481a3b0ebbeeed4f2f139.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-cf0d33eb63c4372bca4ee883f44784474d8a96f3.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="f2531c07887f05529a061c85c74a8194">

        <link data-pjax-transient rel='permalink' href='/twitter/bootstrap/blob/d991ef2ab1b4d156c7e5d33d052d66f8eaafc460/js/bootstrap-modal.js'>
  <meta property="og:title" content="bootstrap"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/twitter/bootstrap"/>
  <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="bootstrap - Sleek, intuitive, and powerful front-end framework for faster and easier web development."/>

  <meta name="description" content="bootstrap - Sleek, intuitive, and powerful front-end framework for faster and easier web development." />

  <meta content="50278" name="octolytics-dimension-user_id" /><meta content="twitter" name="octolytics-dimension-user_login" /><meta content="2126244" name="octolytics-dimension-repository_id" /><meta content="twitter/bootstrap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2126244" name="octolytics-dimension-repository_network_root_id" /><meta content="twitter/bootstrap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/twitter/bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="giri4it"
      data-repo="twitter/bootstrap"
      data-branch="master"
      data-sha="56a2f925b4f018161b76fb5982d79cfeeb39c1e2"
  >

    <input type="hidden" name="nwo" value="twitter/bootstrap" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/giri4it" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/5f44f1621cd50f1f0a6742e233bb5d6c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> giri4it
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-list-unordered"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="twitter/bootstrap">This repository</span>
    </li>
    <li>
      <a href="/twitter/bootstrap/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="uNBPgQLQq3AIN5OT/hTU4vnLUy5i1cQf3JHJ7tFKAGQ=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2126244" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/twitter/bootstrap/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
      </a>
      <a href="/twitter/bootstrap/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/twitter/bootstrap/stargazers">52,622</a>
    </li>

        <li>
          <a href="/twitter/bootstrap/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/twitter/bootstrap/network" class="social-count">17,180</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/twitter" class="url fn" itemprop="url" rel="author"><span itemprop="title">twitter</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/twitter/bootstrap" class="js-current-repository js-repo-home-link">bootstrap</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/twitter/bootstrap" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /twitter/bootstrap">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/twitter/bootstrap/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /twitter/bootstrap/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>148</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/twitter/bootstrap/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /twitter/bootstrap/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>53</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/twitter/bootstrap/wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /twitter/bootstrap/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/twitter/bootstrap/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /twitter/bootstrap/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/twitter/bootstrap/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /twitter/bootstrap/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/twitter/bootstrap/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /twitter/bootstrap/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/twitter/bootstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/twitter/bootstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:twitter/bootstrap.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:twitter/bootstrap.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/twitter/bootstrap" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/twitter/bootstrap" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/twitter/bootstrap" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                  <a href="/twitter/bootstrap/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:e066cbc73d4a7eb8de8be7a938c90bf9 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:e066cbc73d4a7eb8de8be7a938c90bf9 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/twitter/bootstrap/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/3.0.0-wip/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3.0.0-wip" rel="nofollow" title="3.0.0-wip">3.0.0-wip</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/gh-pages/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/master/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.3.2/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.2" rel="nofollow" title="v2.3.2">v2.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.3.1/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.1" rel="nofollow" title="v2.3.1">v2.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.3.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.0" rel="nofollow" title="v2.3.0">v2.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.2.2/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.2" rel="nofollow" title="v2.2.2">v2.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.2.1/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.1" rel="nofollow" title="v2.2.1">v2.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.2.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.0" rel="nofollow" title="v2.2.0">v2.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.1.1/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.1" rel="nofollow" title="v2.1.1">v2.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.1.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.0" rel="nofollow" title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.0.4/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.4" rel="nofollow" title="v2.0.4">v2.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.0.3/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.3" rel="nofollow" title="v2.0.3">v2.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.0.2/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.2" rel="nofollow" title="v2.0.2">v2.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.0.1/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.1" rel="nofollow" title="v2.0.1">v2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v2.0.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.0" rel="nofollow" title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v1.4.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.4.0" rel="nofollow" title="v1.4.0">v1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v1.3.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3.0" rel="nofollow" title="v1.3.0">v1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v1.2.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.0" rel="nofollow" title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v1.1.1/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.1" rel="nofollow" title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v1.1.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.0" rel="nofollow" title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twitter/bootstrap/blob/v1.0.0/js/bootstrap-modal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0" rel="nofollow" title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twitter/bootstrap" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twitter/bootstrap/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-modal.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="js/bootstrap-modal.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/6c26cf15b7d768d3a86d8662628b8329?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/m5o" rel="author">m5o</a></span>
    <time class="js-relative-date" datetime="2013-06-18T10:40:15-07:00" title="2013-06-18 10:40:15">June 18, 2013</time>
    <div class="commit-title">
        <a href="/twitter/bootstrap/commit/cafb739759a3badf137ad56158bd3e067f3bff2c" class="message" data-pjax="true">update javascript files to v2.3.2</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>7</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="m5o" href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js?author=m5o"><img height="20" src="https://secure.gravatar.com/avatar/6c26cf15b7d768d3a86d8662628b8329?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="fat" href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js?author=fat"><img height="20" src="https://secure.gravatar.com/avatar/a98244cbdacaf1c0b55499466002f7a8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="smt" href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js?author=smt"><img height="20" src="https://secure.gravatar.com/avatar/5de6eade9b61a1ea85aa936c4b703672?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nragaz" href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js?author=nragaz"><img height="20" src="https://secure.gravatar.com/avatar/18903c149f08850e897d1f63f254eeee?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="copiousfreetime" href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js?author=copiousfreetime"><img height="20" src="https://secure.gravatar.com/avatar/cff2d90ae70bbbb5d4865d8412159f85?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rrjamie" href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js?author=rrjamie"><img height="20" src="https://secure.gravatar.com/avatar/99d3e229ab6109ce3436845d4fff6338?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="roverwolf" href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js?author=roverwolf"><img height="20" src="https://secure.gravatar.com/avatar/d7b84f32da68adffbe37554234e4b73e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/6c26cf15b7d768d3a86d8662628b8329?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/m5o">m5o</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/a98244cbdacaf1c0b55499466002f7a8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fat">fat</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/5de6eade9b61a1ea85aa936c4b703672?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/smt">smt</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/18903c149f08850e897d1f63f254eeee?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nragaz">nragaz</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/cff2d90ae70bbbb5d4865d8412159f85?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/copiousfreetime">copiousfreetime</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/99d3e229ab6109ce3436845d4fff6338?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rrjamie">rrjamie</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/d7b84f32da68adffbe37554234e4b73e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/roverwolf">roverwolf</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>248 lines (183 sloc)</span>
        <span>6.656 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/twitter/bootstrap/edit/master/js/bootstrap-modal.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/twitter/bootstrap/raw/master/js/bootstrap-modal.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/twitter/bootstrap/blame/master/js/bootstrap-modal.js" class="button minibutton ">Blame</a>
          <a href="/twitter/bootstrap/commits/master/js/bootstrap-modal.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/twitter/bootstrap/delete/master/js/bootstrap-modal.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/* =========================================================</span></div><div class='line' id='LC2'><span class="cm"> * bootstrap-modal.js v2.3.2</span></div><div class='line' id='LC3'><span class="cm"> * http://twitter.github.com/bootstrap/javascript.html#modals</span></div><div class='line' id='LC4'><span class="cm"> * =========================================================</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2012 Twitter, Inc.</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></div><div class='line' id='LC8'><span class="cm"> * you may not use this file except in compliance with the License.</span></div><div class='line' id='LC9'><span class="cm"> * You may obtain a copy of the License at</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> * http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC12'><span class="cm"> *</span></div><div class='line' id='LC13'><span class="cm"> * Unless required by applicable law or agreed to in writing, software</span></div><div class='line' id='LC14'><span class="cm"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></div><div class='line' id='LC15'><span class="cm"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></div><div class='line' id='LC16'><span class="cm"> * See the License for the specific language governing permissions and</span></div><div class='line' id='LC17'><span class="cm"> * limitations under the License.</span></div><div class='line' id='LC18'><span class="cm"> * ========================================================= */</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="o">!</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="s2">&quot;use strict&quot;</span><span class="p">;</span> <span class="c1">// jshint ;_;</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>&nbsp;<span class="cm">/* MODAL CLASS DEFINITION</span></div><div class='line' id='LC27'><span class="cm">  * ====================== */</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Modal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="s1">&#39;[data-dismiss=&quot;modal&quot;]&#39;</span><span class="p">,</span> <span class="s1">&#39;click.dismiss.modal&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hide</span><span class="p">,</span> <span class="k">this</span><span class="p">))</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">remote</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.modal-body&#39;</span><span class="p">).</span><span class="nx">load</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">remote</span><span class="p">)</span></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>&nbsp;&nbsp;<span class="nx">Modal</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">constructor</span><span class="o">:</span> <span class="nx">Modal</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">toggle</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">?</span> <span class="s1">&#39;show&#39;</span> <span class="o">:</span> <span class="s1">&#39;hide&#39;</span><span class="p">]()</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">show</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">e</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">)</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">isDefaultPrevented</span><span class="p">())</span> <span class="k">return</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">=</span> <span class="kc">true</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">escape</span><span class="p">()</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">backdrop</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">transition</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span> <span class="o">&amp;&amp;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;fade&#39;</span><span class="p">)</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">appendTo</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">)</span> <span class="c1">//don&#39;t move modals dom position</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">show</span><span class="p">()</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">transition</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">offsetWidth</span> <span class="c1">// force reflow</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;in&#39;</span><span class="p">)</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;aria-hidden&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">)</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">enforceFocus</span><span class="p">()</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transition</span> <span class="o">?</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">focus</span><span class="p">().</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;shown&#39;</span><span class="p">)</span> <span class="p">})</span> <span class="o">:</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">focus</span><span class="p">().</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;shown&#39;</span><span class="p">)</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">hide</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="s1">&#39;hide&#39;</span><span class="p">)</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">isDefaultPrevented</span><span class="p">())</span> <span class="k">return</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">=</span> <span class="kc">false</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">escape</span><span class="p">()</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;focusin.modal&#39;</span><span class="p">)</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;in&#39;</span><span class="p">)</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;aria-hidden&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;fade&#39;</span><span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hideWithTransition</span><span class="p">()</span> <span class="o">:</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">hideModal</span><span class="p">()</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">enforceFocus</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;focusin.modal&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">escape</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">keyboard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keyup.dismiss.modal&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">e</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">which</span> <span class="o">==</span> <span class="mi">27</span> <span class="o">&amp;&amp;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">hide</span><span class="p">()</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isShown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;keyup.dismiss.modal&#39;</span><span class="p">)</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">hideWithTransition</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">)</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">hideModal</span><span class="p">()</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">500</span><span class="p">)</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">)</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">hideModal</span><span class="p">()</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">hideModal</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">hide</span><span class="p">()</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">backdrop</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">removeBackdrop</span><span class="p">()</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">that</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;hidden&#39;</span><span class="p">)</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">removeBackdrop</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">.</span><span class="nx">remove</span><span class="p">()</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span> <span class="o">=</span> <span class="kc">null</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">backdrop</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">animate</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;fade&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;fade&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">backdrop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">doAnimate</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span> <span class="o">&amp;&amp;</span> <span class="nx">animate</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;modal-backdrop &#39;</span> <span class="o">+</span> <span class="nx">animate</span> <span class="o">+</span> <span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">appendTo</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">)</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">backdrop</span> <span class="o">==</span> <span class="s1">&#39;static&#39;</span> <span class="o">?</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">focus</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hide</span><span class="p">,</span> <span class="k">this</span><span class="p">)</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">doAnimate</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">offsetWidth</span> <span class="c1">// force reflow</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;in&#39;</span><span class="p">)</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callback</span><span class="p">)</span> <span class="k">return</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doAnimate</span> <span class="o">?</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">()</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isShown</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;in&#39;</span><span class="p">)</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;fade&#39;</span><span class="p">)</span><span class="o">?</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$backdrop</span><span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">()</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">()</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC192'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>&nbsp;<span class="cm">/* MODAL PLUGIN DEFINITION</span></div><div class='line' id='LC196'><span class="cm">  * ======================= */</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">old</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">option</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;modal&#39;</span><span class="p">)</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(),</span> <span class="k">typeof</span> <span class="nx">option</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">option</span><span class="p">)</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">)</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;modal&#39;</span><span class="p">,</span> <span class="p">(</span><span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Modal</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">)))</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">option</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="nx">data</span><span class="p">[</span><span class="nx">option</span><span class="p">]()</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">show</span><span class="p">)</span> <span class="nx">data</span><span class="p">.</span><span class="nx">show</span><span class="p">()</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC209'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">backdrop</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">keyboard</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">show</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span><span class="p">.</span><span class="nx">Constructor</span> <span class="o">=</span> <span class="nx">Modal</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>&nbsp;<span class="cm">/* MODAL NO CONFLICT</span></div><div class='line' id='LC221'><span class="cm">  * ================= */</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">modal</span> <span class="o">=</span> <span class="nx">old</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span></div><div class='line' id='LC226'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>&nbsp;<span class="cm">/* MODAL DATA-API</span></div><div class='line' id='LC230'><span class="cm">  * ============== */</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click.modal.data-api&#39;</span><span class="p">,</span> <span class="s1">&#39;[data-toggle=&quot;modal&quot;]&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">href</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">)</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">$target</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-target&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">href</span> <span class="o">&amp;&amp;</span> <span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/.*(?=#[^\s]+$)/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)))</span> <span class="c1">//strip for ie7</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">option</span> <span class="o">=</span> <span class="nx">$target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;modal&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;toggle&#39;</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span> <span class="nx">remote</span><span class="o">:!</span><span class="sr">/#/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">href</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">href</span> <span class="p">},</span> <span class="nx">$target</span><span class="p">.</span><span class="nx">data</span><span class="p">(),</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">())</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$target</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">modal</span><span class="p">(</span><span class="nx">option</span><span class="p">)</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">one</span><span class="p">(</span><span class="s1">&#39;hide&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">focus</span><span class="p">()</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC245'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC246'><br/></div><div class='line' id='LC247'><span class="p">}(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
    <button type="submit" class="button">Go</button>
  </form>
</div>
          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">Developer</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07397s from fe3.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/twitter/bootstrap/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
    <span id='server_response_time' data-time='0.07453' data-host='fe3'></span>
    
  </body>
</html>

