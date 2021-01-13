import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { NavBarComponent } from './components/navbar-component/navbar-component';
import { HomeComponent } from './components/home/home-component';
import { AboutMeComponent } from './components/about-me/about-me-component';
import { CodingProjectsComponent } from './components/coding-projects/coding-projects-component';
import { DSAPageComponent } from './components/coding-projects/project-page/springboot-react-projects/DSA-page-component';
import { ERSPageComponent } from './components/coding-projects/project-page/typescript-react-project/ers-project-page-component';
import { PaintFlooringCostCalculatorPageComponent } from './components/coding-projects/project-page/c-sharp-projects/PaintFloorindCostCalculator';
import { QueriesPageComponent } from './components/coding-projects/project-page/sql-projects-page/Queries-Page-Component';
import { ResearchLouisvillePageComponent } from './components/coding-projects/project-page/php-project-page-component/Research-Louisville-Page-Component';
import { CarRentalServicePageComponent } from './components/coding-projects/project-page/springboot-react-projects/car-rental-service-page-component';
import { StudentRegistrationPageComponent } from './components/coding-projects/project-page/c-sharp-projects/StudentRegistrationPageComponent';
import { PackageDeliveryApplicationpageComponent } from './components/coding-projects/project-page/c-sharp-projects/package-delivery-application-page-component';
import { EntityRelationshipDiagramPageComponent } from './components/coding-projects/project-page/sql-projects-page/entity-relationship-diagram-project-page-component';
import { PLSQLScriptsPageComponent } from './components/coding-projects/project-page/sql-projects-page/pl-sql-scripts-page-component';
import { DatabaseAdministrationPageComponent } from './components/coding-projects/project-page/sql-projects-page/database-administration-page-component';
import { ResumeComponent } from './components/Resume/resume-component.js';
import { RegistrationSystemPageComponent } from './components/coding-projects/project-page/php-project-page-component/registration-system-page-component';
import { PaintAndLaborCalculatorPHPPageComponent } from './components/coding-projects/project-page/php-project-page-component/paint-and-labor-calculator-php-page-component';
import { BookKeepingApplicationPageComponent } from './components/coding-projects/project-page/php-project-page-component/book-keeping-application-page-component';
import ContactForm from './components/contact-me/contact-me-component';
import { ToDoListPageComponent } from './components/coding-projects/project-page/reactjs-projects/todolist-page-component';
import { PokedexPageComponent } from './components/coding-projects/project-page/reactjs-projects/pokedex-page-component';
import { CheckInPageComponent } from './components/coding-projects/project-page/reactjs-projects/checkin-page-component';
import FunReactHomeComponent from './components/fun-react-project/home-page-component/FunReactHomeComponent';
import FunReactToDoListComponent from './components/fun-react-project/to-do-list-page-component/ToDoListPageComponent';
import { TipCalculatorPageCompoennt } from './components/fun-react-project/tip-calculator-page-component/TipCalculatorPageComponent';
import { TipCalculatorPageComponent } from './components/coding-projects/project-page/reactjs-projects/tip-calculator-page-component';
import { PokedexComponent } from './components/fun-react-project/fun-react-pokedex/pokedex-component';
import { TicTacToeComponent } from './components/fun-react-project/fun-reaect-tic-tac-toe/tic-tac-toc-component';
import { CheckInComponent } from './components/fun-react-project/fun-react-attendance-sheet/attendance-component';
import { GroceryListComponent } from './components/fun-react-project/grocery-list/grocery-list-component';

function App() {
  return (
    <div>
      <HashRouter>
          <Switch>
            <Route path="/home" exact component={HomeComponent} />
            <Route path="/about-me"  exact component={AboutMeComponent} />
            <Route path="/coding-projects" exact component={CodingProjectsComponent} />
            <Route path="/dsa-project" exact component={DSAPageComponent} />
            <Route path="/car-rental-service-project"  exact component={CarRentalServicePageComponent} />
            <Route path="/ers-project"  exact component={ERSPageComponent} />
            <Route path="/paint-flooring-cost-calculator" exact component={PaintFlooringCostCalculatorPageComponent} />
            <Route path="/student-registration-application" exact component={StudentRegistrationPageComponent} />
            <Route path="/package-delivery-system" exact component={PackageDeliveryApplicationpageComponent}  />
            <Route path="/entity-relationship-diagram" exact component={EntityRelationshipDiagramPageComponent} />
            <Route path="/sql-queries" exact component={QueriesPageComponent} />
            <Route path="/pl-sql-scripts" exact component={PLSQLScriptsPageComponent} />
            <Route path="/database-administration" exact component={DatabaseAdministrationPageComponent} />
            <Route path="/research-louisville" exact component={ResearchLouisvillePageComponent} />
            <Route path="/registration-system" exact component={RegistrationSystemPageComponent} />
            <Route path="/program1" exact component={PaintAndLaborCalculatorPHPPageComponent} />
            <Route path="/book-keeping-application" exact component={BookKeepingApplicationPageComponent} />
            <Route path="/to-do-list" exact component={ToDoListPageComponent} />
            <Route path="/tip-calculator" exact component={TipCalculatorPageComponent} />
            <Route path="/pokedex" exact component={PokedexPageComponent} />
            <Route path="/check-in" exact component={CheckInPageComponent} />
            <Route path="/resume" component={ResumeComponent} />
            <Route path="/contact-me" component={ContactForm} />
            <Route path="/fun-react-projects" exact component={FunReactHomeComponent} />
            <Route path="/fun-react-projects/to-do-list" exact component={FunReactToDoListComponent} />
            <Route path="/fun-react-projects/tip-calculator" exact component={TipCalculatorPageCompoennt} />
            <Route path="/fun-react-tic-tac-toe" exact component={TicTacToeComponent} />
            <Route path="/fun-react-pokedex" exact component={PokedexComponent} />
            <Route path="/fun-react-attendance-sheet" exact component={CheckInComponent} />
            <Route path="/fun-react-grocery-list" exact component={GroceryListComponent} />
            <Route path="https://github.com/Ejdeguzman72" />
            <Route path="https://www.linkedin.com/in/edgarjdeguzman" />
            <Route component={HomeComponent}  />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
