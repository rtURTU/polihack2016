ChangeDescription( 'Algoritmul lui Lee determina cea mai scurta distanta intre doua puncte aflate intr-o matrice cu obstacole. Algoritmul porneste dintr-un punct si marcheaza toate punctele adiacente, dupa care le introduce intr-o coada si merge mai departe. Algoritmul se opreste cand ajunge la coordonatele dorite.' );
ChangePageTitle( 'Algoritmul lui Lee' );
ChangeHeaderTitle( 'Algoritmul lui Lee' );


var X = [1,0,-1,0], Y = [0,1,0,-1];
var startX = 1, startY = 0;
var finX = 0, finY = 3;
var Qx = [1], Qy = [0];
var mat = [ [ 0, 0, -1, 0 ] , [ 0, -1, -1, 0 ] , [ 0, -1, 0 , 0 ] , [ 0 , 0 , 0, 0 ] ];
var nrPasi = 0;
var celWidth = ct.width / 4, celHeight = ct.height / 4;

mat[startX][startY] = 1;

for (var i = 0 ; i < 4 ; i++) {
    for (var j = 0 ; j < 4 ; j++) {
        if (mat[i][j] == -1) {
            ctx.fillStyle = '#FF0000';
            ctx.fillRect(i * celWidth, j * celHeight, celWidth, celHeight);
            ctx.strokeStyle="#000000";
            ctx.strokeRect(i * celWidth, j * celHeight, celWidth, celHeight);
        }
        if (i == startX && j == startY) {
            ctx.fillStyle = '#55FF00';
            ctx.fillRect(i * celWidth + celWidth / 2 - 10, j * celHeight + celHeight / 2 - 10, 20, 20);
        }
        if (i == finX && j == finY) {
            ctx.fillStyle = '#0000FF';
            ctx.fillRect(i * celWidth + celWidth / 2 - 10, j * celHeight + celHeight / 2 - 10, 20, 20);
        }   
    }
}

function Solve( posX, posY ) {
    
    ctx.font = '15px Comfortaa';
    for (var i = 0 ; i < 4 ; i ++) {
        nxtX = posX + X[i], nxtY = posY + Y[i];
        if (nxtX >= 0 && nxtX < 4 && nxtY >= 0 && nxtY < 4)
        if (mat[nxtX][nxtY] == 0) {
            Qx.push(nxtX); Qy.push(nxtY);
            mat[nxtX][nxtY] = mat[posX][posY] + 1;
        }
    }
    
    nrPasi++;
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(posX * celWidth, posY * celHeight, celWidth, celHeight);
    ctx.strokeStyle="#000000";
    ctx.strokeRect(posX * celWidth, posY * celHeight, celWidth, celHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText( '' + mat[posX][posY] , posX * celWidth + celWidth / 2, posY * celHeight + celHeight / 2);
    
    if (posX == finX && posY == finY)
        AddLogLine("Am ajuns la destinatia " + posX + " , " + posY + " din matrice, cu distanta minima " + mat[posX][posY] + "." , true);
    else
        AddLogLine("Am facut un pas pe pozitia " + posX + " , " + posY + " din matrice, ajungand cu distanta minima " + mat[posX][posY] + "." , true);
}

ct.onclick = function(){ Solve( Qx[nrPasi], Qy[nrPasi] ); };