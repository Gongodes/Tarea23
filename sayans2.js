/*Gonzalo G.
 Vanessa A.

 version 1.0

 objetivos: acciones paginas*/

  $( document ).ready(function() {
    $( function() {
        $( "#resizable" ).resizable();
        
    
      } );
    
      $( "#dialog" ).hide();
    
    
      $( function() {
        $( "#accordion" ).accordion();
      } );
    
    
      $( "#boton" ).click(function() {
        $( function() {
            $( "#dialog" ).dialog();
          } );
      });
    

      


  });