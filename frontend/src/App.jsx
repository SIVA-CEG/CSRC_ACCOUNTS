import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Master from './pages/Master';
import Budget from './pages/Budget';
import Banking from './pages/banking/Banking';
import Bank from './pages/banking/bank/Bank';
import NewEntry from './pages/banking/bank/NewEntry';
import OriginalStatements from './pages/banking/bank/OriginalStatements';
import CurrentStatements from './pages/banking/bank/CurrentStatements';
import FundTransfer from './pages/banking/fundtransfer/FundTransfer';
import RevenueAccount from './pages/banking/fundtransfer/RevenueAccount';
import ProjectAccount from './pages/banking/fundtransfer/ProjectAccount';
import MOPRAccount from './pages/banking/fundtransfer/MOPRAccount';
import TTDFAccount from './pages/banking/fundtransfer/TTDFAccount';
import ConsultancyAccount from './pages/banking/fundtransfer/ConsultancyAccount';
import TECAccount from './pages/banking/fundtransfer/TECAccount';
import TAXAccount from './pages/banking/fundtransfer/TAXAccount';
import Receipts from './pages/receipts/Receipts';
import ProjectAcR from './pages/receipts/ProjectAc';
import MoPRAc from './pages/receipts/MoPRAc';
import TTDFAcR from './pages/receipts/TTDFAc';
import RevenueAcR from './pages/receipts/RevenueAc';
import TaxAcR from './pages/receipts/TaxAc';
import ReceiptLock from './pages/receipts/ReceiptLock';
import Payments from './pages/payments/Payments';
import RevenueAcP from './pages/payments/RevenueAc';
import ProjectAcP from './pages/payments/ProjectAc';
import MOPRAcP from './pages/payments/MOPRAc';
import TTDFAcP from './pages/payments/TTDFAc';
import TaxAcP from './pages/payments/TaxAc';
import UnspentAmount from './pages/payments/UnspentAmount';
import AdvSettlement from './pages/payments/AdvSettlement';
import BankClearance from './pages/payments/BankClearance';
import VoucherClearance from './pages/payments/VoucherClearance';
import PaymentTypes from './pages/payments/PaymentTypes';
import SubheadTypes from './pages/payments/SubheadTypes';
import PaymentLock from './pages/payments/PaymentLock';
import './App.css';


/* =======================
   MASTER IMPORTS
======================= */
import MasterLayout    from './pages/master/MasterLayout';
import Campus          from './pages/master/Campus';
import Departments     from './pages/master/Departments';
import Beneficiaries   from './pages/master/Beneficiaries';
import Designation     from './pages/master/Designation';
import Faculties       from './pages/master/Faculties';
import UserActivation  from './pages/master/UserActivation';
import PIRoles         from './pages/master/PIRoles';
import Schemes         from './pages/master/Schemes';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/master" element={<Master />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/banking/bank" element={<Bank />} />
        <Route path="/banking/bank/new-entry" element={<NewEntry />} />
        <Route path="/banking/bank/original-statements" element={<OriginalStatements />} />
        <Route path="/banking/bank/current-statements" element={<CurrentStatements />} />
        <Route path="/banking/fund-transfer" element={<FundTransfer />} />
        <Route path="/banking/fund-transfer/revenue-account" element={<RevenueAccount />} />
        <Route path="/banking/fund-transfer/project-account" element={<ProjectAccount />} />
        <Route path="/banking/fund-transfer/mopr-account" element={<MOPRAccount />} />
        <Route path="/banking/fund-transfer/ttdf-account" element={<TTDFAccount />} />
        <Route path="/banking/fund-transfer/consultancy-account" element={<ConsultancyAccount />} />
        <Route path="/banking/fund-transfer/tec-account" element={<TECAccount />} />
        <Route path="/banking/fund-transfer/tax-account" element={<TAXAccount />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/receipts/project-ac" element={<ProjectAcR />} />
        <Route path="/receipts/mopr-ac" element={<MoPRAc />} />
        <Route path="/receipts/ttdf-ac" element={<TTDFAcR />} />
        <Route path="/receipts/revenue-ac" element={<RevenueAcR />} />
        <Route path="/receipts/tax-ac" element={<TaxAcR />} />
        <Route path="/receipts/receipt-lock" element={<ReceiptLock />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/revenue-ac" element={<RevenueAcP />} />
        <Route path="/payments/project-ac" element={<ProjectAcP />} />
        <Route path="/payments/mopr-ac" element={<MOPRAcP />} />
        <Route path="/payments/ttdf-ac" element={<TTDFAcP />} />
        <Route path="/payments/tax-ac" element={<TaxAcP />} />
        <Route path="/payments/unspent-amount" element={<UnspentAmount />} />
        <Route path="/payments/adv-settlement" element={<AdvSettlement />} />
        <Route path="/payments/bank-clearance" element={<BankClearance />} />
        <Route path="/payments/voucher-clearance" element={<VoucherClearance />} />
        <Route path="/payments/payment-types" element={<PaymentTypes />} />
        <Route path="/payments/subhead-types" element={<SubheadTypes />} />
        <Route path="/payments/payment-lock" element={<PaymentLock />} />

        {/* ── MASTER ── */}
        <Route path="/master" element={<MasterLayout />}>
          <Route index element={<Navigate to="campus" replace />} />
          <Route path="campus"          element={<Campus />} />
          <Route path="departments"     element={<Departments />} />
          <Route path="beneficiaries"   element={<Beneficiaries />} />
          <Route path="designation"     element={<Designation />} />
          <Route path="faculties"       element={<Faculties />} />
          <Route path="user-activation" element={<UserActivation />} />
          <Route path="pi-roles"        element={<PIRoles />} />
          <Route path="schemes"         element={<Schemes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}