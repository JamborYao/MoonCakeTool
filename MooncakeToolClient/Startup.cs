using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MooncakeToolClient.Startup))]
namespace MooncakeToolClient
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
