/*
Ejercicio 26/08/2025

Gestión de Estudiantes y Notas
Diseña un programa que cree estudiantes con nombre y lista de calificaciones. 
Calcula su promedio usando métodos y propiedades. Permite agregar y eliminar calificaciones.
 Utiliza listas genéricas y muestra los estudiantes ordenados por promedio usando lambda.
*/
/*
Ejercicio 26/08/2025

Gestión de Estudiantes y Notas
Diseña un programa que cree estudiantes con nombre y lista de calificaciones. 
Calcula su promedio usando métodos y propiedades. Permite agregar y eliminar calificaciones.
 Utiliza listas genéricas y muestra los estudiantes ordenados por promedio usando lambda.

*/

void Menu()
{
    Console.Write("Ingrese el total de estudiantes que desea registrar (mayor a 0): ");
    int numeroRegistros = 0;
    
    while (!int.TryParse(Console.ReadLine(), out numeroRegistros) || numeroRegistros <= 0)
    {
        Console.Write("Error: Ingrese un numero valido");
        Console.ReadLine();
    }
    
}

void Calificaciones(int numeroRegistros)
{

    List<double> calificacionList = new List<double>();

    for (int i = 0; i <= numeroRegistros; i++)
    {

        System.Console.WriteLine($"Ingrese la calificacion{i + 1}");
        double calificacion = 0;

        while (!Double.TryParse(Console.ReadLine(), out calificacion) || calificacion <= 0)
        {

            System.Console.Write("Ingrese una calificaciuon valida");
            Console.ReadLine();

        }

        calificacionList.Add(calificacion);



    }
    






}




void CrearEstudiantes(int numeroRegistros)
{
    List<string> lista = new List<string>();

    for (int i = 0; i < numeroRegistros; i++)
    {

        Console.Write("Ingrese el nombre del estudiante", i+1);
        string? nombre = Console.ReadLine();

        while (string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit))
        {
            Console.Write("Ingrese un nombre valido");
            nombre = Console.ReadLine();
        }

        lista.Add(nombre);
    }
   


}