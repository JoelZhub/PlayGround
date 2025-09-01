class PagosReserva
{
    public  static double CostoReserva { get; set; }

    public static double tarifaHora { get; set; }

    public static  int TotalHoras { get; set; }

    public  static string? tipoAuto { get; set; }

    public  static double CalculoPagoReserva(double costoReserva, string auto, int totalDias)
    {

        tarifaHora = AsignarTarifaPorAuto(auto);
        CostoReserva = costoReserva;
        TotalHoras = totalDias;
        return  CostoReserva = TotalHoras * tarifaHora;
    }

    public static  double AsignarTarifaPorAuto(string auto)
    {

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

 

}