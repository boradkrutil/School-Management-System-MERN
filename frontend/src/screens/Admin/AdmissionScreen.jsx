import React from 'react';
import { Form, Input, Select, DatePicker, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Sidebar';

const { Option } = Select;

const AdmissionScreen = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Handle form submission logic here
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    return isJpgOrPng;
  };

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
    
            <div class="row pt-3">
         
            <Form
      name="admissionForm"
      onFinish={onFinish}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input the first name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input the last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[
          {
            required: true,
            message: 'Please select the gender!',
          },
        ]}
      >
        <Select>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Date Of Birth"
        name="dob"
        rules={[
          {
            required: true,
            message: 'Please select the date of birth!',
          },
        ]}
      >
        <DatePicker format="DD/MM/YYYY" />
      </Form.Item>

      <Form.Item
        label="Religion"
        name="religion"
        rules={[
          {
            required: true,
            message: 'Please select the religion!',
          },
        ]}
      >
        <Select>
          <Option value="islam">Islam</Option>
          <Option value="hindu">Hindu</Option>
          <Option value="christian">Christian</Option>
          <Option value="buddish">Buddish</Option>

        </Select>
      </Form.Item>

      <Form.Item
        label="E-Mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input Your EMail',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Course"
        name="course"
        rules={[
          {
            required: true,
            message: 'Please select the religion!',
          },
        ]}
      >
        <Select>
          <Option value="Computer Science">Computer Science</Option>
        </Select>
      </Form.Item>


      <Form.Item
        label="Admission ID"
        name="adminID"
        rules={[
          {
            required: true,
            message: 'Please input the Admission Number!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input the Phone Number!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Upload Student Photo"
        name="photo"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Please upload a photo with dimensions 150px X 150px."
      >
        <Upload
          name="photo"
          beforeUpload={beforeUpload}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

            </div>
    
            
            </div>
    
            </section>
            </div>
           
    
    
    </div>
    
        </div>

    
  );
};

export default AdmissionScreen;
