var  i  =  10 ;
varj  = 10 ; _  
varbi  = 465 ; _  
var  bj  =  450 ;
var  temporizador ;
var  limiteInferior  =  480 ;
var  limiteRight  =  780 ;
var  flagTop  =  true ;
var  flagLeft  =  true ;
var  pontuação  =  0 ;
var  tempoMoveBarra ;
var  direcaoMoveBarra ;
var  inclinação ;
var  limInfInclinação  =  1 ;
var  limSupInclinação  =  9 ;
var  nivelAtual ;
var  pontuaçãoNivel2  =  5 ;
var  pontuaçãoNivel3  =  20 ;
var  scoreWin  =  200 ;
var  bola       =  documento . getElementById ( 'bola' ) ;
var  barra      =  documento . getElementById ( 'barra' ) ;
var  pontuaçãocao  =  documento . getElementById ( 'pontuação' ) ;
var  nivelTexto  =  documento . getElementById ( 'nivelText' ) ;

função  iniciar ( nível )  {
    if  ( nível ==  0 ) nível =  2 ;   
    topBola    =  10 ;
    esquerdaBola   =  10 ;
    topBarra   =  470 ;
    barra esquerda  =  450 ;
    mudarNível ( nível ) ;
    limiteInferior  =  480 ;
    limiteDireito   =  780 ;
    flagTop   =  verdadeiro ;
    bandeiraEsquerda  =  verdadeiro ;
    pontuação  =  0 ;
    inclinação  =  5 ;
    bola . estilo . margemEsquerda   =  leftBola  +  'px' ;
    bola . estilo . marginTop    =  topBola  +  'px' ;
    barra . estilo . marginLeft  =  leftBarra  +  'px' ;
    barra . estilo . marginTop   =  topBarra  +  'px' ;
    pontuação . innerHTML  =  'Pontuação:'  +  pontuação ;
    mover ( ) ;
}

função  mudarNível ( nívelAtual )  {
    timer  =  50  -  ( ( parseInt ( nívelAtual )  -1  ) * 25 ) ; _  
    if  ( nívelAtual  ==  1 )  nívelTexto . innerText  =  'Fácil' ;
    if  ( nívelAtual  ==  2 )  nívelTexto . innerText  =  'Normal' ;
    if  ( nívelAtual  ==  3 )  nívelTexto . innerText  =  'Difícil' ;
}

função  mover ( )  {
    if  ( flagTop )  topBola  =  topBola  +  5 ;
    else  topBola  =  topBola  -  5 ;
    if  ( flagLeft )  leftBola  =  leftBola  +  inclinação ;
    else  leftBola  =  leftBola  -  inclinação ;
    bola . estilo . margemEsquerda  =  leftBola  +  'px' ;
    bola . estilo . marginTop  =  topBola  +  'px' ;
    if  ( ( topBola  +  20  >=  topBarra )  &&  ( leftBola  +  20  >=  leftBarra )  &&  ( leftBola  <=  leftBarra  +  170 ) )  {
        flagTop  =  false ;
        pontuação  =  pontuação  +  1 ;
        if  ( ( nivelAtual  ==  1 )  &&  ( pontuação  ==  pontuaçãoNivel2 ) )  {
            alert ( 'Parabéns você mudou de nível.' ) ;
            mudarNível ( 2 ) ;
        }
        if  ( ( nívelAtual  ==  2 )  &&  ( pontuação  ==  pontuaçãoNivel3 ) )  {
            alert ( 'Parabéns você mudou de nível.' ) ;
            mudarNível ( 3 ) ;
        }
        if  ( pontuação  ==  pontuaçãoGanho )  {
            alert ( 'Parabéns você ganhou o jogo.' ) ;
            retorno ;
        }
        pontuação . innerHTML  =  'Pontuação:'  +  pontuação ;
        if  ( new  Date ( ) . getTime ( )  -  tempoMoveBarra  <=  500 )  {
            if  ( bandeiraEsquerda )  {
                if  ( direcaoMoveBarra  ==  'D' )  {
                    inclinação  +=  4 ;
                    if  ( inclinação  >  limSupInclinação )  inclinação  =  limSupInclinação ;
                }
                if  ( direcaoMoveBarra  ==  'E' )  {
                    inclinação  -=  4 ;
                    if  ( inclinação  <  limInfInclinação )  inclinação  =  limInfInclinação ;
                }
            }  senão  {
                if  ( direcaoMoveBarra  ==  'D' )  {
                    inclinação  -=  4 ;
                    if  ( inclinação  <  limInfInclinação )  inclinação  =  limInfInclinação ;
                }
                if  ( direcaoMoveBarra  ==  'E' )  {
                    inclinação  +=  4 ;
                    if  ( inclinação  >  limSupInclinação )  inclinação  =  limSupInclinação ;
                }
            }
        }
        //muda a direção da bola caso a mesma bata no canto esquerdo
        if  ( ( topBola  +  20  >=  topBarra )  &&  ( leftBola  +  20  >=  leftBarra )  &&  ( leftBola  <=  leftBarra  +  10 ) )  {
            bandeiraEsquerda  =  false ;
            inclinação  =  5 ;
        }
        //muda a direção da bola caso a mesma bata no canto direito
        if  ( ( topBola  +  20  >=  topBarra )  &&  ( leftBola  >=  leftBarra  +  140 )  &&  ( leftBola  <=  leftBarra  +  170 ) )  {
            bandeiraEsquerda  =  verdadeiro ;
            inclinação  =  5 ;
        }
    }
    if  ( topBola  >=  limiteBottom )  {
        pontuação . innerHTML  =  'FIM DO JOGO' ;
        retorno ;
        flagTop  =  false ;
    }
    if  ( esquerdaBola >= limiteDireita  ) {  
        bandeiraEsquerda  =  false ;
    }
    if  ( topBola  <=  0 )  {
        flagTop  =  verdadeiro ;
    }
    if  ( esquerdaBola  <=  0 )  {
        bandeiraEsquerda  =  verdadeiro ;
    }
    setTimeout ( "move()" ,  temporizador ) ;
}

documento . onkeydown  =  function ( e )  {
    var  tamanhoBarra  =  150 ;
    var  larguraTela  =  800 ;
    if  ( ( e . which  ==  65 )  ||  ( e . which  ==  37 ) )  {
        direcaoMoveBarra  =  'E' ;
        tempoMoveBarra  =  new  Date ( ) . getTime ( ) ;
        leftBarra  =  leftBarra-  ( 100 - temporizador ) ; _   
        if  ( barraesquerda  <  0 )  Barraesquerda  =  0 ;
        barra . estilo . marginLeft  =  leftBarra  +  'px' ;
    }
    if  ( ( e . qual  ==  68 )  ||  ( e . qual  ==  39 ) )  {
        direcaoMoveBarra  =  'D' ;
        tempoMoveBarra  =  new  Date ( ) . getTime ( ) ;
        leftBarra  =  leftBarra  +  100  -  temporizador ;
        if  ( barraesquerda  +  tamanhoBarra  >  larguraTela )  barraesquerda  =  larguraTela  -  tamanhoBarra ;
        barra . estilo . marginLeft  =  leftBarra  +  'px' ;
    }
}

function  stEsquerda ( )  {
    var  tamanhoBarra  =  150 ;
    var  larguraTela  =  800 ;
    direcaoMoveBarra  =  'E' ;
    tempoMoveBarra  =  new  Date ( ) . getTime ( ) ;
    leftBarra  =  leftBarra-  ( 100 - temporizador ) ; _   
    if  ( barraesquerda  <  0 )  Barraesquerda  =  0 ;
    barra . estilo . marginLeft  =  leftBarra  +  'px' ;
}

function  stDireita ( )  {
    var  tamanhoBarra  =  150 ;
    var  larguraTela  =  800 ;
    direcaoMoveBarra  =  'D' ;
    tempoMoveBarra  =  new  Date ( ) . getTime ( ) ;
    leftBarra  =  leftBarra  +  100  -  temporizador ;
    if  ( barraesquerda  +  tamanhoBarra  >  larguraTela )  barraesquerda  =  larguraTela  -  tamanhoBarra ;
    barra . estilo . marginLeft  =  leftBarra  +  'px' ;
}

if  ( tela . largura  ==  "800" )  {
    visível  =  verdadeiro ;
    janela . resizeTo ( 800 ,  600 ) ;
}
