using Microsoft.AspNetCore.Mvc;

namespace TarankoWebSite.Controllers
{
    public class ResumeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
