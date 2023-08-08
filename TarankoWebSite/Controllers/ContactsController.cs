using Microsoft.AspNetCore.Mvc;

namespace TarankoWebSite.Controllers
{
    public class ContactsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
