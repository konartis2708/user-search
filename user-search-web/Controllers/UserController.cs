using Microsoft.AspNetCore.Mvc;
using user_search_data.Models;
using user_search_data.Services;

namespace user_search_web.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService userService;
    public UserController(IUserService userService)
    {
        this.userService = userService;
    }

    [HttpGet]
    public IEnumerable<User> Get(string searchText)
    {
        return this.userService.QueryUsers(searchText);
    }

    [HttpPost]
    public IActionResult AddUser(User user)
    {
        if (!this.userService.AddUser(user))
        {
            return BadRequest();
        }

        return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status201Created);
    }
}
