
class GestorReservas
{

    public static void CrearReservas(string nombre, string matricula, double costo, int dias)
    {

        var usuario = Usuarios.usuarios.FirstOrDefault(n => n.Nombre.ToLower() == nombre.ToLower());

        var vehiculo = Vehiculos.vehiculos.FirstOrDefault(v => v.Matricula.ToLower() == matricula.ToLower());

        costo = PagosReserva.CalculoPagoReserva(costo, vehiculo!.TipoVehiculo, dias);

        if (vehiculo.EstadoVehiculo == "R")
        {
            classMessage.Message($"Error: El vehiculo {vehiculo!.Marca} ({vehiculo.Matricula}) ya tiene una reserva activa ", 2000, ConsoleColor.Red);
            Gestion.Menu();
        }

        foreach (var r in Reservas.reservas)
        {
            if (r.Usuario == usuario && r.EstadoReserva == "R")
            {
                classMessage.Message($"Error: El usuario {usuario!.Nombre} ya tiene una reserva activa ", 2000, ConsoleColor.Red);
                Gestion.Menu();
            }

        }

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

        classMessage.Information($"Reserva creada: {usuario!.Nombre}  reservo {vehiculo.Marca} ({vehiculo.Matricula})", ConsoleColor.DarkGreen);


    }

    public static void DevolverVehiculo(string matricula)
    {
        while (!Vehiculos.ExisteVehiculo(matricula))
        {
            classMessage.Message($"El vehiculo {matricula} no existe ", 2000, ConsoleColor.Red);
            Gestion.Menu();
        }
        var vehiculo = Vehiculos.vehiculos.FirstOrDefault(v => v.Matricula.ToLower() == matricula.ToLower());
        var reserva = Reservas.reservas.FirstOrDefault(r => r.Vehiculo!.Matricula.ToLower() == matricula && r.EstadoReserva == "R");
        if (reserva == null)
        {
            classMessage.Message($"Error: El vehiculo {reserva!.Vehiculo!.Matricula}  marca {reserva!.Vehiculo!.Marca} no tiene ninguna reserva pendiente ", 2000, ConsoleColor.Red);
            Gestion.Menu();
        }

        reserva.EstadoReserva = "F";
        classMessage.Information($"Vehiculo: {reserva.Vehiculo!.Marca} {reserva.Vehiculo!.Matricula} devuelto. Reserva finalizada ", ConsoleColor.DarkGreen);
      


        
       
        

    }


    



}