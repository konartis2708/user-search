using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using user_search_data.Models;

namespace user_search_data.Repository
{
    public interface IUserRepository
    {
        public IEnumerable<User> QueryUsers(string searchText);

        public void AddUser(User user);

        bool IsEmailUnique(string email);
    }
}
