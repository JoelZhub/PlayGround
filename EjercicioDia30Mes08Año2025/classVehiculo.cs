class Vehiculos
{


   public string Marca { get; set; }

    public string TipoVehiculo { get; set; }

    public string Matricula { get; set; }

    public string EstadoVehiculo { get; set; }

    public string UbicacionActual { get; set; }

    public static List<Vehiculos> vehiculos = new List<Vehiculos>();
    public Vehiculos(string marca, string matricula,  string tipo, string ubicacion)
    {

        Marca = marca;

        TipoVehiculo = tipo;

        Matricula = matricula;

        UbicacionActual = ubicacion;

        EstadoVehiculo = "D";

    }



    //metodos de creacion, eliminacion, lectura y edicion

    public static void CrearVehiculo()
    {

        classMessage.Information("Ingrese la marca del vehiculo: ", ConsoleColor.DarkGreen);
        string marca = Console.ReadLine()!;
        marca = ValidarMarca(marca);

        classMessage.Information("Ingrese la matricula del vehiculo: ", ConsoleColor.DarkGreen);
        string matricula = Console.ReadLine()!;
        matricula = ValidarMatricula(matricula);

        classMessage.Information("Ingrese el tipo de vehiculo: ", ConsoleColor.DarkGreen);
        string tipo = Console.ReadLine()!;
        tipo = ValidarTipo(tipo);

        classMessage.Information("Ingrese la ubicacion actual del vehiculo: ", ConsoleColor.DarkGreen);
        string ubicacion = Console.ReadLine()!;

        vehiculos.Add(new Vehiculos(marca, matricula, tipo, ubicacion));
    }

    public static void EliminarVehiculo(string matricula)
    {
        matricula = ValidarMatricula(matricula);

        while (ExisteVehiculo(matricula))
        {
            classMessage.Message($"Error: No existe el vehiculo con la matricula {matricula} ", 2000, ConsoleColor.DarkGreen);
            Console.Write("Ingrese nuevamente otra matricula: ");
            matricula = Console.ReadLine()!;
        }

        classMessage.Information($"Advertencia: Esta por eliminar el vehiculo {matricula} ", ConsoleColor.DarkYellow);
        classMessage.Information("Presione S para eliminar o N para cancelar ", ConsoleColor.DarkGreen);

        var opt = Console.ReadKey();

        while (opt.Key != ConsoleKey.S && opt.Key != ConsoleKey.N)
        {
            classMessage.Message("Error: Presione una tecla valida: ", 2000, ConsoleColor.Red);
            Console.WriteLine("Intente de nuevo");
            opt = Console.ReadKey();

        }
        if (opt.Key == ConsoleKey.N)
        {
            Console.Clear();
            Gestion.Menu();
        }
        vehiculos.RemoveAll(e => e.Matricula == matricula);
        classMessage.Message("Vehiculo eliminado con exito ", 2000, ConsoleColor.DarkGreen);

        Gestion.Menu();

    }

 //metodos para mostrar informacion de los vehiculos
    public static void MostrarVehiculosTipo(string tipo)
    {

        Console.Clear();
        var vehiculosTipo = vehiculos.Where(e => e.TipoVehiculo.ToLower() == tipo.ToLower()).ToList();

        if (vehiculosTipo.Count > 0)
        {

            foreach (var vehiculo in vehiculosTipo)
            {

                Console.ForegroundColor = ConsoleColor.DarkGreen;
                Console.WriteLine($"Marca: {vehiculo.Marca} \n Matricula: {vehiculo.Matricula}  \n Tipo de vehiculo: {vehiculo.TipoVehiculo}  " +
                $"\n Ubicacion del vehiculo: {vehiculo.UbicacionActual} \n Estado del vehiculo: {vehiculo.EstadoVehiculo} ");
                Console.ResetColor();

            }
        }
        else
        {
            classMessage.Message($"Error: No existen vehiculos", 2000, ConsoleColor.Red);
            Gestion.Menu();
        }


    }

     public static void MostrarVehiculosUbicacion(string ubicacion)
    {
        
        Console.Clear();

        var vehiculosTipo = vehiculos.Where(e => e.UbicacionActual.ToLower() == ubicacion && e.EstadoVehiculo != "R").ToList();
        
        foreach (var vehiculo in vehiculosTipo)
        {
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.WriteLine($"Marca: {vehiculo.Marca} \n Matricula: {vehiculo.Matricula} \n Tipo de vehiculo: {vehiculo.TipoVehiculo}" +
            $" \n Ubicacion del vehiculo: {vehiculo.UbicacionActual} \n Estado del vehiculo: {vehiculo.EstadoVehiculo} ");
            Console.ResetColor();

        }


    }
    
    //metodos que se encargan de validar los datos ingresados por el usuario

    public static string ValidarMarca(string marca)
    {

        while (string.IsNullOrWhiteSpace(marca) || marca.Any(char.IsDigit))
        {
            classMessage.Information("Error: Ingrese una marca valida: ", ConsoleColor.Red);
            marca = Console.ReadLine()!;
        }
        return marca;

    }

    public  static string ValidarUbicacion(string ubicacion)
    {


        while (string.IsNullOrWhiteSpace(ubicacion) || ubicacion.Any(char.IsDigit))
        {
            classMessage.Message("Error: Ingrese una ubicacion valida", 2000, ConsoleColor.Red);
            ubicacion = Console.ReadLine()!;
        }
        return ubicacion;
    }

    public  static string ValidarMatricula(string matricula)
    {
        while (string.IsNullOrWhiteSpace(matricula) || !matricula.Any(char.IsDigit))
        {
            classMessage.Information("Error: Ingrese una matricula valida: ", ConsoleColor.Red);
            matricula = Console.ReadLine()!;
        }

        return matricula;
    }

    public static string ValidarTipo(string tipo)
    {
        tipo = tipo.ToLower();

        while (string.IsNullOrWhiteSpace(tipo) || tipo.Any(char.IsDigit)
        || (tipo != "auto" && tipo != "motor" && tipo != "bicicleta"))
        {

            classMessage.Information("Error: Ingrese un tipo de vehiculo valido: ", ConsoleColor.Red);
            tipo = Console.ReadLine()!;

        }
        return tipo;

    }


    public static bool ExisteVehiculo(string matricula)
    {
        if (vehiculos.Any(e => e.Matricula.ToLower() == matricula.ToLower()))  return true;
        return false;
    }

    
}