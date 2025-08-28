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

    public static List<double> Calificaciones { get; set; }


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
            Console.Write("Ingrese una accion valida");
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
                    Console.Write("Error: Ingrese un numero valido");
                    Console.ReadLine();
                }

                CrearEstudiantes(numeroRegistros);
                Console.Clear();
                Console.WriteLine("Estudiantes agregados con exito");
             Console.WriteLine(listaEstudiantes[1].Nombre);

                Thread.Sleep(3000);
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
                            Console.WriteLine("Ingrese un numero valido");
                            Console.ReadLine();
                        }

                        CrearEstudiantes(num);

                        Console.Clear();
                        Menu();
                    

                }

                Console.WriteLine("Cuantas calificaciones desea agregar por estudiante? ");
                int numCalificaciones = 0;

                for (int i = 0; i < listaEstudiantes.Count; i++)
                {

                    for (int j = 0; j < numCalificaciones ; i++)
                    {
                        Console.WriteLine($"Ingrese la calificacion {j + 1} \n Para el estudiante {listaEstudiantes[i].Nombre}");
                        double calificacion;

                        while (!double.TryParse(Console.ReadLine(), out calificacion) || calificacion <= 0)
                        {
                            Console.WriteLine("Ingrese una calificacion valida");
                            Console.ReadLine();
                        }

                        AgregarCalificaciones(calificacion);
                    }

                 }

                break;

            case 3:
                if (Calificaciones.Count == 0 || listaEstudiantes.Count == 0)
                {
                    Console.WriteLine("No hay califaciones  o estudiantes agregadoss ");
                    Console.Clear();
                    Menu();

                }
            Console.Clear();

              Console.WriteLine("Ingrese el indice de la calificacion a eliminar");

                int indice;

                while (!int.TryParse(Console.ReadLine(), out indice))
                {
                    Console.WriteLine("Ingrese un indice valido");
                    Console.ReadLine();
                }

                if (EliminarCalificacion(indice))
                {
                    Console.WriteLine("Calificacion eliminada con exito");
                    Console.Clear();
                    Menu();
                }
                else
                {
                    Console.WriteLine("No se pudo eliminar la calificacion");
                    Console.Clear();
                    Menu();
                }

                break;

            case 4:

                if (listaEstudiantes.Count <= 0 || Calificaciones.Count <= 0)
                {
                    Console.WriteLine("No hay estudiantes o califaciones para mostrar");
                    Console.Clear();
                    Menu();
                }

             



                break;

            default:

                Console.WriteLine("Ingrese una opcion valida");
                Console.Clear();
                Menu();
                break;

        }



    }

    public  void MostrarInforamacion()
    {
        Console.WriteLine($"Estudiante: {Nombre}  \n Promedio: {Promedio:f2} \n Calificaciones: {string.Join(", ", Calificaciones)}");
    }

    public static void AgregarCalificaciones(double calificaciones)
    {
        Calificaciones.Add(calificaciones);

    }
    public static double Promedio
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
    public static bool EliminarCalificacion(int indice)
    {
        if (indice >= 0 && indice <= Calificaciones.Count)
        {
            Calificaciones.RemoveAt(indice);
            return true;
        }
        return false;
    }

    public static void CrearEstudiantes(int numeroRegistros)
    {


        for (int i = 0; i < numeroRegistros; i++)
        {
            Console.Write("Ingrese el nombre del estudiante: ", i + 1);
            string? nombre = Console.ReadLine();

            while (string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit))
            {
                Console.Write("Ingrese un nombre valido");
                nombre = Console.ReadLine();
            }

            listaEstudiantes.Add(new Estudiantes(nombre));

        }

    }
}