class Reservas
{
 //campos de la clase
    public bool EstadoReserva { get; set; }

    public  List<Usuarios> usuariosReservas { get; set; }

    public  List<Vehiculos> vehiculosReservas { get; set; }

    public DateTime DateTime { get; set; }

    public double CostoReserva { get; set; } = 0;

    
//construtor 
    public Reservas(DateTime dateTime)
    {

        usuariosReservas = Usuarios.usuarios;

        vehiculosReservas = Vehiculos.vehiculos;

        EstadoReserva = true;


    }

  


}