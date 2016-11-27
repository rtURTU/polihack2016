
ChangeDescription( 'Cautarea binara este un algoritm de cautare care gaseste un element cautat pe in vector sortat. El comapara valoarea elementului din mijlocul vectorului cu valoarea cautata, dupa care elimina jumatatea in care nu se poate afla elementul cautat.' );
ChangePageTitle( 'Cautare binara' );
ChangeHeaderTitle( 'Cautare binara' );

var v =[2,4,7,9,15,22,24,36];
var n,b,c,mini,offsetY = 50,width = ct.width,space;
<<<<<<< HEAD
var nrPasi = 1,caut = 25,ls,ld,mij;
=======
var nrPasi = 1,caut = 24,ls,ld,mij;
var editMore = true;

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
<<<<<<< HEAD
        AddLogLine( 'Ca sa cautam binar trebuie sa avem setul de date sortat. Vom cauta pozitia elementului cu valoarea ' + caut + '.' );
=======
        AddLogLine( 'Ca sa cautam binar trebuie sa avem setul de date sortat. Vom cauta pozitia elementului cu valoarea ' + caut + '.' , true );
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
    }
    ls = 0;
    ld = v.length - 1;
    while( ls <= ld ){
        mij = Math.floor( ( ls + ld ) / 2 );
        --pas;
        if( pas == 0 ){
<<<<<<< HEAD
            AddLogLine( 'Efectuam cautarea binara pe intervalul [' + ls + ',' + ld + ']' );
=======
            AddLogLine( 'Efectuam cautarea binara pe intervalul [' + ls + ',' + ld + ']' , true );
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
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
<<<<<<< HEAD
                AddLogLine( 'Elementul ' + caut + ' a fost gasit pe pozitia ' + mij + '.'  );
=======
                AddLogLine( 'Elementul ' + caut + ' a fost gasit pe pozitia ' + mij + '.' , true  );
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
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
<<<<<<< HEAD
                AddLogLine( 'Elementul dim mijloc este mai mic decat elementul cautat, asa ca vom elimina intervalul din stanga.' );
=======
                AddLogLine( 'Elementul dim mijloc este mai mic decat elementul cautat, asa ca vom elimina intervalul din stanga.' , true );
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
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
<<<<<<< HEAD
                AddLogLine( 'Elementul dim mijloc este mai mare decat elementul cautat, asa ca vom elimina intervalul din dreapta.' );
=======
                AddLogLine( 'Elementul dim mijloc este mai mare decat elementul cautat, asa ca vom elimina intervalul din dreapta.' , true );
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be
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
<<<<<<< HEAD
        AddLogLine( 'Elementul cautat nu exista in setul de date.' );
    }
}

ct.onclick = function(){ Solve( nrPasi++ ); };
=======
        AddLogLine( 'Elementul cautat nu exista in setul de date.' , true );
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
    var newNode2 = document.createElement( 'input' );
        newNode2.classList = 'col-xs-6 col-sm-6 col-md-6 col-lg-2';
        newNode2.type = 'text';
        newNode2.maxLength = 2;
        newNode2.style.backgroundColor = '1a1a1a';
        newNode2.style.borderColor = '#FFD700';
        newNode2.style.borderRadius = '5px';
        newNode2.style.textAlign = 'center';
        newNode2.id = 'example-search';
        newNode1.appendChild( newNode2 );
    newNode2 = document.createElement( 'button' );
    newNode2.classList = 'col-xs-6 col-sm-6 col-md-6 col-lg-2';
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
        
        for( var i = 0 ; i < aux2 ; i++ ){
            for( var j = i ; j < aux2 ; j++ ){
                if( v[ j ] < v[ i ] ){
                    var aaux = v[ i ];
                    v[ i ] = v[ j ];
                    v[ j ] = aaux;
                }
            }
        }
        
        caut = parseInt( document.getElementById( 'example-search' ).value );
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
>>>>>>> 598c1512a7057950a98db2314d8c4436dc0768be

