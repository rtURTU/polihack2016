var V = new Array(),v = new Array(), auxV = new Array();
function GenerateVector( lng ){
    v.push( 0 );
    V.push( 0 );
    auxV.push( 0 );
    for( var i = 1 ; i <= lng ; i++ ){
        V.push( Math.floor( Math.random() * 10000000 ) );
        v.push( V[ i ] );
        auxV.push( 0 );
    }
}

function BubbleSort(){
    var startingTime = new Date();
    var ok = false;
    while( ok == false && new Date() - startingTime <= 5 ){
        ok = true;
        for( var i = 1 ; i <= v.length ; i++ ){
            if( v[ i ] > v[ i + 1 ] ){
                ok = v[ i ];
                v[ i ] = v[ i + 1 ];
                v[ i + 1 ] = ok;
                ok = false;
            } 
        }
    }
    var finishTime = new Date();
    if( ok == false ){
        return 'und';
    }else{
        return finishTime - startingTime;
    }
}

function SelectSort(){
    var aux;
    var startingTime = new Date();
    for( var i = 1 ; i <= v.length && new Date() - startingTime <= 5 ; i++ ){
        for( var j = i + 1 ; j <= v.length ; j++ ){
            if( v[ i ] > v[ j ] ){
                aux = v[ i ];
                v[ i ] = v[ j ];
                v[ j ] = aux;
            }
        }
    }
    var finishTime = new Date();
    if( finishTime - startingTime <= 5.1 ){
        return finishTime - startingTime;
    }else{
        return 'und';
    }
}

function InsertSort(){
    var startingTime = new Date();
    v[ 1 ] = V[ 1 ];
    for( var i = 2 ; i <= V.length && new Date() - startingTime ; i++ ){
        for( var j = 1 ; j <= i ; j++ ){
            if( v[ j ] > V[ i ] ){
                for( var k = i ; k >= j ; k-- ){
                    v[ k + 1 ] = v[ k ];
                }
                v[ j ] = V[ i ];
                break;
            }
        }
    }
    var finishTime = new Date();
    if( finishTime - startingTime <= 5.1 ){
        return finishTime - startingTime;
    }else{
        return 'und';
    }
}

function merge( left , right ){
    console.log( left + ' ' + right );
    if( left == right ){
        return;
    }
    var middle = Math.floor( ( left + right ) / 2 );
    var aux = 1;
    merge( left , middle );
    merge( middle + 1 , right );
    var i = left, j = middle + 1;
    while( i <= middle || j <= right ){
        console.log( i + ' ' + j );
        if( v[ i ] <= v[ j ] && i <= middle || j > right ){
            auxV[ aux++ ] = v[ i ];
            i++;
        }else{
            auxV[ aux++ ] = v[ j ];
            j++;
        }
    }
    for( var i = left ; i <= right ; i++ ){
        v[ i ] = auxV[ i - left + 1 ];
    }
}

function MergeSort(){
    var startingTime = new Date();
    merge( 1 , v.length - 1 );
    var finishTime = new Date();
        return finishTime - startingTime;
}