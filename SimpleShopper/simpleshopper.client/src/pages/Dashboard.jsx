import Sidebar from './Sidebar';
import SecureHeader from './SecureHeader';
import { useAuth } from "../AuthProvider";
function Dashboard() {
    const auth = useAuth();
  return (
      <>
         
          <div className="row sidebar-b">
              <div className="col-md-2 col-sm-3 sidebar-bg sidebar-b">
                  <nav className="d-none d-md-block bg-light sidebar sidebar-bg">
                      <div className="sidebar-sticky">
                          <Sidebar />
                      </div>
                  </nav>
                 
              </div>
              <div className="col-md-10 col-sm-3">
                  <SecureHeader />
                  <h1>Dashboard</h1>
                  <h3>Welcome! {auth.user?.username}</h3>
              </div>
          </div>
      </>
  );
}

export default Dashboard;