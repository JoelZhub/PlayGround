// Crear un programa que solicite una lista de números al usuario y 
//luego muestre los números ordenados de menor a mayor sin usar métodos de ordenamiento incorporados.

int num;

while (!int.tryparse(Console.ReadLine(), out num))
{
    System.Console.WriteLine("Ingrese un numero valido");
    Console.ReadLine();
}


int[] arrays = new int[num];

for (int i = 0; i <  arrays.lenght ; i++)
{
    
}