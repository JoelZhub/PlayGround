class Reservas
{
    //campos de la clase

    public Usuarios? Usuario { get; set; }

    public Vehiculos? Vehiculo { get; set; }

    public string? EstadoReserva { get; set; }

    public DateTime FechaReserva { get; set; }

    public double CostoReserva { get; set; } = 0;

    public int TotalDeDiasDevolucionVehiculo { get; set; } = 0;

    public static List<Reservas> reservas { get; set; } = new List<Reservas>();


  
}