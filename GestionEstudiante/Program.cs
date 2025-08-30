/*
Ejercicio 26/08/2025

Gestión de Estudiantes y Notas
Diseña un programa que cree estudiantes con nombre y lista de calificaciones. 
Calcula su promedio usando métodos y propiedades. Permite agregar y eliminar calificaciones.
 Utiliza listas genéricas y muestra los estudiantes ordenados por promedio usando lambda.

*/


Estudiantes.Menu();


class Estudiantes
{

    public  string Nombre { get; set; }

    public static List<Estudiantes> listaEstudiantes = new List<Estudiantes>();

    public  List<double> Calificaciones { get; set; }


    public Estudiantes(string nombre)
    {
        Nombre = nombre;
        Calificaciones = new List<double>();
    }

    public static void Menu()
    {

        Console.Clear();
        Console.WriteLine("Ingrese lo que desea realizar\n  " +
        "1- Agregar Estudiantes \n  2- Agregar calificaciones  \n " +
         "3 - Eliminar Calificacion \n 4- Mostrar estudiantes y calificaciones \n 5- Salir");
        int opt;

        while (!int.TryParse(Console.ReadLine(), out opt) || opt <= 0 || opt > 5)
        {
            Console.Clear();
            Console.Write("Ingrese una accion valida:  ");

            Console.ReadLine();

        }

        switch (opt)
        {

            case 1:

                Console.Clear();
                Console.Write("Ingrese el total de estudiantes que desea registrar (mayor a 0): ");
                int numeroRegistros = 0;

                while (!int.TryParse(Console.ReadLine(), out numeroRegistros) || numeroRegistros <= 0)
                {
                    Console.Clear();
                    Console.Write("Error: Ingrese un numero valido: ");

                }

                CrearEstudiantes(numeroRegistros);
                Console.Clear();
                Console.WriteLine("Estudiantes agregados con exito ");

                Thread.Sleep(1000);
                Console.Clear();
                Menu();
                break;

            case 2:
                if (listaEstudiantes.Count == 0)
                {

                    Console.Clear();
                    Console.WriteLine("Error: No existen estudiantes ");
                    Console.WriteLine("Desea agregar estudiantes(Si/No)");
                    string? optIngresada = Console.ReadLine()!.ToLower();

                    if (optIngresada != "si") Menu();

                    Console.WriteLine("Ingrese el numero de estudiantes a registrar");
                    int num;
                    while (!int.TryParse(Console.ReadLine(), out num) || num <= 0)
                    {
                        Console.WriteLine("Ingrese un numero valido: ");
                        Console.ReadLine();
                    }

                    CrearEstudiantes(num);

                    Console.Clear();
                    Menu();


                }

                Console.Clear();

                Console.WriteLine("Cuantas calificaciones desea agregar por estudiante? ");
                int numCalificaciones;

                while (!int.TryParse(Console.ReadLine(), out numCalificaciones))
                {

                    Console.Write("Error: Ingrese un numero valido: ");
                }

                for (int i = 0; i < listaEstudiantes.Count; i++)
                {

                    for (int j = 0; j < numCalificaciones; j++)
                    {
                        Console.Clear();
                        Console.WriteLine($"Para el estudiante {listaEstudiantes[i].Nombre}");
                        Console.WriteLine($"Ingrese la calificacion {j + 1}");
                        double calificacion;

                        while (!double.TryParse(Console.ReadLine(), out calificacion) || calificacion <= 0)
                        {
                            Console.Clear();
                            Thread.Sleep(1000);
                            Console.Write("Error: Ingrese una calificacion valida: ");

                        }

                        listaEstudiantes[i].AgregarCalificaciones(calificacion);
                    }

                }
                Console.Clear();
                Menu();

                break;

            case 3:

                Console.Clear();

                if (listaEstudiantes.Count <= 0)
                {
                    Console.WriteLine("Error: No existen estudiantes ");
                    Thread.Sleep(1500);
                    Console.Clear();
                    Menu();

                }
                Console.Clear();

                Console.Write("Ingrese el indice del estudiante sobre el que desea operar: ");

                int indiceEstudiante;

                while (!int.TryParse(Console.ReadLine(), out indiceEstudiante) || indiceEstudiante < 0 || indiceEstudiante > listaEstudiantes.Count)
                {

                    Console.Clear();
                    Console.Write($"Error: Ingrese un indice valido ");
                    Console.Clear();

                }

                int indiceCalificacion;


                Console.WriteLine($"Ingrese el indice de la calificacion a eliminar para el estudiante: {listaEstudiantes[indiceEstudiante].MostrarNombre()} ");

                while (!int.TryParse(Console.ReadLine(), out indiceCalificacion) || indiceCalificacion < 0 || indiceCalificacion > listaEstudiantes[indiceEstudiante].Calificaciones.Count)
                {
                    Console.Clear();
                    Console.Write("Error: Ingrese un indice validio ");
                    Console.Clear();

                }

                Console.WriteLine($"Datos a eliminar del estudiante: {listaEstudiantes[indiceEstudiante].MostrarNombre()} \n Calificacion: {listaEstudiantes[indiceEstudiante].Calificaciones[indiceCalificacion]}");

                if (listaEstudiantes[indiceEstudiante].EliminarCalificacion(indiceCalificacion))
                {
                    Console.WriteLine("Calificacion eliminada con exito");
                    Thread.Sleep(4000);
                    Console.Clear();
                    Menu();
                }
                else
                {
                    Console.WriteLine("No se pudo eliminar la calificacion");
                    Thread.Sleep(4000);
                    Console.Clear();
                    Menu();
                }
                break;

            case 4:

                if (listaEstudiantes.Count <= 0)
                {
                    Console.WriteLine("No hay estudiantes para mostrar");
                    Thread.Sleep(1000);
                    Console.Clear();
                    Console.WriteLine("Regresando...");
                    Thread.Sleep(1000);
                    Console.Clear();
                    Menu();
                }

                Console.Clear();

                for (int i = 0; i < listaEstudiantes.Count; i++)
                {


                    Console.WriteLine($"{listaEstudiantes[i].MostrarInforamacion()} \n ");

                }

                Thread.Sleep(5000);
                Console.Clear();
                Menu();
                break;

            case 5:

                Console.Clear();
                Console.WriteLine("Saliendo del programa...");

                break;

            default:

                Console.WriteLine("Ingrese una opcion valida");
                Console.Clear();
                Menu();
                break;

        }

    }
    


    public string MostrarInforamacion()
    {
        return $"Estudiante: {Nombre} \n Promedio: {Promedio} \n Calificaciones: {string.Join(", ", Calificaciones)}";
    }

    public string MostrarNombre()
    {
        return Nombre;
        
    }

    public void AgregarCalificaciones(double calificaciones)
    {
        Calificaciones.Add(calificaciones);

    }
    public  double Promedio
    {
        get
        {
            if (Calificaciones.Count == 0)
            {
                return 0;
            }
          
          
            return Calificaciones.Average();
        }
    }
    public  bool EliminarCalificacion(int indice)
    {
        if (indice >= 0 && indice <= Calificaciones.Count)
        {
            Calificaciones.RemoveAt(indice);
            return true;
        }
        return false;
    }


    public static string Nombrevalido(string nombre)
    {


        while (string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit) || listaEstudiantes.Any(v => v.Nombre.ToLower() == nombre.ToLower()))
        {
            Console.Clear();
            if (string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit))
            {
                Console.Write("Error: Ingrese un nombre valido para {0} ", nombre);
                nombre = Console.ReadLine()!;
            }
            else
            {

                Console.Write($"Error: El nombre ya existe ");
            }

            nombre = Console.ReadLine()!;

        }

        return nombre.ToLower();
}
    public static void CrearEstudiantes(int numeroRegistros)
    {


        for (int i = 0; i < numeroRegistros; i++)
        {

            Console.Clear();
            Console.Write($"Ingrese el nombre del estudiante {i + 1}: ");
            string? nombre = Console.ReadLine()!.ToLower();

            nombre = Nombrevalido(nombre!);
            
            listaEstudiantes.Add(new Estudiantes(nombre!.ToLower()));

        }

    }
}