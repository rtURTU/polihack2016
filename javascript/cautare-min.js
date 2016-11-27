
ChangeDescription( 'Pentru a gasi elementul cu valoarea minima dintr-un set de elemente vom retine intr-o variabila auxiliara un element din valorile primite, iar apoi vom parcurge setul de elemente si vom compara valoarea fiecarui element cu valoarea elementului retinut in variabila auxiliara. Daca elementul cu care il comparam este mai mic il vom suprascrie in variabila auxiliara.' );
ChangePageTitle( 'Cautare Minim' );
ChangeHeaderTitle( 'Cautare Minim' );

var v =[15,7,24,36,4,22,2,9];
var n,b,c,mini,offsetY = 50,width = ct.width,space;
var nrPasi = 1, editMore = true;


function DrawLine( x1, y1, x2, y2, culoar) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = culoar;
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.closePath();
}

function Solve( pas ){
    ctx.globalAlpha = 1.0;
    ctx.font = '15px Comfortaa';
    space = width / v.length;
    more = space / 3;
    --pas;
    if( pas == 0 ){
        ClearScreen();
        for( var i = 0 ; i < v.length ; i++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
        }
        AddLogLine( 'Afisam setul de date initial.' , true );
    }
    --pas;
    mini = 0;
    if( pas == 0 ){
        ctx.fillStyle = '#00FF00';
        ctx.fillText( '' + v[ 0 ] , more , offsetY );
        AddLogLine( 'Setam primul element din set ca minim.' , true );
    }
    for( var i = 1 ; i < v.length ; i++ ){
        --pas;
        if( v[ i ] < v[ mini ] ){
            if( pas == 0 ){
                ctx.fillStyle = '#FFFFFF';
                ctx.fillText( '' + v[ mini ] , mini * space + more , offsetY );
                ctx.fillStyle = '#FF0000';
                ctx.fillText( '' + v[ mini ] , mini * space + more , offsetY );
                ctx.fillText( '' + v[ mini ] , mini * space + more , offsetY );
                ctx.fillText( '' + v[ mini ] , mini * space + more , offsetY );
                ctx.fillText( '' + v[ mini ] , mini * space + more , offsetY );
                ctx.fillText( '' + v[ mini ] , mini * space + more , offsetY );
                ctx.fillStyle = '#00FF00';
                ctx.fillText( '' + v[ i ] , i * space + more , offsetY );
                AddLogLine( 'Numarul ' + v[ i ] + ' devine noul minim.' , true );
            }
            mini = i;
        }else{
            if( pas == 0 ){
                ctx.fillStyle = '#FFFFFF';
                ctx.fillText( '' + v[ i ] , i * space + more , offsetY );
                ctx.fillStyle = '#FF0000';
                ctx.fillText( '' + v[ i ] , i * space + more , offsetY );
                ctx.fillText( '' + v[ i ] , i * space + more , offsetY );
                ctx.fillText( '' + v[ i ] , i * space + more , offsetY );
                ctx.fillText( '' + v[ i ] , i * space + more , offsetY );
                ctx.fillText( '' + v[ i ] , i * space + more , offsetY );
                AddLogLine( 'Numarul ' + v[ i ] + ' nu este mai mic decat minimul curent.' , true );
            }
        }
    }
    --pas;
    if( pas == 0 ){
        AddLogLine( 'Numarul minim din setul de date este ' + v[ mini ] + '.' , true );
    }
}

function Editable(){
    ctx.globalAlpha = 1.0;
    DrawLine( 0 , 150 , 300 , 150 , '#FFD700' );
    ctx.font = '15px Comfortaa';
    ctx.fillStyle = '#FFD700'
    ctx.fillText( 'Run predefined example.' , 75 , 75 );
    ctx.fillText( 'Make your own example!' , 75 , 225 );
}

Editable();

function GetExample(){
    editMore = false;
    var newNode1 = document.createElement( 'div' );
    newNode1.id = 'example';
    newNode1.classList.add( 'row' );
    newNode1.style.width = '80%';
    newNode1.style.margin = '0 auto';
    for( var i = 0 ; i < 8 ; i++ ){
        var newNode2 = document.createElement( 'input' );
        newNode2.classList = 'col-xs-6 col-sm-3 col-lg-1';
        newNode2.type = 'text';
        newNode2.maxLength = 2;
        newNode2.style.backgroundColor = '1a1a1a';
        newNode2.style.borderColor = '#FFD700';
        newNode2.style.borderRadius = '5px';
        newNode2.style.textAlign = 'center';
        newNode2.classList.add( 'example-input' );
        newNode1.appendChild( newNode2 );
    }
    var newNode2 = document.createElement( 'button' );
    newNode2.classList = 'col-xs-12 col-sm-12 col-md-12 col-lg-4';
    newNode2.innerHTML = 'Run Example!';
    newNode2.style.backgroundColor = '1a1a1a';
    newNode2.style.borderColor = '#FFD700';
    newNode2.onclick = function(){
        document.getElementById( 'log-box' ).innerHTML = '';
        nrPasi = 1;
        var aux = newNode1.getElementsByClassName( 'example-input' );
        var aux2 = 0;
        v[ 0 ] = 1;
        for( var i = 0 ; i < aux.length ; i++ ){
            if( !isNaN( parseInt( aux[ i ].value ) ) ){
                v[ aux2++ ] = parseInt( aux[ i ].value );
            }
        }
        while( v.length > aux2 )
            v.pop();
        Solve( nrPasi++ );
    }
    newNode1.appendChild( newNode2 );
    document.getElementById( 'content' ).appendChild( newNode1 );
    document.getElementById( 'content' ).appendChild( document.getElementById( 'draw-space' ) );
    document.getElementById( 'content' ).appendChild( document.getElementById( 'log-space' ) );
    document.getElementById( 'content' ).appendChild( document.getElementById( 'description' ) );
}

ct.onclick = function( event ){
    if( event.y - ct.offsetTop >= 150 && nrPasi == 1 && editMore ){
        GetExample();
    }else{
        Solve( nrPasi++ );
    }
};

