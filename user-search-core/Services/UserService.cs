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

            if (!this.IsEmailUnique(user.Email))
            {
                return false;
            }

            if (!Validators.IsValidPhone(user.Email))
            {
                return false;
            }

            userRepository.AddUser(user);

            return true;
        }

        public bool IsEmailUnique(string email)
        {
            return this.userRepository.IsEmailUnique(email);
        }

        public IEnumerable<User> QueryUsers(string searchText, bool includeAllFields)
        {
            if (!includeAllFields)
            {
                // With more time I would have implemented data shapping on the API
                return this.userRepository.QueryUsers(searchText).Select(u => new User(u.FirstName, u.LastName, string.Empty, string.Empty, string.Empty));
            }

            return this.userRepository.QueryUsers(searchText);
        }
    }
}
