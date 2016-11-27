ChangeDescription( 'Pentru a sorta o multime de elemente le retinem intr-un vector si pentru fiecare pozitie, de la prima la penultima, comparam valoarea de pe acea pozitie cu restul valorilor, si in caz ca valoarea e mai mare o interschimbam cu valoarea de pe pozitia comparata.' );
ChangePageTitle( 'Sortare' );
ChangeHeaderTitle( 'Sortare' );

var v = [12,-3,7,-9,44], d = [12,-3,7,-9,44];
var width = ct.width, space, more, offsetY = 50;
var nrPasi = 1;

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
        AddLogLine( 'Afisam setul de date initial. Urmarim sa il sortam in ordine crescatoare.' );
    }
    
    for( var i = 0 ; i < v.length - 1 ; i++ ) {
        for (var j = i + 1 ; j < v.length ; j++ ) {
            --pas;
            if ( v[ i ] > v[ j ] ) {
                aux = v[ i ];
                v[ i ] = v[ j ];
                v[ j ] = aux;
                if (pas == 0) {
                    AddLogLine('Numarul ' + v[ j ] + ' este mai mare decat numarul ' + v[ i ] + ' deci efectuam interschimbarea valorilor.');
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
                    AddLogLine('Numarul ' + v[ i ] + ' este mai mic decat numarul ' + v[ j ] + ' deci nu efectuam interschimbarea valorilor.');
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
        AddLogLine('Vectorul este sortat.')
        ClearScreen();
        for ( var k = 0 ; k < v.length ; k++ ) {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ k ] , space * k + more , offsetY );
        }
    }
    
    for (var i = 0 ; i < v.length ; i++)
        v[i] = d[i];
}

ct.onclick = function(){ Solve( v, nrPasi++ ); };