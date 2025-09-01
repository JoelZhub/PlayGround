
class GestorReservas
{

    public static void CrearReservas(Usuarios usuario, string matricula, double costo, int dias)
    {

        classMessage.Information("Ingrese el nombre del usuario a realizar la reserva: ", ConsoleColor.DarkGreen);
        string user = Console.ReadLine()!;

        while (!Usuarios.ExisteUsuario(user))
        {

            classMessage.Message($"Error: El usuario {user} no existe ", 2000, ConsoleColor.DarkGreen);
            Gestion.Menu();

        }
        classMessage.Information("Ingrese la matricula del vehiculo a reservar: ", ConsoleColor.DarkGreen);
        string matri = Console.ReadLine()!;

        while (!Vehiculos.ExisteVehiculo(matri))
        {
            classMessage.Message($"Error: El vehiculo {matri} no existe ", 2000, ConsoleColor.DarkGreen);
            Gestion.Menu();
        }

        var vehiculo = Vehiculos.vehiculos.FirstOrDefault(v => v.Matricula.ToLower() == matricula.ToLower());

        classMessage.Information("Ingrese el costo de la reserva: ", ConsoleColor.DarkGreen);
        costo = 0;

        while (!double.TryParse(Console.ReadLine(), out costo) || costo <= 0)
        {
            classMessage.Message($"Error: Ingrese un costo valido {costo} ", 2000, ConsoleColor.DarkGreen);
            Gestion.Menu();
        }

        classMessage.Information("Ingrse el total de dias a reservar: ", ConsoleColor.DarkGreen);
        dias = 0;

        while (!int.TryParse(Console.ReadLine(), out dias) || dias <= 0)
        {
            classMessage.Message($"Error: Ingrese un dia valido {dias} ", 2000, ConsoleColor.DarkGreen);
            Gestion.Menu();
        }

        costo = PagosReserva.CalculoPagoReserva(costo, vehiculo.TipoVehiculo, dias);

        var nuevaReserva = new Reservas
        {
            Usuario = usuario,
            Vehiculo = vehiculo,
            EstadoReserva = "R",
            FechaReserva = DateTime.Now,
            CostoReserva = costo,
            TotalDeDiasDevolucionVehiculo = dias

        };

        Reservas.reservas.Add(nuevaReserva);

        classMessage.Information($"Reserva creada: {usuario.Nombre}  reservo {vehiculo.Marca} ({vehiculo.Matricula})", ConsoleColor.DarkGreen);


    }


    



}