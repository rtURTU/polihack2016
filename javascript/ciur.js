
ChangeDescription( 'Pentru a construi ciurul lui Eratostene vom folosi un vector de frecventa si vom marca numerele neprime cu 1, astfel cele ramase fiind numere prime. Pornim de pe pozitia 2 si parcurgem vectorul cu pasul 1. Cand ajungem pe o pozitie k cu valoarea zero pornim un al doilea contor de pe pozitia 2 * k cu pasul de k si marcam toate elementele.' );
ChangePageTitle( 'Ciurul lui Eratostene' );
ChangeHeaderTitle( 'Ciurul lui Eratostene' );

var v = new Array( 30 ), k = new Array( 30 ),nrPasi = 1,offsetY = 50, width = ct.width,space,more;

function Solve( pas ){
    for( var i = 1 ; i <= 25 ; i++ ){
        v[ i ] = 0;
    }
    ctx.font = '15px Comfortaa';
    --pas;
    space = width / 9;
    more = space / 3;
    if( pas == 0 ){
        ClearScreen();
        for( var i = 1 ; i <= 9 ; i++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ i ] , space * ( i - 1 ) + more , offsetY - 10 );
            ctx.fillText( '' + i , space * ( i - 1 ) + more , offsetY + 10 );
        }
        for( var i = 10 ; i <= 19 ; i++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ i ] , space * ( i - 10 ) + more , 2 * offsetY );
            ctx.fillText( '' + i , space * ( i - 10 ) + more , 2 * offsetY + 20 );
        }
        AddLogLine( 'Initializam un vector cu 0, de lungimea pe care vrem sa aplicam algoritmul.' );
    }
    
    for( var i = 2 ; i <= 18 ; i++ ){
        --pas;
        if( v[ i ] == 0 ){
            if( pas == 0 ){
                ctx.fillStyle = '#00FF00';
                if( i <= 9 ){
                    ctx.fillText( '' + v[ i ] , space * ( i - 1 ) + more , offsetY - 10 );
                    ctx.fillText( '' + i , space * ( i - 1 ) + more , offsetY + 10 );
                }else{
                    ctx.fillText( '' + v[ i ] , space * ( i - 10 ) + more , 2 * offsetY );
                    ctx.fillText( '' + i , space * ( i - 10 ) + more , 2 * offsetY + 20 );
                }
                AddLogLine( 'Numarul ' + i + ' este prim, vom marca multiplii lui cu 1.' );
            }
            for( var j = i + i ; j <= 18 ; j += i ){
                --pas;
                v[ j ] = 1;
                if( pas == 0 ){
                    ctx.fillStyle = '#000000';
                    if( j <= 9 ){
                        ctx.fillText( '0' , space * ( j - 1 ) + more , offsetY - 10 );
                        ctx.fillRect( space * ( j - 1 ) + more - 2 , offsetY - 23 , 14 , 13 );
                        ctx.fillText( '' + j , space * ( j - 1 ) + more , offsetY + 10 );
                        ctx.fillRect( space * ( j - 1 ) + more - 2 , offsetY - 3 , 14 , 13 );
                    }else{
                        ctx.fillText( '0' , space * ( j - 10 ) + more , 2 * offsetY );
                        ctx.fillRect( space * ( j - 10 ) + more - 2 , 2 * offsetY - 13 , 14 , 13 );
                        ctx.fillText( '' + j , space * ( j - 10 ) + more , 2 * offsetY + 20 );
                        ctx.fillRect( space * ( j - 10 ) + more - 2 , 2 * offsetY + 7 , 14 , 13 );
                    }
                    ctx.fillStyle = '#FF0000';
                    if( j <= 9 ){
                        
                        ctx.fillText( '1' , space * ( j - 1 ) + more , offsetY - 10 );
                        ctx.fillText( '' + j , space * ( j - 1 ) + more , offsetY + 10 );
                    }else{
                        ctx.fillText( '1' , space * ( j - 10 ) + more , 2 * offsetY );
                        ctx.fillText( '' + j , space * ( j - 10 ) + more , 2 * offsetY + 20 );
                    }
                    AddLogLine( 'Marcam numarul ' + j + ' ca fiind neprim.' );
                }
            }
        }else{
            if( pas == 0 ){
                AddLogLine( 'Numarul ' + i + ' are divizori proprii, deci nu este prim.' );
            }
        }
    }
    --pas;
    if( pas == 0 ){
        var aux = 'Numerele prime sunt:';
        for( i = 2 ; i <= 18 ; i++ ){
            if( v[ i ] == 0 ){
                aux = aux + ' ' + i;
            }
        }
        AddLogLine( aux + '.' );
    }
}

ct.onclick = function(){ Solve( nrPasi++ ); };

