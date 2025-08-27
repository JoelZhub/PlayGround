/*
Ejercicio 26/08/2025

Gestión de Estudiantes y Notas
Diseña un programa que cree estudiantes con nombre y lista de calificaciones. 
Calcula su promedio usando métodos y propiedades. Permite agregar y eliminar calificaciones.
 Utiliza listas genéricas y muestra los estudiantes ordenados por promedio usando lambda.

*/


class Estudiantes
{

    public string Nombre { get; set; } 

   public List<double> Calificaciones  { get; set; }


    public Estudiantes(string nombre)
    {
        Nombre = nombre;
        Calificaciones = new List<double>();
    }

    public void Menu()
    {
        Console.WriteLine("Ingrese lo que desea realizar\n  "  +
        "1- Agregar Estudiantes \n  2- Agregar calificaciones \n 3- Calcular Promedio \n " +
         "4 - Eliminar Calificacion \n 5- Mostrar participantes y calificaciones  \n 6- Salir" );
        int opt;

        while (!int.TryParse(Console.ReadLine(), out opt) || opt <= 0 || opt > 6)
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
                Thread.Sleep(3000);
                Console.Clear();
                Menu();

                break;

            case 2:

                

                break;

            case 3:

                break;

            case 4:

                break;

            default:
            
            Console.WriteLine("Ingrese una opcion valida");
            Console.Clear();
            Menu();
                break;
                
    }
        
        

    }

    public void AgregarCalificaciones(double calificaciones)
    {
        Calificaciones.Add(calificaciones);

    }
    public double Promedio
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
    public bool EliminarCalificacion(int indice)
    {
        if (indice >= 0 && indice <= Calificaciones.Count)
        {
            Calificaciones.RemoveAt(indice);
           return true;
        }
        return false;
    }

   public  void CrearEstudiantes(int numeroRegistros)
    {
        List<Estudiantes> listaEstudiantes = new List<Estudiantes>();

        for (int i = 0; i < numeroRegistros; i++)
        {
            Console.Write("Ingrese el nombre del estudiante", i + 1);
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