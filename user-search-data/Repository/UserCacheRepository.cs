﻿using CsvHelper;
using System;
using System.Collections.Generic;
using System.Formats.Asn1;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using user_search_data.Models;

namespace user_search_data.Repository
{
    public class UserCacheRepository : IUserRepository
    {
        private List<User> users;
        public UserCacheRepository()
        {
            using (var reader = new StreamReader(@".\Data\InterviewTestData.csv"))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                this.users = csv.GetRecords<User>().ToList();
            }
        }
        public void AddUser(User user)
        {
            users.Add(user);
        }

        public IEnumerable<User> QueryUsers(string searchText)
        {
            return users.Where(u => u.FirstName.Contains(searchText, StringComparison.InvariantCultureIgnoreCase) || u.LastName.Contains(searchText, StringComparison.InvariantCultureIgnoreCase));
        }
    }
}