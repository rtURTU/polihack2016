
ChangeDescription( 'Cautarea binara este un algoritm de cautare care gaseste un element cautat pe in vector sortat. El comapara valoarea elementului din mijlocul vectorului cu valoarea cautata, dupa care elimina jumatatea in care nu se poate afla elementul cautat.' );
ChangePageTitle( 'Cautare binara' );
ChangeHeaderTitle( 'Cautare binara' );

var v =[2,4,7,9,15,22,24,36];
var n,b,c,mini,offsetY = 50,width = ct.width,space;
var nrPasi = 1,caut = 25,ls,ld,mij;

function Solve( pas ){
    ctx.font = '15px Comfortaa';
    space = width / v.length;
    more = space / 3;
    --pas;
    if( pas == 0 ){
    ClearScreen();
        for( var i = 0 ; i < v.length ; i++ ){
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
            ctx.fillText( '' + i , space * i + more , offsetY + 20 );
        }
        AddLogLine( 'Ca sa cautam binar trebuie sa avem setul de date sortat. Vom cauta pozitia elementului cu valoarea ' + caut + '.' );
    }
    ls = 0;
    ld = v.length - 1;
    while( ls <= ld ){
        mij = Math.floor( ( ls + ld ) / 2 );
        --pas;
        if( pas == 0 ){
            AddLogLine( 'Efectuam cautarea binara pe intervalul [' + ls + ',' + ld + ']' );
        }
        --pas;
        if( v[ mij ] == caut ){
            if( pas == 0 ){
                ClearScreen();
                for( var i = 0 ; i < v.length ; i++ ){
                    if( i != mij ){
                        ctx.fillStyle = '#FF0000';
                        ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
                        ctx.fillText( '' + i , space * i + more , offsetY + 20 );
                    }else{
                        ctx.fillStyle = '#00FF00';
                        ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
                        ctx.fillText( '' + i , space * i + more , offsetY + 20 );
                    }
                }
                AddLogLine( 'Elementul ' + caut + ' a fost gasit pe pozitia ' + mij + '.'  );
            }
            ls = 100000;
        }else if( v[ mij ] < caut ){
            ls = mij + 1;
            if( pas == 0 ){
                ClearScreen();
                for( var i = 0 ; i < v.length ; i++ ){
                    if( i >= ls && i <= ld ){
                        ctx.fillStyle = '#FFFFFF';
                        ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
                        ctx.fillText( '' + i , space * i + more , offsetY + 20 );
                    }else{
                        ctx.fillStyle = '#FF0000';
                        ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
                        ctx.fillText( '' + i , space * i + more , offsetY + 20 );
                    }
                }
                AddLogLine( 'Elementul dim mijloc este mai mic decat elementul cautat, asa ca vom elimina intervalul din stanga.' );
            }
        }else{
            ld = mij - 1;
            if( pas == 0 ){
                ClearScreen();
                for( var i = 0 ; i < v.length ; i++ ){
                    if( i >= ls && i <= ld ){
                        ctx.fillStyle = '#FFFFFF';
                        ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
                        ctx.fillText( '' + i , space * i + more , offsetY + 20 );
                    }else{
                        ctx.fillStyle = '#FF0000';
                        ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
                        ctx.fillText( '' + i , space * i + more , offsetY + 20 );
                    }
                }
                AddLogLine( 'Elementul dim mijloc este mai mare decat elementul cautat, asa ca vom elimina intervalul din dreapta.' );
            }
        }
    }
    --pas;
    
    if( ls != 100000 && pas == 0 ){
        for( var i = 0 ; i < v.length ; i++ ){
                ctx.fillStyle = '#FF0000';
                ctx.fillText( '' + v[ i ] , space * i + more , offsetY );
                ctx.fillText( '' + i , space * i + more , offsetY + 20 );
        }
        AddLogLine( 'Elementul cautat nu exista in setul de date.' );
    }
}

ct.onclick = function(){ Solve( nrPasi++ ); };

