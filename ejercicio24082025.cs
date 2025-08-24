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
for (int i = 0; i < arrays.lenght; i++)
{

    System.Console.WriteLine($"Ingrese el numero {i + 1} ");
    while (!int.tryparse(Console.ReadLine(), out numIngresado))
    {
        System.Console.WriteLine("Ingrese un numero valido");
        Console.ReadLine();
    }

    arrays[i] = numIngresado;

    for (int j = 1; j < arrays.lenght - 1; j++)
    {

        int temp = 0;

        if (arrays[i] > arrays[j])
        {
            arrays[i] = temp;
            arrays[i] = arrays[j];
            arrays[j] = temp;
        }
     
    }
}

foreach (var item in arrays)
{
    
    System.Console.WriteLine($"\n{item}");
}