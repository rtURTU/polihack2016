var n,b,c,mini,offsetY = 50,width = ct.width,space,n;
var nrPasi = 1,stopRun = false;;

function Dst( x1 , y1 , x2 , y2 ){
    return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
}

function DrawLine( x1, y1, x2, y2, culoar) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = culoar;
    ctx.stroke();
    ctx.closePath();
    
    var xm = ( x1 + x2 ) / 2;
    var ym = ( y1 + y2 ) / 2;
    var m = ( y2 - y1 ) / ( x2 - x1 );
    m = -1 / m;
    for( var x = 1 ; x <= 300 ; x++ ){
        y = m * ( xm - x ) + ym;
        if( Dst( xm , ym , x, y ) <= 10 && Dst( xm , ym , x , y ) >= 2 && sarrus( x1 , y1 , x2 , y2 , x , y ) > 0 ){
            ctx.fillStyle = culoar;
            if( x2 > x1 )
                ctx.fillText( '+' , x , y + 10 );
            else
                ctx.fillText( '+' , x , y - 10 );
            break;
        }
    }
    for( var x = 1 ; x <= 300 ; x++ ){
        y = m * ( xm - x ) + ym;
        if( Dst( xm , ym , x, y ) <= 10 && Dst( xm , ym , x , y ) >= 2 && sarrus( x1 , y1 , x2 , y2 , x , y ) < 0 ){
            ctx.fillStyle = culoar;
            if( x2 > x1 )
                ctx.fillText( '-' , x , y - 10 );
            else
                ctx.fillText( '-' , x , y + 10 );
            break;
        }
    }
}

var Qx = [ 5 , 18 , 28 , 32 , 55 , 63 , 78 , 120 , 235 , 274 ];
var Qy = [ 120 , 50 , 40 , 260 , 75 , 240 , 57 , 280 , 200 , 150 ];
var stiva = new Array( 0 );

function sarrus( x , y , a , b , g , h ){
    console.log( x + ' ' + y );
    console.log( a + ' ' + b );
    console.log( g + ' ' + h );
    return ( x * b + a * h + g * y - a * y - g * b - x * h );
}

n = Qx.length;
for( i = n - 2 ; i >= 0 ; i-- ){
    Qx.push( Qx[ i ] );
    Qy.push( Qy[ i ] );
}

function Solve( pas ){
    if( stopRun )
        return;
    while( stiva.length ) stiva.pop();
    --pas;
    ClearScreen();
    if( pas == 0 ){
        for( var i = 0 ; i < Qx.length ; i++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect( Qx[ i ] , Qy[ i ] , 1 , 1 );
        }
        AddLogLine( 'Pentru a efectua algoritmul de infasuratoare convexa avem nevoie de un set de puncte sortate crescator dupa cele doua coordonate.' , true );
    }
    stiva.push( 0 );
    stiva.push( 1 );
    for( i = 2 ; i < Qx.length ; i++ ){

        --pas;
        if( pas == 0 ){
            for( var j = 0 ; j < Qx.length ; j++ ){
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect( Qx[ j ] , Qy[ j ] , 1 , 1 );
            }
            for( var j = 0 ; j < stiva.length - 1 ; j++ ){
                DrawLine( Qx[ stiva[ j ] ] , Qy[ stiva[ j ] ] , Qx[ stiva[ j + 1 ] ] , Qy[ stiva[ j + 1 ] ] , '#FFFFFF' );
            }
        }

        while( stiva.length > 1 && sarrus( Qx[ stiva[ stiva.length - 2 ] ] , Qy[ stiva[ stiva.length - 2 ] ] , Qx[ stiva[ stiva.length - 1 ] ] , Qy[ stiva[ stiva.length - 1 ] ] , Qx[ i ] , Qy[ i ] ) <= 0 ){
             --pas;
            if( pas == 0 ){
                for( var j = 0 ; j < Qx.length ; j++ ){
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect( Qx[ j ] , Qy[ j ] , 1 , 1 );
                }
                for( var j = 0 ; j < stiva.length - 1 ; j++ ){
                    DrawLine( Qx[ stiva[ j ] ] , Qy[ stiva[ j ] ] , Qx[ stiva[ j + 1 ] ] , Qy[ stiva[ j + 1 ] ] , '#FFFFFF' );
                }

                AddLogLine( 'Punctul curent se afla la stanga fata de dreapta de referinta deci eliminam ultimul punct din infasuratoare.' , true );

            }
            stiva.pop();
        }
        stiva.push( i );

        --pas;
        if( pas == 0 ){
            for( var j = 0 ; j < Qx.length ; j++ ){
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect( Qx[ j ] , Qy[ j ] , 1 , 1 );
            }
            for( var j = 0 ; j < stiva.length - 1 ; j++ ){
                DrawLine( Qx[ stiva[ j ] ] , Qy[ stiva[ j ] ] , Qx[ stiva[ j + 1 ] ] , Qy[ stiva[ j + 1 ] ] , '#FFFFFF' );
            }
            AddLogLine( 'Punctul curent se afla la dreapta fata de dreapta de referinta deci o adaugam in infasuratoare.' , true );
        }

    }
    --pas;
    if( pas == 0 ){
        for( var j = 0 ; j < Qx.length ; j++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect( Qx[ j ] , Qy[ j ] , 1 , 1 );
        }
        for( var j = 0 ; j < stiva.length - 1 ; j++ ){
            DrawLine( Qx[ stiva[ j ] ] , Qy[ stiva[ j ] ] , Qx[ stiva[ j + 1 ] ] , Qy[ stiva[ j + 1 ] ] , '#FFFFFF' );
        }

        AddLogLine( 'Punctele de pe infasuratoarea convexa sunt unite si determina conturul acesteia.' , true );
        stopRun = true;
    }
}

ct.onclick = function(){ Solve( nrPasi++ ); };