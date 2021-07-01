using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    public class TokenProvider
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }

    public class InitialApplicationState
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
