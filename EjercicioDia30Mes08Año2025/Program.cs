/*
Diseña un programa que gestione un sistema de vehículos compartidos,
donde los usuarios pueden registrarse, reservar vehículos, 
devolverlos y consultar disponibilidad. Se busca simular la
operación de una plataforma de car sharing con reglas de negocio reales.
*/
Gestion.Menu();

class Gestion
{


    public static void Menu()
    {
        Console.Clear();

        classMessage.Information("Ingrese la accion a realizar \n  " +
       " 1- Registrar usuarios y vehiculos \n  2- Reservar vehiculos \n " +
        " 3- Devolver vehiculo \n  4- Mostrar vehiculos \n 5- Salir ", ConsoleColor.DarkGreen);

        int opt = Convert.ToInt32(Console.ReadLine());

        OpcioneMenu(opt);
    }

    public static void OpcioneMenu(int opt)
    {

        switch (opt)
        {
            case 1:

                classMessage.Information("Ingrese el numero de usuarios a registrar ", ConsoleColor.DarkGreen);
                int num = 0;

                while (!int.TryParse(Console.ReadLine(), out num) || num <= 0)
                {
                    classMessage.Message("Error: Ingrese un valor valido ", 2000, ConsoleColor.Red);

                }

                for (int i = 0; i < num; i++)
                {
                    Usuarios.AgregarUsuarios();
                }
                classMessage.Information("Ingrese el numero de vehiculos a registrar ", ConsoleColor.DarkGreen);
                int n = 0;

                while (!int.TryParse(Console.ReadLine(), out n) || n <= 0)
                {
                    classMessage.Message("Error: Ingrese un valor valido ", 2000, ConsoleColor.Red);

                }
                for (int i = 0; i < n; i++)
                {
                    Vehiculos.CrearVehiculo();
                }
                Menu();
                break;

            case 2:

                while (Usuarios.usuarios.Count() == 0 || Vehiculos.vehiculos.Count() == 0)
                {
                    classMessage.Message("Error: No existen usuarios o vehiculos ", 2000, ConsoleColor.Red);
                    Menu();

                }
                classMessage.Information("Ingrese el nombre del usuario:  ", ConsoleColor.DarkGreen);
                string nombre = Console.ReadLine()!;
                classMessage.Information("Ingrese la matricula del vehiculo a reservar:  ", ConsoleColor.DarkGreen);
                string v = Console.ReadLine()!;
                classMessage.Information("Ingrese el costo de la reserva:  ", ConsoleColor.DarkGreen);
                double costo = Convert.ToDouble(Console.ReadLine());
                classMessage.Information("Ingrese el total de dias de la reserva:  ", ConsoleColor.DarkGreen);
                int dias = Convert.ToInt32(Console.ReadLine());

                GestorReservas.CrearReservas(nombre, v, costo, dias);
                Menu();
                break;

            case 3:

                classMessage.Information("Ingrese la matricula del vehiculo a devolver: ", ConsoleColor.DarkGreen);
                string matricula = Console.ReadLine()!;
                GestorReservas.DevolverVehiculo(matricula);
                Menu();
                break;

            case 4:
                classMessage.Information($"Como quiere visualizar los vehiculos (T: Tipos / U: Ubicacion) ", ConsoleColor.DarkGreen);
                var key = Console.ReadKey();

                while (key.Key != ConsoleKey.T && key.Key != ConsoleKey.U)
                {
                    classMessage.Message("Error: Tecla invalida",2000, ConsoleColor.Red);
                    Menu();
                }

                if (key.Key == ConsoleKey.T)
                {
                    classMessage.Information("Ingrese el tipo de vehiculo: ", ConsoleColor.DarkGreen);
                    string tipo = Console.ReadLine()!;
                    Vehiculos.MostrarVehiculosTipo(tipo);

                }
                if (key.Key == ConsoleKey.U) {
                    classMessage.Information("Ingrese la ubicacion del vehiculo: ", ConsoleColor.DarkGreen);
                    string U = Console.ReadLine()!;
                    Vehiculos.MostrarVehiculosTipo(U); 
                }
                Menu();
                break;

            case 5:
                classMessage.Information("Saliendo....", ConsoleColor.Cyan);
                
                break;

            default:
                classMessage.Message("Error: Opcion fuera de rango", 2000, ConsoleColor.Red);
                break;
        }
        

    }

 
}