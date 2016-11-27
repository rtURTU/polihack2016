var menuToggle,ct,ctx;
window.onload = function(){
    loadDoc( 'chose.html' )
    menuToggle = false;
    var aux = document.getElementsByClassName( 'menu-item-div' );
    for( var i = 0 ; i < aux.length ; i++ ){
        aux[ i ].style.display = 'none';
    }
};

function ChangePageTitle( newName ){
    document.title = newName;
}

function ChangeHeaderTitle( newName ){
    document.getElementById( 'header-title' ).innerHTML = newName.toUpperCase();
}

function ClearScreen(){
    ctx.fillStyle = '#000000';
    ctx.fillRect( 0 , 0 , 1000 , 1000 );
}

<<<<<<< HEAD
function AddLogLine( newLine ){
    document.getElementById( 'log-box' ).innerHTML = newLine + '<br>' + document.getElementById( 'log-box' ).innerHTML;
=======
function AddLogLine( newLine , reset ){
    if( reset == true ){
        var aux = document.getElementsByClassName( 'recent-text' );
        console.log( aux );
        for( var i = 0 ; i < aux.length ; i++ ){
            aux[ i ].classList.remove( 'recent-text' );
        }
    }
    document.getElementById( 'log-box' ).innerHTML = "<span class = 'recent-text'>" + newLine + "</span>" + '<br>' + document.getElementById( 'log-box' ).innerHTML;
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
}

function ChangeDescription( newDescription ){
    document.getElementById( 'description' ).innerHTML = newDescription;
}

function loadDoc( pageURL , algo = '' ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        if( menuToggle )
            ToggleMenu();
        if( document.getElementById( 'content' ) )
        document.getElementById( 'wrapper' ).removeChild( document.getElementById( 'content' ) );
        document.getElementById( 'wrapper' ).innerHTML += this.responseText;
        document.getElementById( 'wrapper' ).appendChild( document.getElementById( 'footer' ) );
        loadScriptSync( 'javascript/load-canvas.js' );
        
        if( algo == 'ciur' ){
            loadScriptSync( 'javascript/ciur.js' );
        }else if( algo == 'aria' ){
            loadScriptSync( 'javascript/aria.js' );
        }else if( algo == 'cautare-binara' ){
            loadScriptSync( 'javascript/cautare-binara.js' );
        }else if( algo == 'cautare-min' ){
            loadScriptSync( 'javascript/cautare-min.js' );
        }else if( algo == 'infasuratoare' ){
            loadScriptSync( 'javascript/infasuratoare.js' );
        }else if( algo == 'interclasare' ){
            loadScriptSync( 'javascript/interclasare.js' );
        }else if( algo == 'lee' ){
            loadScriptSync( 'javascript/lee.js' );
        }else if( algo == 'sortare' ){
            loadScriptSync( 'javascript/sortare.js' );
        }
        
        if( pageURL == 'chose.html' ){
            ChangeHeaderTitle( 'Learn' );
            ChangePageTitle( 'Learn' );
        }
    }
  };
  xhttp.open("GET", pageURL, false );
  xhttp.send();
}

function loadScriptSync( scriptURL ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var newNode = document.createElement( 'script' );
        newNode.id = 'algorithm-script';
        newNode.innerHTML = this.responseText;
        document.getElementById( 'content' ).appendChild( newNode );
    }
  };
  xhttp.open("GET", scriptURL, false);
  xhttp.send();
}

function ToggleMenu(){
    var aux = document.getElementsByClassName( 'menu-item-div' );
    if( !menuToggle ){
        for( var i = 0 ; i < aux.length ; i++ ){
            aux[ i ].style.display = 'block';
        }
    }
    else{
        for( var i = 0 ; i < aux.length ; i++ ){
            aux[ i ].style.display = 'none';
        }
    }
    menuToggle = !menuToggle;
}

function AddScript( scriptURL ){
    var newNode = document.createElement( 'script' );
    newNode.src = scriptURL;
    document.body.appendChild( newNode );
}

