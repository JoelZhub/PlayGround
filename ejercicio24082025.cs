// Crear un programa que solicite una lista de números al usuario y 
//luego muestre los números ordenados de menor a mayor sin usar métodos de ordenamiento incorporados.
int num;
while (!int.tryparse(Console.ReadLine(), out num))
{
    System.Console.WriteLine("Ingrese un numero valido");
    Console.ReadLine();
}

int[] arrays = new int[num];
int numIngresado;
int numMayor = 0;

for (int i = 0; i < arrays.lenght; i++)
{

    System.Console.WriteLine($"Ingrese el numero {i + 1} ");
    while (!int.tryparse(Console.ReadLine(), out numIngresado))
    {
        System.Console.WriteLine("Ingrese un numero valido");
        Console.ReadLine();
    }

    arrays[i] = numIngresado;

    if (arrays[i] > numMayor) numMayor = arrays[i];


}



