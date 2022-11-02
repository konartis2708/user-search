using Microsoft.AspNetCore.Mvc;
using user_search_data.Models;
using user_search_data.Services;

namespace user_search_web.Controllers;

[ApiController]
[Route("[controller]")]
public class EmailController : ControllerBase
{
    private readonly IUserService userService;
    public EmailController(IUserService userService)
    {
        this.userService = userService;
    }

    [HttpGet]
    public bool ValidateEmail([FromQuery]string email)
    {
        return this.userService.IsEmailUnique(email);
    }
}
