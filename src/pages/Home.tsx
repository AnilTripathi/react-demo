import EmployeeList from "../components/EmployeeList";

const Home = () => {
    return (
        <>
            <h1 className="text-center mb-4">Employee Management System</h1>
            <div className="card p-4 shadow-sm">
                <EmployeeList />
            </div>
        </>
    );
  };
  
  export default Home;
  