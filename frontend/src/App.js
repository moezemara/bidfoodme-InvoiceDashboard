import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

import RegisterBranchForm from './Forms/RegisterBranch/Form';
import RequestCreditForm from './Forms/RequestCredit/Form';
import { RegisterBranchProvider } from './Forms/RegisterBranch/Contexts/RegisterBranchContext';
import { RequestCreditProvider } from './Forms/RequestCredit/Contexts/RequestCreditContext';


function App() {
// create router to each component


  const RegisterBranchFormPage = () => {
    return (
      <RegisterBranchProvider>
        <RegisterBranchForm />
      </RegisterBranchProvider>
    )
  }

  const RequestCreditFormPage = () => {
    return (
      <RequestCreditProvider>
        <RequestCreditForm />
      </RequestCreditProvider>
    )
  }

  return (
    <Router>
        <Routes>
          <Route path="/register-branch" element={<RegisterBranchFormPage/>}/>
          <Route path="/request-credit" element={<RequestCreditFormPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;