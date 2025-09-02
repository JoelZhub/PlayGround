class Usuarios
{

    //campos de la clase usuario
    public string Nombre { get; set; }

    public static List<Usuarios> usuarios = new List<Usuarios>();
    public string Email { get; set; }

    private bool EstadoMenbresia { get; set; }

    //constructor de la clase usuario
    public Usuarios(string nom, string email)
    {

        Nombre = nom;
        Email = email;
        EstadoMenbresia = true;
    }

  
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
            classMessage.Information($"Intente de nuevo: ", ConsoleColor.Red);
           
        }
        nombre = nombre.ToLower();
        usuarios.Add(new Usuarios(nombre, email));

    }
    //metodo para eliminar usuarios

    public static void EliminarUsuario(string nombre)
    {

        while (string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit))
        {

            classMessage.Message($"Error: Ingrese un nombre valido", 2000, ConsoleColor.Red);
            nombre = Console.ReadLine()!;
            
        }
        var usuarioExiste = ExisteUsuario(nombre);

        while (!usuarioExiste)
        {
            classMessage.Information($"El usuario {nombre} no se encuentra registrado ",  ConsoleColor.Red);
            nombre = Console.ReadLine()!;
            usuarioExiste = ExisteUsuario(nombre);  
           
           
        }
        classMessage.Information($"Advertencia: Esta por eliminar al usuario " +
         $"{nombre} (Presione S para aceptar, cualquier otra tecla  para regresar) ", ConsoleColor.DarkYellow);

        var key = Console.ReadKey();

        while (key.Key != ConsoleKey.S) Gestion.Menu();

        usuarios.RemoveAll(n => n.Nombre.ToLower() == nombre.ToLower());

        classMessage.Message("Usuario eliminado con exito ", 2000, ConsoleColor.DarkGreen);
      
        Gestion.Menu();
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
                Gestion.Menu();
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

        while (string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit) ||
         usuarios.Any(e => e.Nombre.ToLower() == nombre.ToLower()))
        {

            Console.Clear();

            if (string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit))
            {
                classMessage.Message("Error: Nombre invalido ", 2000, ConsoleColor.Red);
            }
            else
            {
                classMessage.Message("Error: El nombre ya existe", 2000, ConsoleColor.Red);
            }

            classMessage.Information("Intente de nuevo: ", ConsoleColor.DarkGreen);
            nombre = Console.ReadLine()!;

        }
        return nombre.ToLower();
    }


    //verificar si el usuario existe
    public static bool ExisteUsuario(string nombre)
    {

        if (usuarios.Any(e => e.Nombre.ToLower() == nombre.ToLower())) return true;
        return false;
        
    }
 
}