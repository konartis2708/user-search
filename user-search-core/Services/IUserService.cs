using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using user_search_data.Models;

namespace user_search_data.Services
{
    public interface IUserService
    {
        public IEnumerable<User> QueryUsers(string searchText, bool includeAllFields);

        public bool AddUser(User user);

        public bool IsEmailUnique(string email);
    }
}
