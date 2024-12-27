﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using SimpleShopper.Server.Models;

namespace SimpleShopper.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        AccountRepository _accountRepository;
        public AccountController(AccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<UserLogInResult> Login(LoginRequest request)
        {
            UserLogInResult result =new UserLogInResult();
            LoginRequest logReq = new LoginRequest() { Email = request.Email, Password=request.Password};
            var token = await _accountRepository.GetJWTToken(logReq,"A");
            if (!string.IsNullOrEmpty(token))
            {
                var user = new UserModel { Enabled = true, Id=1, Name="Anisuzzaman", UserName="anis" };
                result.Token = token;
                result.User = user;

            }
            return result;
        }
    }
}
