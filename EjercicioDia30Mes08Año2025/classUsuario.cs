class Usuarios
{

    //campos de la clase usuario
    public string Nombre { get; set; }

    public static List<Usuarios> usuarios = new List<Usuarios>();
    public string Email { get; set; }

    private bool EstadoMenbresia { get; set; }

    //public List<Reservas> HistorialReservas { get; set; }


    //constructor de la clase usuario
    public Usuarios(string nom, string email, int password)
    {

        Nombre = nom;

        Email = email;

        EstadoMenbresia = true;

        //HistorialReservas = new list<Reservas>();
    }

    // métodos de la clase usuario

    //metodo para agregar usuarios
    public static void AgregarUsuarios()
    {

        classMessage.Information($"Ingrese un nombre: ", ConsoleColor.DarkGreen);
        string nombre = Console.ReadLine()!;
        nombre = NombreValido(nombre);

        classMessage.Information($"Ingrese un email: ", ConsoleColor.DarkGreen);
        string email = Console.ReadLine()!;
        while (!EmailValido(email))
        {
            classMessage.Message($"Error: Ingrese un email valido", 2000, ConsoleColor.Red);
            email = Console.ReadLine()!;
        }

        classMessage.Information($"Ingrese una password: ", ConsoleColor.DarkGreen);
        int password = Convert.ToInt32(Console.ReadLine());
        password = PassswordValido(password);

        usuarios.Add(new Usuarios(nombre, email, password));

    }
    //metodo para eliminar usuarios

    public static void EliminarUsuario(string nombre)
    {

        nombre = NombreValido(nombre);


    }

    // metodo para mostrar usuarios

    public static void MostrarUsuarios()
    {

        Console.Clear();
        if (usuarios.Count > 0)
        {
            foreach (var usuario in usuarios)
            {
                Console.ForegroundColor = ConsoleColor.DarkGreen;
                var estado = usuario.EstadoMenbresia ? "Activo" : "No activo";
                Console.WriteLine($"Nombre: {usuario.Nombre} \n Email: {usuario.Email} \n Estado de membresia: {estado}");
                Console.ResetColor();
            }
        }
        else
        {
            classMessage.Message("Error: No existen usuarios", 2000, ConsoleColor.Red);
            Gestion.Menu();
        }


    }

    //validacion de los datos de entrada 
    public static bool EmailValido(string email)
    {

        while (!email.Contains("@") || !email.Contains(".")
        || usuarios.Any(e => e.Email.ToLower() == email.ToLower()))
        {

            if (!email.Contains("@") || !email.Contains("."))
            {
                classMessage.Message($"Error: Email invalido {email} ", 2000, ConsoleColor.Red);
                return false;
            }
            else
            {

                classMessage.Message($"Error: El email {email} ya se encuentra registrado ", 2000, ConsoleColor.Red);
                return false;
            }


        }

        return true;


    }

    // Metodo para validar si el nombre existe
    public static string NombreValido(string nombre)
    {

        while (!string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit) ||
         usuarios.Any(e => e.Nombre.ToLower() == nombre.ToLower()))
        {

            Console.Clear();

            if (!string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit))
            {

                classMessage.Message("Error: Nombre invalido", 2000, ConsoleColor.Red);


            }
            else
            {
                classMessage.Message("Error: El nombre ya existe", 2000, ConsoleColor.Red);
            }

            nombre = Console.ReadLine()!;

        }
        return nombre.ToLower();
    }


    //metodo para validar que el usuario ingreso un password valido
    public static int PassswordValido(int password)
    {
        while (!int.TryParse(Console.ReadLine(), out int passsword) || passsword.ToString().Length < 8)
        {
            classMessage.Message($"Error: Passsword valido {passsword}", 2000, ConsoleColor.Red);

        }

        return password;

    }

    //verificar si el usuario existe


    // public bool ExisteUsuario(string nombre)
    // {
        
    // }
 
}