using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using user_search_core.Utility;
using user_search_data.Models;
using user_search_data.Repository;
using user_search_data.Services;

namespace user_search_core.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;
        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public bool AddUser(User user)
        {
            if (!Validators.IsValidEmail(user.Email))
            {
                return false;
            }

            if (!Validators.IsValidEmail(user.Email))
            {
                return false;
            }

            userRepository.AddUser(user);

            return true;
        }

        public IEnumerable<User> QueryUsers(string searchText)
        {
            return this.userRepository.QueryUsers(searchText);
        }
    }
}
