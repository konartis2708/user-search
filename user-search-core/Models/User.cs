using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace user_search_data.Models
{
    public class User
    {
        public User()
        {
            FirstName = string.Empty;
            LastName = string.Empty;
            JobTitle = string.Empty;
            Phone = string.Empty;
            Email = string.Empty;
        }

        public User(string firstName, string lastName, string jobTitle, string phone, string email)
        {
            FirstName = firstName;
            LastName = lastName;
            JobTitle = jobTitle;
            Phone = phone;
            Email = email;
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string JobTitle { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }
    }
}
