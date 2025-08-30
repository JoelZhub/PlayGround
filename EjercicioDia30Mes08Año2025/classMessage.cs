class classMessage
{
    public static void Message(string message, int waitingTime, ConsoleColor consoleColor)
    {
        Console.Clear();
        Console.ForegroundColor = consoleColor;
        Console.Write(message);
        Console.ResetColor();
        Thread.Sleep(waitingTime);
        Console.Clear();
    }
    public static void Information(string message, ConsoleColor consoleColor)
    {
        Console.Clear();
        Console.ForegroundColor = consoleColor;
        Console.Write(message);
        Console.ResetColor();
          
    }
    
}