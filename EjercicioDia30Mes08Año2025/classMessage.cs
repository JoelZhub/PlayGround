class classMessage
{
    public static void Message(string message, int waitingTime, ConsoleColor consoleColor)
    {
        Console.Clear();
        ConsoleForegroundColor = consoleColor;
        Console.WriteLine(message);
        ConsoleResetColor();
        Thread.Sleep(waitingTime);
        Console.Clear();
    }
    
}