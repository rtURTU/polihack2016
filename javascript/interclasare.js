ChangeDescription( 'Parcurgem doi vectori sortati pornind cu doi indici si la fiecare pas comparam valoarea elementelor celor doi indici. Introducem in capatul cleui de-al treilea vector valoarea mai mica si continuam parcurgerea. In cazul in care am ajuns la capatul unui vector si au mai ramas elemente in celalat le vom introduce in capatul celui de-al treilea vector.');
ChangePageTitle( 'Interclasare' );
ChangeHeaderTitle( 'Interclasare' );

var v = [-13,-2,9,14,27], d = [-7,-3,15,23], res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var width = ct.width, space, more, offsetY = 30;
var nrPasi = 1;

function Solve( v , d , pas ) {
    var i = 0, j = 0;
    
    ctx.font = '15px Comfortaa';
    space = width / res.length;
    more = space / 3;

    if (pas <= 10)
    ClearScreen();
    
    ctx.fillStyle = '#FFFFFF';
        for ( var k = 0 ; k < v.length ; k++ ) {
            ctx.fillText( '' + v[ k ] , space * k + more , offsetY );
        }
        for ( var k = 0 ; k < d.length ; k++ ) {
            ctx.fillText( '' + d[ k ] , space * k + more , offsetY * 2);
        }
    
    --pas;
    if (pas == 0) {
        
        ctx.fillStyle = '#FFFFFF';
        for ( var k = 0 ; k < v.length ; k++ ) {
            ctx.fillText( '' + v[ k ] , space * k + more , offsetY );
        }
        for ( var k = 0 ; k < d.length ; k++ ) {
            ctx.fillText( '' + d[ k ] , space * k + more , offsetY * 2);
        }
        AddLogLine( 'Afisam setul de date initial. Urmarim sa interclasam cei doi vectori care sunt sortati crescatori in forma initiala. Vectorul rezultant va fi ordonat tot crescator.' );
    }
    
    i = 0; j = 0;
    
    while(i + j < res.length) {
        
        --pas;
        if (j >= d.length || v[ i ] < d[ j ]) {
            res[i + j] = v[i];
            i++;
            
            if (pas == 0) {
                ctx.fillStyle = '#00FF00';
                ctx.fillText( '' + v[ i - 1 ] , space * (i - 1) + more , offsetY );
                AddLogLine('Interclasam in vectorul rezultant elementul ' + i + ' din primul vector.');
            }
        } else {
            res[i + j] = d[j];
            j++;
            
            if (pas == 0) {
                ctx.fillStyle = '#00FF00';
                ctx.fillText( '' + d[ j - 1 ] , space * (j - 1) + more , offsetY * 2 );
                AddLogLine('Interclasam in vectorul rezultant elementul ' + j + ' din al doilea vector.');
            }
        }
        
        if (pas == 0) {
            for ( var k = 0 ; k < v.length + d.length ; k++ ) {
                if (k == i + j - 1)
                    ctx.fillStyle = '#00FF00';
                else
                    ctx.fillStyle = '#FFFFFF';

                ctx.fillText('' + res[k] , space * k + more , offsetY * 3);
            }
        }
    }
    
    for (var k = 0 ; k < res.length ; k++)
        res[k] = 0;
}

ct.onclick = function(){ Solve( v, d, nrPasi++ ); };