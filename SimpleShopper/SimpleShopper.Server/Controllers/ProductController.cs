using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimpleShopper.Server.Models;

namespace SimpleShopper.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowSpecificOrigin")]
    public class ProductController : ControllerBase
    {
        ShopperDbContext _context;
        public ProductController(ShopperDbContext context)
        {
           _context = context;
        }

        [HttpGet("GetProducts")]
        public IEnumerable<Product> GetProducts()
        {
            return _context.Products;
        }
    }
}
