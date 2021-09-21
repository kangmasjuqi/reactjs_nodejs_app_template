import Body from './Body';
import AccordionElement from './elements/AccordionElement';
import AlertElement from './elements/AlertElement';
import BadgeElement from './elements/BadgeElement';
import BreadcrumbElement from './elements/BreadcrumbElement';
import ButtonElement from './elements/ButtonElement';
import CardDeckElement from './elements/CardDeckElement';
import CardElement from './elements/CardElement';
import FormElement from './elements/FormElement';
import FormWithValidationElement from './elements/FormWithValidationElement';
import JumbotronElement from './elements/JumbotronElement';
import ModalElement from './elements/ModalElement';
import NavbarElement from './elements/NavbarElement';
import PaginationElement from './elements/PaginationElement';
import ProgressElement from './elements/ProgressElement';
import ShadowElement from './elements/ShadowElement';
import SpinnerElement from './elements/SpinnerElement';
import TabElement from './elements/TabElement';
import TableElement from './elements/TableElement';
import ToastElement from './elements/ToastElement';

import SimpleCrudElement from './pages/simplecrud/SimpleCrudIndex';
import SimpleCrudCreate from './pages/simplecrud/SimpleCrudCreate';
import WizardCrudElement from './pages/wizardcrud/WizardCrudIndex';

import SimpleBar from './charts/SimpleBar';
import StackedBar from './charts/StackedBar';
import ComposedChartSample from './charts/ComposedChartSample';
import SimpleLine from './charts/SimpleLine';
import SimpleRadar from './charts/SimpleRadar';
import SimplePie from './charts/SimplePie';
import PieTwoLevel from './charts/PieTwoLevel';

import Invoice from './pages/Invoice';
import Ecommerce from './pages/Ecommerce';
import Employee from './pages/Employee';

import Login from './pages/Login';
import Contact from './pages/Contact';

import Preferences from './pages/Preferences';
import ChangePassword from './pages/ChangePassword';

import Uploader from './pages/Uploader';

const routes = [
    { title: 'Body', component: Body, path: '/', exact: true },
    { title: 'AccordionElement', component: AccordionElement, path: '/accordion', exact: true },
    { title: 'AlertElement', component: AlertElement, path: '/alert', exact: true },
    { title: 'BadgeElement', component: BadgeElement, path: '/badge', exact: true },
    { title: 'BreadcrumbElement', component: BreadcrumbElement, path: '/breadcrumb', exact: true },
    { title: 'ButtonElement', component: ButtonElement, path: '/button', exact: true },
    { title: 'CardDeckElement', component: CardDeckElement, path: '/carddeck', exact: true },
    { title: 'CardElement', component: CardElement, path: '/card', exact: true },
    { title: 'FormElement', component: FormElement, path: '/form', exact: true },
    { title: 'FormWithValidationElement', component: FormWithValidationElement, path: '/formwithvalidation', exact: true },
    { title: 'JumbotronElement', component: JumbotronElement, path: '/jumbotron', exact: true },
    { title: 'ModalElement', component: ModalElement, path: '/modal', exact: true },
    { title: 'NavbarElement', component: NavbarElement, path: '/navbar', exact: true },
    { title: 'PaginationElement', component: PaginationElement, path: '/pagination', exact: true },
    { title: 'ProgressElement', component: ProgressElement, path: '/progress', exact: true },
    { title: 'ShadowElement', component: ShadowElement, path: '/shadow', exact: true },
    { title: 'SpinnerElement', component: SpinnerElement, path: '/spinner', exact: true },
    { title: 'TabElement', component: TabElement, path: '/tab', exact: true },
    { title: 'TableElement', component: TableElement, path: '/table', exact: true },
    { title: 'ToastElement', component: ToastElement, path: '/toast', exact: true },
    { title: 'SimpleCrudElement', component: SimpleCrudElement, path: '/simplecrud', exact: true },
    { title: 'SimpleCrudCreate', component: SimpleCrudCreate, path: '/simplecrud/create', exact: true },
    { title: 'WizardCrudElement', component: WizardCrudElement, path: '/wizardcrud', exact: true },
    { title: 'SimpleBar', component: SimpleBar, path: '/simplebar', exact: true },
    { title: 'StackedBar', component: StackedBar, path: '/stackedbar', exact: true },
    { title: 'ComposedChartSample', component: ComposedChartSample, path: '/composedchart', exact: true },
    { title: 'SimpleLine', component: SimpleLine, path: '/simpleline', exact: true },
    { title: 'SimpleRadar', component: SimpleRadar, path: '/simpleradar', exact: true },
    { title: 'SimplePie', component: SimplePie, path: '/simplepie', exact: true },
    { title: 'PieTwoLevel', component: PieTwoLevel, path: '/pietwolevel', exact: true },
    { title: 'Invoice', component: Invoice, path: '/invoice', exact: true },
    { title: 'Ecommerce', component: Ecommerce, path: '/ecommerce', exact: true },
    { title: 'Employee', component: Employee, path: '/employee', exact: true },
    { title: 'Login', component: Login, path: '/login', exact: true },
    { title: 'Contact', component: Contact, path: '/contact', exact: true },
    { title: 'Preferences', component: Preferences, path: '/preferences', exact: true },
    { title: 'ChangePassword', component: ChangePassword, path: '/change-password', exact: true },
    { title: 'Uploader', component: Uploader, path: '/uploader', exact: true },
];

export default routes;
