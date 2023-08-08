using Microsoft.AspNetCore.Mvc;

namespace TarankoWebSite.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
