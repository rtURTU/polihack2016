
ChangeDescription( 'Pentru a gasi elementul cu valoarea minima dintr-un set de elemente vom retine intr-o variabila auxiliara un element din valorile primite, iar apoi vom parcurge setul de elemente si vom compara valoarea fiecarui element cu valoarea elementului retinut in variabila auxiliara. Daca elementul cu care il comparam este mai mic il vom suprascrie in variabila auxiliara.' );
ChangePageTitle( 'Cautare Minim' );
ChangeHeaderTitle( 'Cautare Minim' );

var v =[15,7,24,36,4,22,2,9];
var n,b,c,mini,offsetY = 50,width = ct.width,space;
var nrPasi = 1;

function Solve( pas ){
    ctx.font = '15px Comfortaa';
    space = width / v.length;
    more = space / 2;
    --pas;
    if( pas == 0 ){
        ClearScreen();
        for( var i = 0 ; i < v.length ; i++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
        }
        AddLogLine( 'Afisam setul de date initial.' );
    }
    --pas;
    mini = 0;
    if( pas == 0 ){
        ctx.fillStyle = '#00FF00';
        ctx.fillText( '' + v[ 0 ] , more , offsetY );
        AddLogLine( 'Setam primul element din set ca minim.' );
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
                AddLogLine( 'Numarul ' + v[ i ] + ' devine noul minim.' );
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
                AddLogLine( 'Numarul ' + v[ i ] + ' nu este mai mic decat minimul curent.' );
            }
        }
    }
    --pas;
    if( pas == 0 ){
        AddLogLine( 'Numarul minim din setul de date este ' + v[ mini ] + '.' );
    }
}

ct.onclick = function(){ Solve( nrPasi++ ); };

