import './App.css';
import Navbar from './components/Navbar';
import TaskCard from './components/TaskCard';
import VisitorList from './components/VisitorList';


function App() {
  return (
    <div className="App main">
      <Navbar></Navbar>

      <div className="p-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
          <div className="col mb-4">
            <TaskCard title="Visitor" imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="col mb-4">
            <TaskCard title="Vehicle Management" imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="col mb-4">
            <TaskCard title="Material inward" imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="col mb-4">
            <TaskCard title="Material outward" imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="col mb-4">
            <TaskCard title="Key Management" imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>

      <div className="ps-5">
        <h4>Recent Activity</h4>
        <p>Visitor Management</p>
        <VisitorList />
      </div>

    </div>
  );
}

export default App;
