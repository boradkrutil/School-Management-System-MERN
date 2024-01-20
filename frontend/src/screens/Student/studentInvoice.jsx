import React, { useState, useEffect } from 'react';
import {  Row, Col, ListGroup, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { Link, useLocation } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Sidebar from './components/Sidebar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getFeesByStudent } from '../../actions/feeActions';
import { Modal, Form, Input, DatePicker, Select,Table } from 'antd';
import { createPaymentTransaction, initiateStkPush, listPaymentTransactionsByFee } from '../../actions/paymentActions';
import {v4} from 'uuid'
import { NavLink } from 'react-router-dom';

const localizer = momentLocalizer(moment) // or globalizeLocalizer
const { Option } = Select;

const studentInvoiceScreen = () => {
 const [isCheque, setIsCheque] = useState(false);
  const [isMpesa, setIsMpesa] = useState(false);

  const handlePaymentMethodChange = (value) => {
    setIsCheque(value === 'cheque');
    setIsMpesa(value === 'mpesa');
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const feesByStudent = useSelector((state) => state.getFeesByStudent); // Assuming you have a fees reducer
  const { loading, error, fees } = feesByStudent;

  const paymentTransactionsByFee = useSelector((state) => state.paymentTransactionByFee);
  const { loading: paymentTransactionsLoading, error: paymentTransactionsError, paymentTransactions } = paymentTransactionsByFee;


  console.log("fees is ",fees)
  const logoutHandler = () => {
    dispatch(logout());
  };

  
  useEffect(() => {
    if (userInfo && userInfo._id) {
      dispatch(getFeesByStudent(userInfo.userData._id)); // Dispatch the action with the student's ID
    }
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (fees && fees._id) {
      console.log("school fees is as followins ",fees)
      dispatch(listPaymentTransactionsByFee(fees._id));
    }
  }, [dispatch, fees,userInfo]);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle the form submission, e.g., send the payment details to the backend
    values.schoolFees = fees._id
    values.transactionId = v4()
    // makePayment(values);
    console.log(values)
    if(values.paymentMethod == "mpesa"){
      dispatch(initiateStkPush(values.amount,values.phone))
    }
    else{
    dispatch(createPaymentTransaction(values))

    }
  };


  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Amount Paid',
      dataIndex: 'amountPaid',
      key: 'amountPaid',
    },
    {
      title: 'approved',
      dataIndex: 'approved',
      key: 'approved',
    },
    {
      title: 'Amount Remaining',
      dataIndex: 'amountRemaining',
      key: 'amountRemaining',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const data = paymentTransactions.map((transaction) => ({
    key: transaction._id,
    transactionId: transaction.transactionId,
    amountPaid: transaction.amount,
    approved: transaction.approved,
    amountRemaining:(fees.amount - transaction.amount),
    // amountRemaining: transaction.amountRemaining,
    paymentMethod: transaction.paymentMethod,
    date: moment(transaction.createdAt).format('YYYY-MM-DD'),
  }));

  return (
    <div class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  


  
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
   
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    
    </ul>

    
    <ul class="navbar-nav ml-auto">


      
     
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

     
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
          
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
       
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
           
            <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
           
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true"  role="button">
          <i class="fas fa-th-large"></i>
          <i class="fas fa-right-from-bracket"></i>
        </a>
      </li>
    </ul>
  </nav>
  
        <Sidebar />
        <div class="content-wrapper">

        <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="callout callout-info">
              <h5><i class="fas fa-info"></i> Note:</h5>
              This page has been enhanced for printing.
            </div>


           
            <div class="invoice p-3 mb-3">
             
              <div class="row">
                <div class="col-12">
                  <h4>
                    <i class="fas fa-globe"></i> EVE SMS, Inc.
                    <small class="float-right">Date: 2/10/2014</small>
                  </h4>
                </div>
               
              </div>
             
              <div class="row invoice-info">
                <div class="col-sm-4 invoice-col">
                  From
                  <address>
                    <strong>School Mng., Inc.</strong><br/>
                   
                  </address>
                </div>
           
                <div class="col-sm-4 invoice-col">
  To
  <address>
    <strong>{userInfo.firstName} {userInfo.lastName}</strong><br/>
    {userInfo.address && (
      <>
        {userInfo.address.street && <>{userInfo.address.street},</>}
        {userInfo.address.suite && <> Suite {userInfo.address.suite},</>}
        {userInfo.address.city && <>{userInfo.address.city},</>}
        {userInfo.address.state && <>{userInfo.address.state} {userInfo.address.zipCode},</>}
        <br/>
      </>
    )}
    Phone: {userInfo.userData.phone || 'N/A'}<br/>
    Email: {userInfo.email}
  </address>
</div>

                
                <div class="col-sm-4 invoice-col">
                  <b>Invoice #007612</b><br/>
                  <br/>
                  <b>Order ID:</b> 4F3S8J<br/>
                 
                </div>
                
              </div>
              

              
              <div class="row">
                <div class="col-12 table-responsive">
                <Table columns={columns} dataSource={data} />

                </div>
                
              </div>
              

          
              

        
            </div>
           
          </div>
        </div>
      </div>
    </section>
        </div>
       


</div>

    </div>
  );
};

export default studentInvoiceScreen;
