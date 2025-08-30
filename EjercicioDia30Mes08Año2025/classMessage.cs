class classMessage
{


    public static void Message(string message, int waitingTime)
    {
        Console.Clear();
        Console.WriteLine(message);
        Thread.Sleep(waitingTime);



    }
    
}