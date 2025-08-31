class PagosReserva
{
    public  static double CostoReserva { get; set; }

    public static double tarifaHora { get; set; }

    public static  int TotalHoras { get; set; }

    public  static string? tipoAuto { get; set; }

    public  static double CalculoPagoReserva(double costoReserva, string auto, int totalHoras)
    {

        tarifaHora = AsignarTarifaPorAuto(auto);
        CostoReserva = costoReserva;
        TotalHoras = totalHoras;
        return  CostoReserva = totalHoras * tarifaHora;
    }

    public static  double AsignarTarifaPorAuto(string auto)
    {

        while (!ValidarExistencia(auto))
        {
            return 0;
        }

        switch (auto)
        {
            case "auto":
                tarifaHora = 700;
                break;

            case "bicicleta":
                tarifaHora = 200;
                break;

            case "motor":
                tarifaHora = 400;
                break;
        }

        return tarifaHora;
    }

    public static bool ValidarExistencia(string auto)
    {

        while (string.IsNullOrEmpty(auto) || auto.Any(char.IsDigit) && (auto != "auto" || auto != "bicicleta" || auto != "motor"))
        {
            classMessage.Message($"Error: Ingrese un vehiculo valido para realizar la reserva {auto} ", 2000, ConsoleColor.Red);
            return false;
        }
        return true;
        
    }
    

}