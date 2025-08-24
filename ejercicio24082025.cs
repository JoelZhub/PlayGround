// Crear un programa que solicite una lista de números al usuario y 
//luego muestre los números ordenados de menor a mayor sin usar métodos de ordenamiento incorporados.
int num;
while (!int.TryParse(Console.ReadLine(), out num))
{
    System.Console.WriteLine("Ingrese un numero valido");
    Console.ReadLine();
}

int[] arrays = new int[num];
int numIngresado;
for (int i = 0; i < arrays.Lenght; i++)
{

    System.Console.WriteLine($"Ingrese el numero {i + 1} ");
    while (!int.TryParse(Console.ReadLine(), out numIngresado))
    {
        System.Console.WriteLine("Ingrese un numero valido");
        Console.ReadLine();
    }

    arrays[i] = numIngresado;
    Console.Clear();



}

for (int j = 0; j < arrays.Length-1; j++)
{
 int temp;
  
    if (arrays[j] > arrays[j + 1])
    {
        temp = arrays[j];
        arrays[j] = arrays[j + 1];
        arrays[j + 1] = temp;
    }

    }

foreach (var item in arrays)
{

    System.Console.WriteLine($"\n{item}");
}