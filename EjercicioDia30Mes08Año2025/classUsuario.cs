class Usuarios
{

    //campos de la clase usuario
    public string Nombre { get; set; }

    public static list<Usuarios> Usuarios { get; set; }

    public string Email { get; set; }

    private bool EstadoMenbresia { get; set; }

    public list<Reservas> HistorialReservas { get; set; }
    

    //constructor de la clase usuario
    public Usuarios(string nom, string email)
    {

        Nombre = nom;

        Email = email;

        EstadoMenbresia = true;

        Usuarios = new list<Usuarios>();

        HistorialReservas = new list<Reservas>();
    }

    // métodos de la clase usuario

   //metodo para agregar usuarios
    public void AgregarUsuarios(string nombre, string email)
    {






    }


    //validacion de los datos de entrada 
    public bool EmailValido(string email)
    {

        while (!email.Contains("@") || !email.Contains(".")
        || Usuarios.Any(e => e.Email.ToLower() == email.ToLower()))
        {

            if (!email.Contains("@") || !email.Contains("."))
            {
                classMessage.Message($"Error: Email invalido {email} ", 2000, ConsoleColor.Red);
                return false;
            } 
            else {

                classMessage.Message($"Error: El email {email} ya se encuentra registrado ", 2000, ConsoleColor.Red);
                 return false;
            }
        }

        return true;


    }
// Metodo para validar si el nombre existe
    public string NombreValido(string nombre)
    {

        while (!string.IsNullOrEmpty(nombre) || nombre.Any(char.IsDigit) ||
         Usuarios.Any(e => e.Nombre.ToLower() == nombre.ToLower()))
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

            nombre = Console.ReadLine();

        }
        return nombre.ToLower();


    }
 
}