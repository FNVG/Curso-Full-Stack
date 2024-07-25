XMLHttpRequest.readyState
Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.



Document.readyState
La Document.readyStatepropiedad describe el estado de carga del objeto document. 
Cuando el valor de esta propiedad cambia, readystatechangese activa un evento en el documentobjeto.

Valor
El readyState de un documento puede ser uno de los siguientes:

loading
El documento todavia se esta cargando.

interactive
El documento ha terminado de cargarse y se ha analizado, pero los recursos secundarios, como scripts, imagenes, hojas de estilo y marcos, aun se estan cargando. El estado indica que el DOMContentLoadedevento est� a punto de activarse.

complete
El documento y todos los subrecursos han terminado de cargarse. El estado indica que el loadevento esta a punto de activarse.

expresion regular: 
const regex= /[ ]{2,}/gi;
busca secuencias de dos o más espacios en blanco consecutivos en un texto
[ ] define un conjunto de caracteres que incluye solo el espacio e blanco.
{2,} indica que se busca al menos dos instancias consectivas del caracter preceente 
g: significa que la busqueda será global , es decir, buscará todas las coincidencias en el texto 
en lugar de detenerse en la primera
i: Indica que la busqueda no será sensible a mayúsculas y minúsculas

Viewport wirdth (ancho de la ventana grafica = vw)
El ancho de la ventana gráfica ( vw ) es una unidad de medida relativa utilizada en CSS para definir tamaños y diseños en páginas web. 
Representa un porcentaje del ancho de la ventana gráfica o el área visible del navegador web.
 Por ejemplo, si el ancho de la ventana gráfica (la ventana del navegador) es 1000px, entonces 1vw sería igual a 10px.
 
 Wikipedia API
 Parametros:
`https://en.wikipedia.org/w/api.php
    ?action=query : la accion que se esta ejecutandpo es una cconsulta
    &generator=search : generador de busqueda, permite buscar en más de una propiedad, las propiedades de busqueda estan definidas en 
                        en el parametros &prop, en ese caso son paginas de imagenes y extractos. Por ende, nos ayuda a no hacer más de una consulta
                        Generar resultados para dos propiedades
                        Y cada generador, debe de tener establecido el prefijo de busqueda, en este caso con la palabra de bsuqueda gsrsearch y 
                        se establece el limite de resultados en gsrlimit
    &gsrsearch=${searchTerm} 
    &gsrlimit=20
    &prop=pageimages|extracts
    &exchars=${maxChars} maxima cantidad de caracteres recibida de la busqueda
    &exintro
    &explaintext: dice que se quiere obtener texto
    &exlimit=max: y se establece que la busqueda traiga el maximo de caracteres
    &format=json: que el texto de respuesta sea en formato json
    &origin=*`;