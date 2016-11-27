ChangeDescription( 'Pentru a sorta o multime de elemente le retinem intr-un vector si pentru fiecare pozitie, de la prima la penultima, comparam valoarea de pe acea pozitie cu restul valorilor, si in caz ca valoarea e mai mare o interschimbam cu valoarea de pe pozitia comparata.' );
ChangePageTitle( 'Sortare' );
ChangeHeaderTitle( 'Sortare' );

<<<<<<< HEAD
var v = [12,-3,7,-9,44], d = [12,-3,7,-9,44];
var width = ct.width, space, more, offsetY = 50;
var nrPasi = 1;
=======
var v = [12,-3,7,-9,44,92,20,5], d = [12,-3,7,-9,44,92,20,5];
var width = ct.width, space, more, offsetY = 50;
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
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be

function Solve( v , pas ) {
    ctx.font = '15px Comfortaa';
    space = width / v.length;
    more = space / 3;
    --pas;
    if(pas == 0) {
        ClearScreen();
        for( var i = 0 ; i < v.length ; i++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
        }
<<<<<<< HEAD
        AddLogLine( 'Afisam setul de date initial. Urmarim sa il sortam in ordine crescatoare.' );
=======
        AddLogLine( 'Afisam setul de date initial. Urmarim sa il sortam in ordine crescatoare.' , true );
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
    }
    
    for( var i = 0 ; i < v.length - 1 ; i++ ) {
        for (var j = i + 1 ; j < v.length ; j++ ) {
            --pas;
            if ( v[ i ] > v[ j ] ) {
                aux = v[ i ];
                v[ i ] = v[ j ];
                v[ j ] = aux;
                if (pas == 0) {
<<<<<<< HEAD
                    AddLogLine('Numarul ' + v[ j ] + ' este mai mare decat numarul ' + v[ i ] + ' deci efectuam interschimbarea valorilor.');
=======
                    AddLogLine('Numarul ' + v[ j ] + ' este mai mare decat numarul ' + v[ i ] + ' deci efectuam interschimbarea valorilor.' , true);
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
                    ClearScreen();
                    for ( var k = 0 ; k < v.length ; k++ ) {
                        if ( k == i || k == j ) {
                            ctx.fillStyle = '#00FF00';
                        } else {
                            ctx.fillStyle = '#FFFFFF';
                        }
                        ctx.fillText( '' + v[ k ] , space * k + more , offsetY );
                    }
                }
            } else {
                if (pas == 0) {
<<<<<<< HEAD
                    AddLogLine('Numarul ' + v[ i ] + ' este mai mic decat numarul ' + v[ j ] + ' deci nu efectuam interschimbarea valorilor.');
=======
                    AddLogLine('Numarul ' + v[ i ] + ' este mai mic decat numarul ' + v[ j ] + ' deci nu efectuam interschimbarea valorilor.' , true);
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
                    ClearScreen();
                    for ( var k = 0 ; k < v.length ; k++ ) {
                        if ( k == i || k == j ) {
                            ctx.fillStyle = '#FF0000';
                        } else {
                            ctx.fillStyle = '#FFFFFF';
                        }
                        ctx.fillText( '' + v[ k ] , space * k + more , offsetY );
                    }
                }
            }
        }
    }
    
    --pas;
    if (pas == 0) {
<<<<<<< HEAD
        AddLogLine('Vectorul este sortat.')
=======
        AddLogLine('Vectorul este sortat.' , true)
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
        ClearScreen();
        for ( var k = 0 ; k < v.length ; k++ ) {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ k ] , space * k + more , offsetY );
        }
    }
    
    for (var i = 0 ; i < v.length ; i++)
        v[i] = d[i];
}

<<<<<<< HEAD
ct.onclick = function(){ Solve( v, nrPasi++ ); };
=======
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
        d[ 0 ] = 1;
        for( var i = 0 ; i < aux.length ; i++ ){
            console.log( parseInt( aux[ i ].value ) );
            if( !isNaN( parseInt( aux[ i ].value ) ) ){
                v[ aux2 ] = parseInt( aux[ i ].value );
                d[ aux2++ ] = parseInt( aux[ i ].value );
            }
        }
        while( v.length > aux2 )
            v.pop(),d.pop();
        Solve( v , nrPasi++ );
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
        Solve( v , nrPasi++ );
    }
}
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
