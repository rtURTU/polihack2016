var ct = document.getElementById( 'draw-canvas' );
var ctx = ct.getContext( '2d' );
ctx.fillRect( 0 , 0 , 1000 , 1000 );

function ChangePageTitle( newName ){
    document.title = newName;
}

function ChangeHeaderTitle( newName ){
    document.getElementById( 'header-title' ).innerHTML = newName.toUpperCase();
}

function AddLogLine( newLine ){
    document.getElementById( 'log-box' ).innerHTML = newLine + '<br>' + document.getElementById( 'log-box' ).innerHTML;
}

var menuToggle = false;
var aux = document.getElementsByClassName( 'menu-item-div' );
for( var i = 0 ; i < aux.length ; i++ ){
    aux[ i ].style.display = 'none';
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