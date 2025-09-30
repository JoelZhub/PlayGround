

public class AppDbContext : DbContext
{

    public DbSet<Cliente> clientes { get; set; }

    public DbSet<Produto> produtos { get; set; }

    public DbSet<Proevedores> proevedor {get; set;}

    public DbSet<Categoria> categorias { get; set; }    

    public DbSet<Almacen>   almacen { get; set; }

    public DbSet<ventas> ventas { get; set; }

    protected override void OnConfiguring(DbContextOptionBuilder dbContextOptionBuilder)
    {
        dbContextOptionBuilder.UseSqlServer(@"Server=localhost;Database=SistemaInventario;Trusted_Connection=True;TrustServerCertificate=True;");
    } 

}