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