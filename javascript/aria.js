ChangeDescription( '' );
ChangePageTitle( '' );
ChangeHeaderTitle( '' );

var Qx = [123,245,213,180,24,123], Qy = [20,60,245,267,160,20];
var nrPasi = 0, ariaTotala = 0, bonArie;

function DrawLine( x1, y1, x2, y2, culoar) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = culoar;
    ctx.stroke();
    ctx.closePath();
}

AddLogLine('Consideram originea 150, 150 ca si punct pivot, cu ajutorul caruia vom calcula ariile triunghiurilor din care este construit poligonul.');

function Solve( pas ) {
    if (nrPasi < 5) {
        bonArie = 150 * Qy[nrPasi] + Qx[nrPasi] * Qy[nrPasi + 1] + 150 * Qx[nrPasi + 1] - Qx[nrPasi + 1] * Qy[nrPasi] - Qx[nrPasi] * 150 - 150 * Qy[nrPasi + 1];
        ariaTotala += bonArie;

        console.log(bonArie);
        console.log(pas);

        DrawLine(150, 150, Qx[nrPasi], Qy[nrPasi], '#FFFFFF');
        DrawLine(Qx[nrPasi], Qy[nrPasi], Qx[nrPasi + 1], Qy[nrPasi + 1], '#FF0000');
        DrawLine(Qx[nrPasi + 1], Qy[nrPasi + 1], 150, 150, '#FFFFFF');

        nrPasi++;

        if(bonArie > 0) {
            AddLogLine('Originea se afla in dreapta segmentului, astfel adunam aria triunghiului la aria totala.');
            AddLogLine('Am adunat ' + bonArie + ' la aria poligonului. Aria curenta: ' + ariaTotala +'.');
        } else {
            AddLogLine('Originea se afla in stanga segmentului, astfel scadem aria triunghiului din aria totala.');
            AddLogLine('Am scazut ' + -bonArie + ' din aria poligonului. Aria curenta: ' + ariaTotala +'.');
        }
    }
}

ct.onclick = function(){ Solve( nrPasi ); };
