var menuToggle;
menuToggle = false;
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


function ChangeDescription( newDescription ){
    document.getElementById( 'description' ).innerHTML = newDescription;
}


function ChangePageTitle( newName ){
    document.title = newName;
}

function ChangeHeaderTitle( newName ){
    document.getElementById( 'header-title' ).innerHTML = newName.toUpperCase();
}