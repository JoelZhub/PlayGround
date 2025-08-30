class Usuarios
{
    public string Nombre { get; set; }

    public static list<Usuarios> Usuarios { get; set; }

    public string Email { get; set; }

    private bool EstadoMenbresia { get; set; }

    public list<Reservas> HistorialReservas { get; set; }

    public Usuarios(string nom, string email)
    {

        Nombre = nom;

        Email = email;

        EstadoMenbresia = true;

        Usuarios = new list<Usuarios>();

        HistorialReservas = new list<Reservas>();
    }


    public void AgregarUsuarios(string nombre, string email)
    {




    }

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